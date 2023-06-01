import css from './Contacts.module.css';

const ContactItem = ({ deleteContact, id, number, name }) => {
  return (
    <li key={id} className={css.contactItem}>
      {name}: {number}
      <button onClick={() => deleteContact(id)} className={css.btnDelete}>
        delete
      </button>
    </li>
  );
};

export default ContactItem;
