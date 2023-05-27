import { selectUser } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logOutOperation } from 'redux/auth/auth-operations';

export const Logout = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  console.log(user);
  return (
    <div>
      <p>Hello, {user.name}!</p>
      <button type="button" onClick={() => dispatch(logOutOperation())}>
        Log Out
      </button>
    </div>
  );
};
