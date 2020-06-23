import React from 'react';
import { PlainTemplate } from 'components/base/template';
import { Page } from 'pages';
import { SigninContainer, HeaderContainer } from 'containers';

function SignIn() {
  return (
    <Page title="GraphQL Login">
      <PlainTemplate header={<HeaderContainer />}>
        <SigninContainer />
      </PlainTemplate>
    </Page>
  );
}

export default SignIn;
