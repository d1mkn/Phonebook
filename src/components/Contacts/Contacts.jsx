import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { Loader } from 'components/Loader/Loader';
import { ListItem } from 'components/ListItem/ListItem';
import css from './Contacts.module.css';

export const Contacts = ({ children }) => {
  const items = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = () => {
    return items.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div>
      {children}
      <div className={css.ListWrap}>
        {isLoading && <Loader />}
        {error !== null && error}
        <ul>
          {filteredContacts().map(({ id, name, number }) => {
            return <ListItem key={id} id={id} name={name} number={number} />;
          })}
        </ul>
      </div>
    </div>
  );
};

Contacts.propTypes = {
  children: PropTypes.object.isRequired,
};
