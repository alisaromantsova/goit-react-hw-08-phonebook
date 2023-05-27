import * as yup from 'yup';

import css from './ContactForm.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Notiflix from 'notiflix';

import { useState } from 'react';

import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux';
import { addContacts } from 'redux/operation';

import { selectContacts } from 'redux/selectors';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().min(9).required(),
});
export const ContactForm = () => {
  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();
  const [initialValues] = useState({
    name: '',
    number: '',
  });
  const handlerSubmit = (values, { resetForm }) => {
    const result = contacts.find(item => item.name === values.name);
    if (result) {
      Notiflix.Notify.failure(`${values.name} is already in contacts.`);
      return;
    } else {
      dispatch(addContacts({ ...values }));
      Notiflix.Notify.success(`${values.name} was added!`);
      resetForm();
    }
  };

  return (
    <div className={css.contactform}>
      <h2 className={css.title}>Add New Contact</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handlerSubmit}
        validationSchema={schema}
      >
        <Form className={css.form}>
          <label className={css.label} htmlFor="name">
            Name
          </label>
          <Field
            id="name"
            type="text"
            name="name"
            className={css.input}
            placeholder="Add name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" component="div" />
          <label className={css.labelPhone} htmlFor="tel">
            Number
          </label>
          <Field
            className={css.input}
            id="tel"
            type="number"
            name="number"
            placeholder="Add phone number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" component="div" />
          <button className={css.button} type="submit">
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};
