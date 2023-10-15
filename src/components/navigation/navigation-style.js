import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
display: flex;
  flex-direction: column;
`

export const Nav = styled.nav`
  display: flex;
  gap:20px
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black; 
  font-size: 16px;
  &:hover {
    color: #007bff;
  }
`;






