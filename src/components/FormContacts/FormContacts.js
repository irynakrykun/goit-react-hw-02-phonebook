// import PropTypes from 'prop-types';
import { Formik, Form, Field,ErrorMessage } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().required(),
})

const initialValues = {
  name: '',
  number: ''
};

const FormContacts = () => {
  const handleSubmit = (values, {resetForm}) => {
    console.log(values);
      resetForm();
    
  }
  return (
    <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
    <Form autoComplete='off'>
      <label htmlFor="name">
        Name
          <Field type="text" name="name" />
            <ErrorMessage name="name" />
          </label>
           <label htmlFor="number">
        Number
          <Field type="tel" name="number" />
            <ErrorMessage name="number" />
          </label>
          <button type="submit">Add contact</button>
    </Form>
    </Formik>
  );
};

export default FormContacts;
