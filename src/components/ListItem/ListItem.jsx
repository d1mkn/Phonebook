import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { deleteContact } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';

export const ListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  return (
    <li>
      {name}: {number}
      <Button
        variant="outline-secondary"
        size='sm'
        onClick={() => dispatch(deleteContact(id))}
        disabled={isLoading}
      >
        Delete
      </Button>
    </li>
  );
};
