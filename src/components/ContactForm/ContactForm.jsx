import propTypes from "prop-types";
import React, { useState } from "react";
import styles from "./ContactForm.module.css";

export const ContactForm = (props) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({ name, number });
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <div className="input_name">
        <p>Name</p>
        <input
          className={styles.form__input}
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div className="input_number">
        <p>Number</p>
        <input
          className={styles.form__input}
          value={number}
          onChange={handleNumberChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be at least 5 digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <button type="submit" className={styles.form__button}>
        Add Contact
      </button>
    </form>
  );
};

// export class ContactForm extends Component {
//   state = {
//     name: "",
//     number: "",
//   };
//   handleNameChange = (e) => {
//     this.setState({
//       name: e.target.value,
//     });
//   };
//   handleNumberChange = (e) => {
//     this.setState({
//       number: e.target.value,
//     });
//   };
// handleFormSubmit = (e) => {
//   e.preventDefault();
//   this.props.onSubmit({ ...this.state });
//   this.resetForm();
// };

//   resetForm = () => {
//     this.setState(() => ({ name: "", number: "" }));
//   };

//   render() {
//     const { name, number } = this.state;
//     return (
//       <form className={styles.form} onSubmit={this.handleFormSubmit}>
//         <div className="input_name">
//           <p>Name</p>
//           <input
//             className={styles.form__input}
//             type="text"
//             name="name"
//             value={name}
//             onChange={this.handleNameChange}
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//           />
//         </div>
//         <div className="input_number">
//           <p>Number</p>
//           <input
//             className={styles.form__input}
//             value={number}
//             onChange={this.handleNumberChange}
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be at least 5 digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </div>
//         <button type="submit" className={styles.form__button}>
//           Add Contact
//         </button>
//       </form>
//     );
//   }
// }

ContactForm.propTypes = {
  name: propTypes.string,
  number: propTypes.string,
};
