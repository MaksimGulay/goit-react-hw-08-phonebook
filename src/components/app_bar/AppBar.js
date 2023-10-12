// AppBar.js
import { Navigation } from 'components/navigation/Navigation';
import { AuthNav } from 'components/authNav/AuthNav';
import { UserMenu } from 'components/userMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
};
