// AppBar.js
import { Navigation } from 'components/navigation/Navigation';
import { AuthNav } from 'components/authNav/AuthNav';
import { UserMenu } from 'components/userMenu/UserMenu';
import { useAuth } from 'hooks/useAuth'
import { Container } from './appBar-style';


export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Container>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Container>
  );
};
