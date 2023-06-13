import React, { useState } from "react";
import Notiflix from "notiflix";
import { nanoid } from "nanoid";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import "./App.css";

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  const addContact = ({ name, number }) => {
    const isContactExist = contacts.find(
      (contact) => contact.name.toLocaleLowerCase() === name.toLowerCase()
    );
    if (isContactExist) {
      return Notiflix.Notify.failure("The number is already in the phonebook");
    }
    const id = nanoid();
    const newContacts = [...contacts, { id, name, number }];
    setContacts(newContacts);
  };

  const deleteContact = (id) => {
    const newContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(newContacts);
  };

  const filterContacts = (e) => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    if (!filter) {
      return contacts;
    }

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    );
  };
  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      {!contacts.length ? (
        <div className="noContacts">NO CONTACTS IN BOOK</div>
      ) : (
        <Filter value={filter} onChangeFilter={filterContacts} />
      )}
      <h2>Contacts</h2>
      <ContactList
        contacts={getFilteredContacts()}
        onDeleteContact={deleteContact}
      />
    </div>
  );
};

// export class App extends Component {
//   state = {
//     contacts: [
//       // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//       // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//       // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//       // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//     ],
//     filter: "",
//     name: "",
//     number: "",
//   };

//   addContact = ({ name, number }) => {
//     const isContactExist = this.state.contacts.find(
//       (contact) => contact.name.toLocaleLowerCase() === name.toLowerCase()
//     );
//     if (isContactExist) {
//       return Notiflix.Notify.failure("The number is already in the phonebook");
//     }
//     const id = nanoid();
//     const newContacts = [...this.state.contacts, { id, name, number }];
//     this.setState({ contacts: newContacts });
//   };

//   deleteContact = (id) => {
//     const newContacts = this.state.contacts.filter(
//       (contact) => contact.id !== id
//     );
//     this.setState({ contacts: newContacts });
//   };

//   filterContacts = (e) => {
//     this.setState({ filter: e.currentTarget.value });
//   };

//   getFilteredContacts = () => {
//     const { contacts, filter } = this.state;
//     if (!filter) {
//       return contacts;
//     }
//     return contacts.filter((contact) =>
//       contact.name.toLowerCase().includes(filter)
//     );
//   };
//   componentDidUpdate(prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
//       console.log(this.state.contacts);
//     }
//   }
//   componentDidMount() {
//     const contacts = JSON.parse(localStorage.getItem("contacts"));
//     if (contacts) {
//       this.setState({ contacts });
//     }
//   }

//   render() {
//     const { filter, contacts } = this.state;
//     return (
//       <div className="container">
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={this.addContact} />
//         {!contacts.length ? (
//           <div className="noContacts">NO CONTACTS IN BOOK</div>
//         ) : (
//           <Filter value={filter} onChangeFilter={this.filterContacts} />
//         )}
//         <h2>Contacts</h2>
//         <ContactList
//           contacts={this.getFilteredContacts()}
//           onDeleteContact={this.deleteContact}
//         />
//       </div>
//     );
//   }
// }
