import { useSelector } from 'react-redux';
// import { Route, useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';

export const PublicRoute = ({ component: Component, children }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  // const { state } = useLocation();
  return !isLoggedIn ? children : <Navigate to={'/contacts'} />;
};
