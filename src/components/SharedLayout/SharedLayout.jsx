import { Link, NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { Logout } from 'components/Logout/Logout';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.all}>
      <header className={css.header}>
        <nav className={css.nav}>
          <Link className={css.logo} to="/">
            PhoneBook
          </Link>
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
            <div>
              <NavLink className={css.home} to="/form">
                <p className={css.plus}>+</p>
              </NavLink>
              <NavLink className={css.list} to="/contacts">
                Contacts
              </NavLink>
              <Logout />
            </div>
          )}
        </nav>
      </header>
      <main className={css.main}>
        <Outlet />
      </main>
      <footer className={css.footer}></footer>
    </div>
  );
};
