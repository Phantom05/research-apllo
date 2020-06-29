export const users = [...Array(5).keys()].map(key => ({
  id: key + '',
  name: `Name${key}`,
}));

export const todos = [
  {
    id: '1',
    title: 'Read emails',
    completed: false,
    list: [
      {
        id: 'wow',
        name: 'world',
      },
    ],
    obj: {
      id: '!!!',
    },
  },
  {
    id: '2',
    title: 'Buy orange',
    completed: true,
    list: [],
    obj: {
      id: '~~~',
    },
  },
];
