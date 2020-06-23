import React, { useCallback, useRef } from 'react';
import _ from 'lodash';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useImmer } from 'use-immer';
import styled from 'styled-components';
import client from 'apolloClient';
import gql from 'graphql-tag';
import { ADD_TODO, TODOS, UPDATE_TODO, GET_TODOS } from 'lib/defines';

function AddTodos() {
  const inputRef = useRef(null);
  // addTodo만하면 백엔드 데이터만 수정되고 캐싱되고있는 GraphQl의 Apollo client의 값을 업데이트하려면 두번째인자의 update함수를 실행시켜 줘야함
  /**
   * 돌연변이를 실행하면 백엔드 데이터가 수정됩니다. 해당 데이터가 Apollo Client 캐시 에도있는 경우 돌연변이 결과를 반영하도록 캐시를 업데이트해야 할 수도 있습니다. 이는 돌연변이가 기존의 단일 엔티티를 업데이트 하는지 여부에 따라 다릅니다 .
   */
  const [addTodo, { data }] = useMutation(ADD_TODO, {
    update(cache, response) {
      const addTodoData = response.data.addTodo;
      const { todos } = client.readQuery({ query: TODOS });
      // 현재 client의 캐싱된 query를 read하고
      // console.log(todos, 'todos');
      // console.log(addTodoData, 'addTodoData');
      // 현재의 todos의 값과 변경된 addTodoData의 값을 합쳐서 write해주면서 캐싱을 업데이트 해줘야함
      client.writeQuery({
        query: TODOS,
        data: { todos: todos.concat([addTodoData]) },
      });
    },
  });
  // const [updateTodo, { loading: mutationLoading, error: mutationError }] = useMutation(UPDATE_TODO);

  /**
   * NOTE: event keyup
   * @param {*} config
   */
  const handleKeyUp = e => {
    if (e.key === 'Enter') handleSubmit();
  };

  /**
   * NOTE: event submit
   * @param {*} e
   */
  const handleSubmit = e => {
    const inputValue = inputRef.current.value;
    addTodo({ variables: { type: inputValue } });
    inputRef.current.value = '';
  };

  // console.log(data, 'data');
  // console.log(mutationLoading, 'mutationLoading');

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
      <input type="text" name="input" ref={inputRef} onKeyUp={handleKeyUp} autoComplete="off" />
    </Styled.TodoListForm>
  );
}

function GetTodos() {
  const { loading, error, data } = useQuery(GET_TODOS);

  console.log(data?.todos, 'getTodos');
  if (loading) return <p>Loading...</p>;
  return (
    <>
      {data.todos.map((item, idx) => {
        return <div key={item.id}>{item.type}</div>;
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

/**
   * NOTE: event change
   * @param {*} e
  //  */
// const handleChange = useCallback(e => {
//   const target = e.target;
//   const targetValue = target.value;
//   setValues(draft => {
//     draft[target.name] = targetValue;
//   });
// });
