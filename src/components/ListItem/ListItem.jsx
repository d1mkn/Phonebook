import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';

export const ListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  return (
    <li>
      {name}: {phone}
      <button onClick={() => dispatch(deleteContact(id))} disabled={isLoading}>
        Delete
      </button>
    </li>
  );
};
