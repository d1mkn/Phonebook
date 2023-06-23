import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilter,
  selectIsLoading,
} from 'redux/selectors';
import { Loader } from 'components/Loader/Loader';
import { ListItem } from 'components/ListItem/ListItem';
import css from './Contacts.module.css';

export const Contacts = ({ children, title }) => {
  const items = useSelector(selectContacts);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const filter = useSelector(selectFilter);

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
            return <ListItem key={id} id={id} name={name} phone={phone} />;
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
