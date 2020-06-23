import React from 'react';
import { PlainTemplate } from 'components/base/template';
import { Page } from 'pages';
import { HomeContainer, HeaderContainer } from 'containers';

function Home() {
  return (
    <Page title="GraphQL Home">
      <PlainTemplate header={<HeaderContainer />}>
        <HomeContainer />
      </PlainTemplate>
    </Page>
  );
}

export default Home;
