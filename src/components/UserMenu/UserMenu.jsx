import { NavDropdown } from 'react-bootstrap';
import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <NavDropdown title={`Hello, ` + user.name}>
      <NavDropdown.Item onClick={() => dispatch(logOut())}>
        Logout
      </NavDropdown.Item>
    </NavDropdown>
  );
};
