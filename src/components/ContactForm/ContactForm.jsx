import { Formik, Form, Field, ErrorMessage } from "formik";
import "./ContactForm.module.css";

const initialValues = {
  username: "",
  usernumber: "",
};

const ContactForm = () => {
  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      <Form className="s.form">
        <Field className="s.field" type="text" name="username" />
        <Field className="s.field" type="text" name="usernumber" />
        <button className="s.btn" type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
