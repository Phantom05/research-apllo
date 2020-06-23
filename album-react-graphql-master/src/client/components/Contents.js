import React from 'react';
import styled from 'styled-components';

const Contents = (props) => {
  return (
    <Container>
    {props.children}
  </Container>)
};

const Container = styled.div`
  margin-top: 56px;
  padding-top: 15px;
`;

export default Contents;
