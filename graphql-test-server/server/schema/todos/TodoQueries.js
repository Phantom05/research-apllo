import { getTodos } from '../../operations/todos-operations';
import { ping } from '../../operations/test-operations';
const TodoQueries = {
  Query: {
    todos: getTodos,
    ping: ping,
  },
};

export default TodoQueries;
