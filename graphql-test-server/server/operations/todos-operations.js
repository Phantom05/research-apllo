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
export const addTodo = (parent, { title }) => {
  const todoFormat = {
    id: todos.length + 1,
    completed: false,
    title,
  };
  todos.push(todoFormat);
  return true;
};

export const deleteTodo = (parent, { id }) => {
  const index = todos.findIndex(todo => todo.id === id);
  if (index < 0) return false;
  todos.splice(index, 1);
  return true;
};
export const updateTodo = (parent, { id, title, completed }) => {
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

export const findList = (parent, { id }, test) => {
  console.log(test, 'test');
  console.log('findList');
  console.log(id, 'id');
  console.log(_, 'parent');

  return { id: '', title: '' };
};

// todos에서 find 돌면서 list에서 findIndex 돌린 다음에 있으면 상위에다가 인덱스 저장해놓고 index > -1을 리턴한 다음에 return foundTodo[index]
