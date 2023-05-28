import React from 'react';
import { Contacts } from './Contacts/Contacts';
import { ContactForm } from './ContactForm/ContactForm';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/operation';
import { Login } from './Login/Login';
import { Register } from './Register/Register';
import { refreshUser } from 'redux/auth/auth-operations';
import { PrivateRoute } from './UserMenu/PrivateRoute';
import { PublicRoute } from './UserMenu/PublicRoute';
import { selectIsLoggedIn } from 'redux/selectors';

const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(refreshUser());
    }
    if (location.pathname === '/' && isLoggedIn) {
      navigate('/contacts', { replace: true });
    }
    if (location.pathname === '/' && !isLoggedIn) {
      navigate('/login', { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchContacts());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route
            path="/form"
            element={
              <PrivateRoute>
                <ContactForm />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
