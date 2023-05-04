import { useSelector, useDispatch } from 'react-redux';
import { delContact } from '../../redux/store';

const ContactList = () => {
  const value = useSelector(state => state.myValue);
  const dispatch = useDispatch();

  return (
    <>
      {value.map(({ id, name, number }) => (
        <ul key={id}>
          <li>
            {name}: {number}
          </li>
          <button onClick={() => dispatch(delContact(id))}>Delete</button>
        </ul>
      ))}
    </>
  );
};

export default ContactList;
