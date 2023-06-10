import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ConstactList/ContactList';
import { Filter } from './Filter/Filter';
import { Container, PhonebookTitle, ContactsTitle } from './App.styled';

export const App = () => {
  return (
    <Container> 
      <PhonebookTitle>Phonebook</PhonebookTitle>
      <ContactForm />
      <ContactsTitle>Contacts</ContactsTitle>
      <Filter />
      <ContactList />
    </Container>
  );
}




