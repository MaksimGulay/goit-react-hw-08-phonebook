// Contacts.js
import { Heading1, Heading2 } from 'components/app-style';
import { ContactForm } from 'components/contact_form/ContactForm';
import { ContactList } from 'components/contact_list/ContactList';
import { Filter } from 'components/filter/Filter';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getIsLoading } from 'redux/contacts/contactsSlice';
import { fetchContacts } from 'redux/contacts/operations';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <Heading1>Phonebook</Heading1>
      <ContactForm />
      <Heading2>Contacts</Heading2>
      {isLoading ? <b>Request in progress...</b> : null}
      <Filter />
      <ContactList />
    </div>
  );
}
