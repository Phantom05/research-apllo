import gql from 'graphql-tag';

// NOTE: type
const typeContinents = `
  continents {
    code
    name
  }
`;
const typeCountry = `
  countries {
    name
    phone
    capital
    native
  }
`;

// NOTE: query
export const QUERY_GET_CONTINENTS = gql`
  query {
    ${typeContinents}
  }
`;

export const GET_COUNTRY = gql`
  query {
    ${typeCountry}
  }
`;

// NOTE: mutation
export const ADD_NOTE = gql`
  mutation addNote($content: String) {
    addNote(content: $content) {
      id
      content
    }
  }
`;

// NOTE: view
export const VIEW_GET_HOME = gql`
  query {
    ${typeContinents}
    ${typeCountry}
  }
`;

// NOTE: TodoList
// SECTION: TodoList
// SECTION: TodoList
export const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

export const TODOS = gql`
  {
    todos {
      id
    }
  }
`;

export const UPDATE_TODO = gql`
  mutation UpdateTodo($id: String!, $type: String!) {
    updateTodo(id: $id, type: $type) {
      id
      type
    }
  }
`;

export const GET_TODOS = gql`
  {
    todos {
      id
      type
    }
  }
`;

export const TEST = gql`
  fragment todosTest on Character {
    todos {
      id
      type
    }
  }
`;
