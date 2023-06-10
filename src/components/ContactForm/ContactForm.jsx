import { useSelector, useDispatch } from 'react-redux';
import { addContact, getContacts } from 'redux/contactsSlice';
import {
  ContactsForm,
  AddBtn,
  InputInfo,
  LabelNumber,
} from './ContactForm.styled';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const contactNames = contacts.map(contact => contact.name);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const isExist = contactNames.includes(name);
    if (isExist) {
      return alert(`${name} is already in contacts.`);
    } else {
      dispatch(addContact(name, number));
    }
    form.reset();
  };

  return (
    <ContactsForm onSubmit={handleSubmit}>
      <label>
        Name
        <InputInfo
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <LabelNumber>
        Number
        <InputInfo
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </LabelNumber>
      <AddBtn type="submit">Add contact</AddBtn>
    </ContactsForm>
  );
};
