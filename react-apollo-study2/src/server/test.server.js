import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { SchemaLink } from 'apollo-link-schema';
import { makeExecutableSchema } from 'graphql-tools';
// import uuidv4 from 'uuid/v4';

const wait = ms => new Promise(resolve => setInterval(resolve, ms));

const createTypeDefs = () => `
  type Query {
    notes: [Note]!
  }

  type Mutation {
    addNote(content: String): Note
  }

  type Note {
    id: ID
    content: String
  }
`;

const createResolvers = () => ({
  Query: {
    async notes() {
      await wait(1000);
      return JSON.parse(localStorage.getItem('NOTES')) || [];
    },
  },
  Mutation: {
    async addNote(_, { content }) {
      await wait(1000);
      const note = { id: 5, content };
      const notes = [...(JSON.parse(localStorage.getItem('NOTES')) || []), note];
      localStorage.setItem('NOTES', JSON.stringify(notes));
      return note;
    },
  },
});

const createSchema = () =>
  makeExecutableSchema({ typeDefs: createTypeDefs(), resolvers: createResolvers() });

const createLink = () => new SchemaLink({ schema: createSchema() });

const createCache = () => new InMemoryCache();

export default () => new ApolloClient({ link: createLink(), cache: createCache() });
