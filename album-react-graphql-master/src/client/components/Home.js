import React from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { ALBUM_LIST } from 'client/queries';
import Album from 'client/components/Album';

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 0.7fr);
  justify-items: center;
`;


const Home = () => {
  const { loading, error, data } = useQuery(ALBUM_LIST);

  if (loading) {
    return 'Loading';
  }

  if (error) {
    return 'Loading Error';
  }

  return (
    <Container>
      {
        data && data.albums && data.albums.map((item) => {
          return <Album key={item.id} albumId={item.id} title={item.title}/>;
        })
      }
    </Container>);
};

export default Home;
