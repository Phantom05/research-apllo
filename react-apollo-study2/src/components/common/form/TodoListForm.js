import React from 'react';
import _ from 'lodash';
import { useImmer } from 'use-immer';
import styled from 'styled-components';

const TodoListFormState = {
  input: null,
  list: [],
};
function TodoListForm(props) {
  const [values, setValues] = useImmer(TodoListFormState);
  const valuesInput = values.input === null ? '' : values.input;
  const valuesTodoList = values.list || [];

  /**
   * NOTE: event change
   * @param {*} e
   */
  const handleChange = e => {
    const target = e.target;
    const targetValue = target.value;
    setValues(draft => {
      draft[target.name] = targetValue;
    });
  };
  /**
   * NOTE: event keyup
   * @param {*} config
   */
  const handleKeyUp = config => {
    if (config.key === 'Enter') {
      handleClick({ type: 'update', name: 'insert' });
    }
  };

  /**
   * NOTE: event click
   * @param {*} config
   */
  const handleClick = config => {
    const { type, name } = config;
    if (type === 'load') {
      console.log('load 하기');
    }
    if (type === 'update') {
      if (name === 'insert') {
        if (valuesInput?.trim() === '') return;
        setValues(draft => {
          draft.list = valuesTodoList.concat(valuesInput);
          draft.input = '';
        });
      }
      if (name === 'delete') {
        console.log('delete');
      }
    }
  };
  /**
   * NOTE: event submit
   * @param {*} e
   */
  const handleSubmit = e => {
    e.preventDefault();
    console.log('save 하기');
    // graphql mutation 날리기
  };

  return (
    <Styled.TodoListForm>
      <h2>Todo List</h2>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <button type="button" onClick={() => handleClick({ type: 'load' })}>
            Load
          </button>
          <button type="submit">Save</button>
        </div>
        <input
          type="text"
          name="input"
          value={valuesInput}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          autoComplete="off"
        />
        <button onClick={e => handleClick({ e, type: 'update', name: 'insert' })}>OK</button>
      </form>
      <div className="todo__list box">
        <ul>
          {valuesTodoList.map((item, idx) => {
            return <li key={idx}>{item}</li>;
          })}
        </ul>
      </div>
    </Styled.TodoListForm>
  );
}

const Styled = {
  TodoListForm: styled.div`
    .todo__list {
      padding: 5px;
    }
  `,
};

export default TodoListForm;
