// Navigations.jsx
import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import { Container, Nav} from './navigation-style';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Container>
      <Nav>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn && (
        <NavLink to="/contacts">Contacts</NavLink>)}
      </Nav>
    </Container>
  );
};
