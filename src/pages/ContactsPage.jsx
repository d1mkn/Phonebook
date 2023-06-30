import React from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';

export default function ContactsPage() {
  return (
    <div className="contacts-content">
      <div className="contacts-form">
        <h2 className="contacts-title">Contacts</h2>
        <ContactForm />
      </div>
      <div className="contacts-list">
        <Contacts children={<Filter />} />
      </div>
    </div>
  );
}
