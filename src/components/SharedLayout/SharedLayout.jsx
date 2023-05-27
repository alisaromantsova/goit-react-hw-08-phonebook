import { Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';
import { Logout } from 'components/Logout/Logout';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import { Navigation } from 'components/Navigation/Navigation';

export const SharedLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.all}>
      <header className={css.header}>
        {isLoggedIn && <Logout />}
        <Navigation />
      </header>
      <main className={css.main}>
        <Outlet />
      </main>
      <footer className={css.footer}></footer>
    </div>
  );
};
