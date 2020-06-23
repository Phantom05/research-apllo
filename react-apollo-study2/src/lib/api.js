import gql from 'graphql-tag';

export const GET_CONTINENTS = gql`
  query {
    continents {
      code
      name
    }
  }
`;
