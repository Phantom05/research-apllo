import React from 'react';
import App from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './apolloClient';
// DEBUG: test server
// import createApolloClient from 'server/test.server.js';
// const client = createApolloClient();
function Root() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default Root;
