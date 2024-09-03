import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useState, useEffect } from "react";

export default function App() {
  const contactListItem = [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ];

  const [contactList, setcontactList] = useState(() => {
    const savedContact = localStorage.getItem("saved-feedback");
    return savedContact ? JSON.parse(savedContact) : contactListItem;
  });
  const [nameFilter, setNameFilter] = useState("");
  const contactListFilter = contactList.filter((contact) =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem("saved-feedback", JSON.stringify(contactList));
  }, [contactList]);
  console.log(contactList);

  const contactDelete = (userId) => {
    setcontactList((prevContacts) => {
      return prevContacts.filter((prevContacts) => prevContacts.id !== userId);
    });
  };
  const addContact = (newContact) => {
    setcontactList((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox value={nameFilter} onChange={setNameFilter} />
      <ContactList contacts={contactListFilter} onDelete={contactDelete} />
    </div>
  );
}
