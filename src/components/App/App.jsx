import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { Contacts } from 'components/Contacts/Contacts';

export const App = () => {
  return (
    <Section title="Phonebook">
      <ContactForm/>
      <Contacts title="Contacts" children={<Filter />} />
    </Section>
  );
};
