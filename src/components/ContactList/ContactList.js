import { useSelector, useDispatch } from 'react-redux';
import { delContact } from 'redux/phonebookSlice/slice';
import { getFilteredOutContacts } from 'redux/selectors';

import {
  ContactsList,
  Contact,
  ContactInfo,
  Button,
} from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();

  const filteredOutContacts = useSelector(getFilteredOutContacts);

  return (
    <>
      <ContactsList>
        {Boolean(!filteredOutContacts.length) && (
          <Contact>No contacts found.</Contact>
        )}
        {filteredOutContacts.map(({ id, name, number }, index) => (
          <Contact key={id}>
            <ContactInfo>
              {index + 1}. {name}:
            </ContactInfo>
            <ContactInfo>{number}</ContactInfo>
            <Button onClick={() => dispatch(delContact(id))}>Delete</Button>
          </Contact>
        ))}
      </ContactsList>
    </>
  );
};

export default ContactList;
