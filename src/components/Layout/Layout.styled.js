import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNav = styled('nav')`
  display: flex;
  padding: 15px;
  gap: 15px;
  font-weight: bold;
  border-bottom: 2px solid violet;
`;

export const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: violet;
  }
`;
