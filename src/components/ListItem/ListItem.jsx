import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

export const ListItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(selectContacts);

  return (
    <li>
      {name}: {phone}
      <button onClick={() => dispatch(deleteContact(id))} disabled={isLoading}>
        Delete
      </button>
    </li>
  );
};
