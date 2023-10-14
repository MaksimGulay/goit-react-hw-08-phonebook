// Navigations.jsx
// import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Container, Nav, StyledNavLink} from './navigation-style';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Container>
      <Nav>
        <StyledNavLink to="/">Home</StyledNavLink>
        {isLoggedIn && (
        <StyledNavLink to="/contacts">Contacts</StyledNavLink>)}
      </Nav>
    </Container>
  );
};
