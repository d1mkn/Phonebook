import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { Contacts } from 'components/Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount = () => {
    if (localStorage.getItem('contacts') !== null) {
      this.setState({
        contacts: JSON.parse(localStorage.getItem('contacts')),
      });
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    prevState.contacts.length !== this.state.contacts.length &&
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  };

  addContact = values => {
    const id = nanoid();
    const { name, number } = values;
    const contact = {
      id,
      name,
      number,
    };

    this.state.contacts.find(person => person.name === contact.name)
      ? alert(`${contact.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [contact, ...prevState.contacts],
        }));
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  };

  changeFilter = value => {
    this.setState({
      filter: value,
    });
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    return (
      <Section title="Phonebook">
        <ContactForm onSubmit={this.addContact} />
        <Contacts
          title="Contacts"
          contacts={this.filteredContacts()}
          onDeleteContact={this.deleteContact}
          children={<Filter onChange={this.changeFilter} value={filter} />}
        />
      </Section>
    );
  }
}
