import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function PlainHeader(props) {
  return (
    <Styled.PlainHeader>
      <NavLink exact to="/" className="nav__item">
        Home
      </NavLink>
      <NavLink to="/login" className="nav__item">
        SignIn
      </NavLink>
    </Styled.PlainHeader>
  );
}
const Styled = {
  PlainHeader: styled.header`
    .nav__item {
      display: inline-block;
      text-decoration: none;
      margin-right: 5px;
      border: 1px solid #eee;
      padding: 5px;
      cursor: pointer;
      &.active {
        font-weight: bold;
      }
    }
  `,
};

export default PlainHeader;
