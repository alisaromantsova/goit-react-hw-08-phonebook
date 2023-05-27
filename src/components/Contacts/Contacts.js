import css from './Contacts.module.css';
import { ContactItem } from '../ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
//

import {
  selectStatusFilter,
  selectIsLoading,
  selectError,
  selectContacts,
} from 'redux/selectors';
import { Filter } from 'components/Filter/Filter';
export const Contacts = () => {
  const [isOpen, setOpen] = useState(false);

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectStatusFilter);

  const linkToggle = () => {
    if (!isOpen) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };

  return (
    <div className={css.container}>
      <button className={css.filter} onClick={linkToggle}>
        <svg
          className={css.svg}
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
        >
          <title>filter</title>
          <path d="M12 12l8-8v-4h-20v4l8 8v8l4-4v-4z"></path>
        </svg>
      </button>
      {isOpen && <Filter />}

      <h2 className={css.title}>Contacts</h2>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {contacts && contacts.length > 0 && (
        <ul className={css.list}>
          <li className={css.header}>
            <p className={css.point}>Name</p>
            <p className={css.point}>Number</p>
          </li>
          {contacts
            .filter(item =>
              item.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map(item => {
              return (
                <ContactItem
                  key={item.id}
                  name={item.name}
                  number={item.number}
                  id={item.id}
                />
              );
            })}
        </ul>
      )}
      {contacts && contacts.length === 0 && (
        <Link className={css.notfound} to="/form">
          Add your first contact
        </Link>
      )}
    </div>
  );
};
