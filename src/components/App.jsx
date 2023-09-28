import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { Layout } from './Layout';

export const App = () => {
  return (
    <Layout>
      <h1> Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </Layout>
  );
};
