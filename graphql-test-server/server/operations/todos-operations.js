import { todos } from 'db/todos-db';

export const getTodos = () => todos;
export const findTodo = (parent, { id }) => {
  const todo = todos.find(todo => todo.id === id);
  if (todo) {
    return todo;
  } else {
    throw new Error('Not Found!');
  }
};
