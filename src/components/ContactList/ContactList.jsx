import Contact from "../Contact/Contact";
import "./ContactList.module.css";

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
