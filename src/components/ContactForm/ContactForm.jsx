import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  handleSubmit = (values, { resetForm }) => {
    this.props.onSubmit(values);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={yup.object().shape({
          name: yup
            .string()
            .matches(
              /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
              {
                message:
                  "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",
              }
            )
            .required('Name is required'),
          number: yup
            .string()
            .matches(
              /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
              'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
            )
            .required('Phone number is required'),
        })}
        onSubmit={this.handleSubmit}
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
              <Field
                type="tel"
                name="number"
                as="input"
                value={values.number}
              />
              <ErrorMessage name="number" />
            </label>

            <button type="submit">Add contact</button>
          </Form>
        )}
      </Formik>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
