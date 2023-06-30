import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, ErrorMessage } from 'formik';
import { validationSchema } from 'validationSchema/validationSchema';
import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const checkContact = values => {
    const { name, number } = values;
    const contact = {
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
      {({ values, handleSubmit }) => (
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="name">Name</Form.Label>
            <Field
              as={Form.Control}
              type="text"
              name="name"
              value={values.name}
            />
            <ErrorMessage name="name" component={Form.Text} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label htmlFor="number">Number</Form.Label>
            <Field
              as={Form.Control}
              type="tel"
              name="number"
              value={values.number}
            />
            <ErrorMessage name="number" component={Form.Text} />
          </Form.Group>

          <Button type="submit">Add contact</Button>
        </Form>
      )}
    </Formik>
  );
};
