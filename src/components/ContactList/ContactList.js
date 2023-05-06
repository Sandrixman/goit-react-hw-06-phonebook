import { useSelector, useDispatch } from 'react-redux';
import { delContact } from 'redux/phonebookSlice/slice';
import {
  ContactsList,
  Contact,
  ContactInfo,
  Button,
} from './ContactList.styled';

const ContactList = () => {
  const contactsList = useSelector(state => state.phonebook);
  const dispatch = useDispatch();

  return (
    <>
      <ContactsList>
        {contactsList.map(({ id, name, number }, index) => (
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
