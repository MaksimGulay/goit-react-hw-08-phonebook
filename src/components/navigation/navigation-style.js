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
  /* Ваші стилі тут */
  text-decoration: none;
  color: #007bff; /* Наприклад, чорний колір тексту */
  font-size: 16px;
  /* Додайте інші стилі за потребою */
  
  &:hover {
    color: black;
  }
`;






