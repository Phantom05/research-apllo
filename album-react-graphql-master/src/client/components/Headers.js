import React from 'react';
import styled from 'styled-components'

const Headers = () => {
  return (
    <Header>
      <Container>
        <span>네비게이션 바</span>
      </Container>
    </Header>
  )
};

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  background: white;
  
  &:after {
    bottom: -5px;
    box-shadow: inset 0px 4px 8px -3px rgba(17, 17, 17, .06);
    content: "";
    height: 5px;
    left: 0px;
    opacity: 1;
    pointer-events: none;
    position: absolute;
    right: 0px;
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 56px;
  padding: 0 16px;
`;

export default Headers;
