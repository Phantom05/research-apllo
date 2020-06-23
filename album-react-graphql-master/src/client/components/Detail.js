import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { PHOTO_LIST } from 'client/queries';
import styled from 'styled-components';

const Detail = (props) => {
  const { match } = props;
  const albumId = match.params.albumId;

  const { loading, error, data } = useQuery(PHOTO_LIST, {
    variables: { albumId: Number(albumId) },
  });

  if (loading) {
    return 'Loading';
  }

  if (error) {
    return 'Loading Error';
  }

  return (
    <Fragment>
      {
        data && data.photos && data.photos.map((item) => {
          return (
           <div key={item.id}>
             <Card background={item.url}>
               <Title>
                 {item.title}
               </Title>
             </Card>
           </div>
          )
        })
      }
    </Fragment>
  );
};

const Card = styled.div`
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  background-image: ${props => `url(${props.background});`}
  background-size: cover;
  background-position: center center;
  height: 300px;
  width: 300px;
  margin-bottom: 40px;
  position: relative; 
`;

const Title = styled.span`
  background-color: white;
  width: auto;
  padding: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  position: absolute;
  bottom: 25px;
  left: 0;
  right: 0;
  margin: auto;
`;

export default Detail;
