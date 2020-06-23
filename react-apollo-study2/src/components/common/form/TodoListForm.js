import React, { useCallback } from 'react';
import _ from 'lodash';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useImmer } from 'use-immer';
import styled from 'styled-components';
import client from 'apolloClient';
import gql from 'graphql-tag';
import { ADD_TODO, TODOS, UPDATE_TODO, GET_TODOS } from 'lib/defines';

const TodoListFormState = {
  input: null,
  list: [],
};

function AddTodos() {
  const [values, setValues] = useImmer(TodoListFormState);
  const valuesInput = values.input === null ? '' : values.input;
  const valuesTodoList = values.list || [];
  const [addTodo, { data }] = useMutation(ADD_TODO, {
    update(cache, { data: { addTodo } }) {
      const { todos } = client.readQuery({ query: TODOS });
      client.writeQuery({
        query: TODOS,
        data: { todos: todos.concat([addTodo]) },
      });
    },
  });
  const [updateTodo, { loading: mutationLoading, error: mutationError }] = useMutation(UPDATE_TODO);
  /**
   * NOTE: event change
   * @param {*} e
   */
  const handleChange = useCallback(e => {
    const target = e.target;
    const targetValue = target.value;
    setValues(draft => {
      draft[target.name] = targetValue;
    });
  });
  /**
   * NOTE: event keyup
   * @param {*} config
   */
  const handleKeyUp = useCallback(config => {
    if (config.key === 'Enter') {
      // handleClick({ type: 'update', name: 'insert' });
      handleSubmit();
    }
  });

  /**
   * NOTE: event submit
   * @param {*} e
   */
  const handleSubmit = e => {
    // e.preventDefault();
    console.log(values, 'values');

    // id를 맞춰줘야 수정이 가능함
    // updateTodo({ variables: { id: 0, type: values.input } });
    addTodo({ variables: { type: values.input } });
    // graphql mutation 날리기
  };

  console.log(data, 'data');
  console.log(mutationLoading, 'mutationLoading');

  return (
    <Styled.TodoListForm>
      <h2>Todo List</h2>
      <div>
        <button type="button" onClick={() => handleClick({ type: 'load' })}>
          Load
        </button>
        <button type="submit" onClick={handleSubmit}>
          Save
        </button>
      </div>
      <input
        type="text"
        name="input"
        value={valuesInput}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        autoComplete="off"
      />
    </Styled.TodoListForm>
  );
}

function GetTodos() {
  const { loading, error, data } = useQuery(GET_TODOS);

  console.log(data, 'getTodos');
  if (loading) return <p>Loading...</p>;
  return (
    <>
      {data.todos.map((item, idx) => {
        return <div key={idx}>{item.type}</div>;
      })}
    </>
  );
}

function Todos() {
  return (
    <>
      <AddTodos />
      <GetTodos />
    </>
  );
}
const Styled = {
  TodoListForm: styled.div`
    .todo__list {
      padding: 5px;
    }
  `,
};

export default Todos;

{
  /* <button type="button" onClick={e => handleClick({ e, type: 'update', name: 'insert' })}>
        OK
      </button> */
}
{
  /* </form> */
}
/**
 * NOTE: event click
 * @param {*} config
 */
// const handleClick = useCallback(config => {
//   const { type, name } = config;
//   if (type === 'load') {
//     console.log('load 하기');
//   }
//   if (type === 'update') {
//     if (name === 'insert') {
//       if (valuesInput?.trim() === '') return;
//       // setValues(draft => {
//       //   draft.list = valuesTodoList.concat(valuesInput);
//       //   draft.input = '';
//       // });
//       handleSubmit();
//     }
//     if (name === 'delete') {
//       console.log('delete');
//     }
//   }
// });
