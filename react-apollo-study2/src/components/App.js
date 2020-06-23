import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, SignIn, TodoList } from 'pages';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <>
      <Helmet title={`GraphQL Apollo`} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/todo" component={TodoList} />
      </Switch>
    </>
  );
}

export default App;
