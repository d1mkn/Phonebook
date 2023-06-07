import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { Contacts } from 'components/Contacts/Contacts';
import { addContact, deleteContact, getContacts } from 'redux/contactsSlice';
import { addFilter, getFilterValue } from 'redux/filterSlice';

export const App = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);
  const dispatch = useDispatch();

  const checkContact = values => {
    const id = nanoid();
    const { name, number } = values;
    const contact = {
      id,
      name,
      number,
    };

    contacts.find(person => person.name === contact.name)
      ? alert(`${contact.name} is already in contacts`)
      : dispatch(addContact(contact));
  };

  const changeFilter = value => {
    dispatch(addFilter(value));
  };

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <Section title="Phonebook">
      <ContactForm onSubmit={checkContact} />
      <Contacts
        title="Contacts"
        contacts={filteredContacts()}
        onDeleteContact={contactId => dispatch(deleteContact(contactId))}
        children={<Filter onChange={changeFilter} value={filter} />}
      />
    </Section>
  );
};
