import { selectUser } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logOutOperation } from 'redux/auth/auth-operations';
import css from './Logout.module.css';

export const Logout = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={css.div}>
      <p className={css.parag}>Hello, {user.name}!</p>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(logOutOperation())}
      >
        Log Out
      </button>
    </div>
  );
};
