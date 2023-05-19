import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validationSchema } from 'validationSchema/validationSchema';
import css from './ContactForm.module.css';

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
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

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
