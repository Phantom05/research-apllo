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
