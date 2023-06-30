import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Navbar.Brand as={NavLink} to="/">
        Phonebook
      </Navbar.Brand>
      <Nav className="me-auto">
        {isLoggedIn && (
          <Nav.Link as={NavLink} className="me-auto" to="/contacts">
            Contacts
          </Nav.Link>
        )}
        {!isLoggedIn && (
          <Nav.Link as={NavLink} className="me-auto" to="/register">
            Register
          </Nav.Link>
        )}
        {!isLoggedIn && (
          <Nav.Link as={NavLink} className="me-auto" to="/login">
            Login
          </Nav.Link>
        )}
      </Nav>
    </>
  );
};
