import gql from 'graphql-tag';

export const ADD_NOTE = gql`
  mutation addNote($content: String) {
    addNote(content: $content) {
      id
      content
    }
  }
`;
