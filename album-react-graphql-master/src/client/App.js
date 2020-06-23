import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './apolloClient';
import Detail from 'client/components/Detail';
import Home from 'client/components/Home';
import Headers from 'client/components/Headers';
import Contents from 'client/components/Contents';

function App () {
  return (
    <Fragment>
      <Headers/>
      <Contents>
        <ApolloProvider client={client}>
          <Router>
            <Fragment>
              <Route exact={true} path={'/'} component={Home}/>
              <Route exact={true} path={'/details/:albumId'} component={Detail}/>
            </Fragment>
          </Router>
        </ApolloProvider>
      </Contents>
    </Fragment>
  );
}

export default App;
