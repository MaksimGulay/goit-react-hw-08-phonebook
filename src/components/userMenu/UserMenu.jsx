// UserMenu.jsx
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations'; 
import { Button } from './userMenu-style';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <div>
      <p>Welcome, {user.name}</p>
      <Button type="button" onClick={handleLogOut}>
        Logout
      </Button>
    </div>
  );
};
