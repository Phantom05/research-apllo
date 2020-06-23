import ApolloClient from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// 'https://countries.trevorblades.com'
const client = new ApolloClient({
  uri: 'https://plp0mopxq.sse.codesandbox.io/',
  cache: new InMemoryCache(),
});
export default client;

// import ApolloClient from 'apollo-boost';
// import { createHttpLink } from 'apollo-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';

// const client = new ApolloClient({
//   link: createHttpLink({ uri: 'https://countries.trevorblades.com' }),
//   cache: new InMemoryCache(),
// });
// export default client;
