import React from 'react';
import PropTypes from 'prop-types';
import css from './Contacts.module.css';

export const Contacts = ({ children, title, contacts, onDeleteContact }) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
      <div className={css.ListWrap}>
        <ul>
          {contacts.map(({ id, name, number }) => {
            return (
              <li id={id} key={id}>
                {name}: {number}
                <button onClick={() => onDeleteContact(id)}>Delete</button>
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
  contacts: PropTypes.array.isRequired,
  children: PropTypes.object.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
