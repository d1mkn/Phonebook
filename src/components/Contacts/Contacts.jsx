import React from 'react';
import PropTypes from 'prop-types';
import css from './Contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import { deleteContact } from 'redux/contactsSlice';

export const Contacts = ({ children, title }) => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div>
      <h2>{title}</h2>
      {children}
      <div className={css.ListWrap}>
        <ul>
          {filteredContacts().map(({ id, name, number }) => {
            return (
              <li id={id} key={id}>
                {name}: {number}
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
