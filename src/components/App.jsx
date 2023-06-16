import React, { useEffect, useState } from "react";
import Notiflix from "notiflix";
import { nanoid } from "nanoid";
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";
import "./App.css";

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (storedContacts) {
      setContacts(storedContacts);
    }
  }, []);

  useEffect(() => {
    if ((prev) => prev !== contacts) {
      console.log(contacts);
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }, [contacts]);

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
