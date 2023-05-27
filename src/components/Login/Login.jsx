import css from './Login.module.css';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import { logInOperation } from 'redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

const schema = yup.object().shape({
  email: yup.string().email().required('Please provide a valid email'),
  password: yup.string().min(8).required('Please provide a valid password'),
});

export const Login = () => {
  const dispatch = useDispatch();

  const [initialValues] = useState({
    email: '',
    password: '',
  });
  const handlerSubmit = (values, { resetForm }) => {
    dispatch(logInOperation({ ...values }));
    resetForm();
  };

  return (
    <div className={css.contactform}>
      <h2 className={css.title}>Log in</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handlerSubmit}
        validationSchema={schema}
      >
        <Form className={css.form}>
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
            placeholder="Enter your password..."
          />
          <ErrorMessage name="password" component="div" />

          <button type="submit" className={css.button}>
            Log in
          </button>
        </Form>
      </Formik>
      <Link className={css.post} to="/register">
        Don't have account? Tap here!
      </Link>
    </div>
  );
};
