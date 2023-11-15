import React, { Component } from 'react';
import ContactList from './ContactList/ContactList.jsx';
import ContactForm from './ContactForm/ContactForm.jsx';
// import data from './listContacts.json';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter.jsx';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
  };

  addContact = newContact => {
    const objectContact = {
      ...newContact,
      id: nanoid(),
    };
    this.setState(prev => ({ contacts: [...prev.contacts, objectContact] }));
  };

  deleteContact = id => {
    this.setState(prev => ({
      contacts: prev.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const lowerCase = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(lowerCase)
    );
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} changeFilter={this.changeFilter} />
        <ContactList
          contacts={visibleContacts}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
