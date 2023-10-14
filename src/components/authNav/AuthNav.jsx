// AuthNav.js
import { Nav, StyledNavLink } from "./authNav-style"; 

export const AuthNav = () => {
  return (
    <Nav>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Log In</StyledNavLink>
    </Nav>
  );
};
