import { todos } from 'db/todos-db';

export const getTodos = async () => todos;
export const findTodo = async (parent, { id }, ctx, info) => {
  console.log(ctx);
  const todo = todos.find(todo => todo.id === id);
  if (todo) {
    return todo;
  } else {
    throw new Error('Not Found!');
  }
};
export const addTodo = async (parent, { title }) => {
  const todoFormat = {
    id: todos.length + 1,
    completed: false,
    title,
  };
  todos.push(todoFormat);
  return { result: 1 };
};

export const deleteTodo = async (parent, { id }) => {
  const index = todos.findIndex(todo => todo.id === id);
  if (index < 0) return false;
  todos.splice(index, 1);
  return { result: 1 };
};
export const updateTodo = async (parent, { id, title, completed }) => {
  const todo = todos.find(todo => todo.id === id);
  const index = todos.findIndex(todo => todo.id === id);
  if (index < 0 || !todo) return false;
  const todoFormat = {
    id: todo.id,
    completed: !!completed,
    title,
  };
  todos.splice(index, 1, todoFormat);
  return { result: 1 };
  // return true;
};

export const findList = async (parent, { id }, test) => {
  console.log(test, 'test');
  console.log('findList');
  console.log(id, 'id');
  console.log(_, 'parent');

  return { id: '', title: '' };
};

// todos에서 find 돌면서 list에서 findIndex 돌린 다음에 있으면 상위에다가 인덱스 저장해놓고 index > -1을 리턴한 다음에 return foundTodo[index]
