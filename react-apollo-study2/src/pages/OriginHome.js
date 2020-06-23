import React from 'react';
import { PlainTemplate } from 'components/base/template';
import { PlainHeader } from 'components/common/header';
import { Page } from 'pages';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_CONTIENTS = gql`
  query {
    continents {
      code
      name
    }
  }
`;

function Home(props) {
  return (
    <Page title="GraphQL Home">
      <PlainTemplate header={<PlainHeader />}>
        <h1> Home Hello, GraphQL</h1>
        <Query query={GET_CONTIENTS}>
          {response => {
            const { loading, error, data } = response;
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error!</p>;

            return (
              <div>
                <ul>
                  {data.continents?.map(({ code, name }) => (
                    <li key={code}>{name}</li>
                  ))}
                </ul>
              </div>
            );
          }}
        </Query>
      </PlainTemplate>
    </Page>
  );
}

export default Home;
