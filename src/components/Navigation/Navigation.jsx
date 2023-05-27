import { Link, NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.nav}>
      {isLoggedIn && (
        <Link className={css.logo} to="/contacts">
          PhoneBook
        </Link>
      )}
      {!isLoggedIn && (
        <Link className={css.logo} to="/login">
          PhoneBook
        </Link>
      )}
      {!isLoggedIn && (
        <div>
          <NavLink className={css.list} to="/register">
            Register
          </NavLink>
          <NavLink className={css.list} to="/login">
            Login
          </NavLink>
        </div>
      )}
      {isLoggedIn && (
        <div className={css.navlinks}>
          <NavLink className={css.home} to="/form">
            <p className={css.plus}>+</p>
          </NavLink>
          <NavLink className={css.list} to="/contacts">
            Contacts
          </NavLink>
        </div>
      )}
    </nav>
  );
};
