import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
// import { useId } from "react";

const App = () => {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "John Travolta", number: "459-12-56" },
    { id: "id-2", name: "Nicolas Cage", number: "443-89-12" },
    { id: "id-3", name: "Charlize Theron", number: "645-17-79" },
    { id: "id-4", name: "Christian Bale", number: "227-91-26" },
    { id: "id-5", name: "Микола Біла Церква", number: "097-181-65-03" },
    { id: "id-6", name: "Mike Tyson", number: "144-02-85" },
  ]);

  const [filter, setFilter] = useState("");
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = (idToDelete) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== idToDelete));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={filter} onChange={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={handleDelete} />
    </div>
  );
};

export default App;
