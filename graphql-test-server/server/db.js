export const users = [...Array(5).keys()].map(key => ({
  id: key + '',
  name: `Name${key}`,
}));

export const todos = [
  {
    id: '1',
    title: 'Read emails',
    completed: false,
  },
  {
    id: '2',
    title: 'Buy orange',
    completed: true,
  },
];
