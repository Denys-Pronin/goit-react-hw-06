import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const ContactForm = ({ func }) => {
  const initialValues = {
    name: "",
    number: "",
  };
  const handleSubmit = (data, actions) => {
    func(data);
    actions.resetForm();
  };

  const userSchema = Yup.object({
    name: Yup.string("This is required field")
      .required()
      .min(3, "Write minimum 3 symbols")
      .max(50, "Write maximum 50 symbols"),
    number: Yup.string("This is required field")
      .required()
      .min(3, "Write minimum 3 symbols")
      .max(50, "Write maximum 50 symbols"),
  });
  return (
    <div>
      <Formik
        validationSchema={userSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            <span>Name</span>
            <Field name="name" />
            <ErrorMessage name="name" component="span" />
          </label>
          <label>
            <span>Number</span>
            <Field name="number" />
            <ErrorMessage name="number" component="span" />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
