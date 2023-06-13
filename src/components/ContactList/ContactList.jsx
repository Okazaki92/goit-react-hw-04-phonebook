import propTypes from "prop-types";
import styles from "./ConstactList.module.css";

export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={styles.list_item} key={id}>
          <p className="list_text">{name}</p>
          <p className="list_text">{number}</p>
          <button
            className={styles.list_button}
            type="submit"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};
ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  onDeleteContact: propTypes.func.isRequired,
};
