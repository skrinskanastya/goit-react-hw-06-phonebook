import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContacts } from 'redux/contactsSlice';
import { StyledBtn } from './ContactForm.styled';

export const ContactForm = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const [contactName, setcontactName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = evt => {
    evt.preventDefault();

    if (contacts.some(({ name }) => name === contactName)) {
      window.alert(`${contactName} is already in your contacts`);
      return;
    }
    dispatch(
      addContact({
        id: nanoid(),
        name: contactName,
        number,
      })
    );

    setcontactName('');
    setNumber('');
  };

  const handleChange = evt => {
    const { value, name } = evt.target;

    switch (name) {
      case 'name':
        setcontactName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={contactName}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <StyledBtn type="submit">Add contact</StyledBtn>
    </form>
  );
};
