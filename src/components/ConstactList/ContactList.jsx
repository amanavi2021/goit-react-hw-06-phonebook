import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filterSlice';
import { getContacts } from 'redux/contactsSlice';

export const ContactList = () => {
  const filter = useSelector(getFilter);
  const  contacts = useSelector(getContacts);

  const getFilteredContacts =() => {
    const normalizedFilter = filter.toLowerCase();
   
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };
  
   const filtredContacts = getFilteredContacts();

   return (
  <ul className='ContactList'>
    {filtredContacts.map(({ id, name, number })=> 
    <ContactListItem
    key={id}
    name={name}
    number={number}
    />
    )}
  </ul>
  )
};

