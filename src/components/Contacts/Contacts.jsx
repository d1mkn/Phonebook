import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { fetchContacts, deleteContact } from 'redux/operations';
import { Loader } from 'components/Loader/Loader';
import css from './Contacts.module.css';

export const Contacts = ({ children, title }) => {
  const { items, isLoading, error } = useSelector(selectContacts);
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
      <h2>{title}</h2>
      {children}
      <div className={css.ListWrap}>
        {isLoading && <Loader />}
        {error !== null && error}
        <ul>
          {filteredContacts().map(({ id, name, phone }) => {
            return (
              <li id={id} key={id}>
                {name}: {phone}
                <button onClick={() => dispatch(deleteContact(id))}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

Contacts.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
