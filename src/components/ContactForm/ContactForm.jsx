import React from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validationSchema } from 'validationSchema/validationSchema';
import { addContact, getContacts } from 'redux/contactsSlice';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
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

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        checkContact(values);
        resetForm();
      }}
    >
      {({ values }) => (
        <Form action="submit" className={css.contactForm} autoComplete="off">
          <label htmlFor="name">
            Name
            <Field type="text" name="name" as="input" value={values.name} />
            <ErrorMessage name="name" />
          </label>

          <label htmlFor="number">
            Number
            <Field type="tel" name="number" as="input" value={values.number} />
            <ErrorMessage name="number" />
          </label>

          <button type="submit">Add contact</button>
        </Form>
      )}
    </Formik>
  );
};
