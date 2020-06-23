import React, { Fragment, useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/react-hooks';
import { ALBUM_THUMBNAIL } from 'client/queries';

const Album = (props) => {
  const { title, albumId } = props;
  const [thumbnail, setThumbnail] = useState(''); // thumbnail

  const { loading, error, data } = useQuery(ALBUM_THUMBNAIL, {
    variables: { albumId },
  });

  useEffect(() => {
    if(!loading && !error) {
      setThumbnail(data.albumThumbnail.thumbnailUrl);
    }
  }, [loading, error, data]);

  return (
    <Fragment>
      <Link to={`/details/${albumId}`}>
        <Card background={thumbnail}>
          <Title>
            {title}
          </Title>
        </Card>
      </Link>
    </Fragment>
  );
};

Album.propTypes = {
  albumId: PropTypes.number,
  title: PropTypes.string
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

export default Album;
