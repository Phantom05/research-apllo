import React from 'react';
import { PlainTemplate } from 'components/base/template';
import { Page } from 'pages';
import { TodoListContainer, HeaderContainer } from 'containers';

function TodoList() {
  return (
    <Page title="GraphQL Todo List">
      <PlainTemplate header={<HeaderContainer />}>
        <TodoListContainer />
      </PlainTemplate>
    </Page>
  );
}

export default TodoList;
