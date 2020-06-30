import { todos } from 'db/todos-db';

export const getTodos = () => todos;
export const findTodo = (_, { id }) => {
  const todo = todos.find(todo => todo.id === id);
  if (todo) {
    return todo;
  } else {
    throw new Error('Not Found!');
  }
};
export const addTodo = (_, { title }) => {
  const todoFormat = {
    id: todos.length + 1,
    completed: false,
    title,
  };
  todos.push(todoFormat);
  return true;
};

export const deleteTodo = (_, { id }) => {
  const index = todos.findIndex(todo => todo.id === id);
  if (index < 0) return false;
  todos.splice(index, 1);
  return true;
};
export const updateTodo = (_, { id, title, completed }) => {
  const todo = todos.find(todo => todo.id === id);
  const index = todos.findIndex(todo => todo.id === id);
  if (index < 0 || !todo) return false;
  const todoFormat = {
    id: todo.id,
    completed: !!completed,
    title,
  };
  todos.splice(index, 1, todoFormat);
  return true;
  // return true;
};
