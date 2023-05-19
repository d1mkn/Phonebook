import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { Contacts } from 'components/Contacts/Contacts';

export const App = () => {
  const [contacts, setContact] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = values => {
    const id = nanoid();
    const { name, number } = values;
    const contact = {
      id,
      name,
      number,
    };

    contacts.find(person => person.name === contact.name)
      ? alert(`${contact.name} is already in contacts`)
      : setContact([contact, ...contacts]);
  };

  const changeFilter = value => {
    setFilter(value);
  };

  const filteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = contactId => {
    setContact(contacts.filter(contact => contact.id !== contactId));
  };

  return (
    <Section title="Phonebook">
      <ContactForm onSubmit={addContact} />
      <Contacts
        title="Contacts"
        contacts={filteredContacts()}
        onDeleteContact={deleteContact}
        children={<Filter onChange={changeFilter} value={filter} />}
      />
    </Section>
  );
};
