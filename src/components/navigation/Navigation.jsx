// Navigations.jsx
import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn && (
        <NavLink to="/contacts">Contacts</NavLink>)}
      </nav>
    </div>
  );
};
