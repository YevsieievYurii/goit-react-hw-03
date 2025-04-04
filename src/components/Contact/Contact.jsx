import "./Contact.module.css";

const Contact = ({ name, number }) => {
  return (
    <li>
      {name} : {number}
      <button type="button">Delete</button>
    </li>
  );
};

export default Contact;
