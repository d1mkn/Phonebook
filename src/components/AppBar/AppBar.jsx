import { Container, Navbar } from 'react-bootstrap';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  const { isRefreshing } = useAuth();

  return (
    <Container className="bg-body-tertiary" id="navContainer">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Navigation />
        {!isRefreshing && isLoggedIn && <UserMenu />}
      </Navbar>
    </Container>
  );
};
