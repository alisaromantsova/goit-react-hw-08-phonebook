import css from './Register.module.css';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import { registerOperation } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

const schema = yup.object().shape({
  name: yup.string().required('Add your name'),
  email: yup.string().email().required('Please provide a valid email'),
  password: yup.string().min(8).required('Please provide a valid password'),
});

export const Register = () => {
  const dispatch = useDispatch();
  const [initialValues] = useState({
    name: '',
    email: '',
    password: '',
  });
  const handlerSubmit = (values, { resetForm }) => {
    dispatch(registerOperation({ ...values }));

    resetForm();
  };

  return (
    <div className={css.contactform}>
      <h2 className={css.title}>Register form</h2>
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
            className={css.input}
            type="text"
            name="name"
            placeholder="Enter your name..."
          />
          <ErrorMessage name="name" component="div" />
          <label className={css.label} htmlFor="email">
            Email
          </label>
          <Field
            id="email"
            className={css.input}
            type="email"
            name="email"
            placeholder="Enter your email..."
          />

          <ErrorMessage name="email" component="div" />
          <label className={css.label} htmlFor="password">
            Password
          </label>
          <Field
            id="password"
            className={css.input}
            type="password"
            name="password"
            placeholder="Enter password..."
          />
          <ErrorMessage name="password" component="div" />
          <button type="submit" className={css.button}>
            Sign up
          </button>
        </Form>
      </Formik>
      <Link className={css.post} to="/login">
        If you already have account, tap here!
      </Link>
    </div>
  );
};
