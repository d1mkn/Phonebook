import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validationSchema } from 'validationSchema/validationSchema';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const checkContact = values => {
    const { name, phone } = values;
    const contact = {
      name,
      phone,
    };

    contacts.items.find(person => person.name === contact.name)
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
