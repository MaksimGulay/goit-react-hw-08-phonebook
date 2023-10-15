// ContactForm.jsx
import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/contacts/selector';

import {
  FormikForm,
  FormContainer,
  Label,
  Input,
  SubmitButton,
  ErrorText,
  StyledErrorMessage,
} from './contactForm-style';

// const schema = Yup.object().shape({
//   name: Yup.string()
//     .min(2, 'Too Short!')
//     .max(50, 'Too Long!')
//     .required('Required'),
//   number: Yup.string()
//     .matches(/^\d{3}-\d{2}-\d{2}$/, 'Invalid phone number format')
//     .required('Required'),
// });
const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(/^(?:\+380|0)\d{9}$/, 'Invalid phone number format')
    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilteredContacts);

  const handleSubmit = (values, actions) => {
    const { name} = values;

    const existingContact = filteredContacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert(`${name} is already in contacts.`);
      return;
    }


    const newContact = { ...values, id: nanoid() };
    dispatch(addContact(newContact));
    actions.resetForm();
    actions.setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {() => (
        <FormContainer>
          <FormikForm>
            <Label>Name</Label>
            <Input id="name" type="text" name="name" placeholder="Martin Foks" />
            <ErrorText>
              <StyledErrorMessage name="name" />
            </ErrorText>
            <Label>Number</Label>
            <Input
              id="number"
              type="text"
              name="number"
              placeholder="+380 000 000 000"
            />
            <ErrorText>
              <StyledErrorMessage name="number" />
            </ErrorText>
            <SubmitButton type="submit">Add contact</SubmitButton>
          </FormikForm>
        </FormContainer>
      )}
    </Formik>
  );
};
