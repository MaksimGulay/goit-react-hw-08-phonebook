// UserMenu.jsx
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations'; 
import { Button, Congrt, Container } from './userMenu-style';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <Container>
      <Congrt>Welcome, {user.name}</Congrt>

      <Button type="button" onClick={handleLogOut}>
        Logout
      </Button>
    </Container>
  );
};
