import { useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { useDispatch } from 'react-redux';
import css from './Filter.module.css';

export const Filter = () => {
  const value = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const onInputChange = e => {
    const inputValue = e.target.value;
    dispatch(setFilter(inputValue));
  };
  return (
    <div className={css.div}>
      <h2 className={css.title}>Filter</h2>
      <input
        className={css.input}
        type="text"
        placeholder="Name..."
        onChange={e => onInputChange(e)}
        value={value.filter}
      />
    </div>
  );
};
