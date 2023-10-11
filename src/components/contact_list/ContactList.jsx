// ContactList.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getFilteredContacts } from 'redux/selector';
import {
  ListContainer,
  StyledContactList,
  ListItem,
  ContactInfo,
  ContactName,
  DeleteButton,
} from './contactList-style';

export const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(getFilteredContacts);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };
  return (
    <ListContainer>
      <StyledContactList>
        {filteredContacts.map(contact => (
          <ListItem key={contact.id}>
            <ContactInfo>
              <ContactName>{contact.name}:</ContactName> {contact.number}
              <DeleteButton onClick={() => handleDelete(contact.id)}>
                Delete
              </DeleteButton>
            </ContactInfo>
          </ListItem>
        ))}
      </StyledContactList>
    </ListContainer>
  );
};
