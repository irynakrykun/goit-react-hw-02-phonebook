import React, { Component } from 'react';
import FormContacts from '../FormContacts/FormContacts';
import { Contain, PhoneBook, PhoneContacts } from './App.styled';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import initialContacts from '../contacts.json';

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };
  addContact = values => {
    const { contacts } = this.state;
    if (contacts.find(contact => contact.name === values.name)) {
      return alert(`${values.name} is already in contact`);
    }
    
    this.setState(prevState => ({
      contacts: [...prevState.contacts, values],
    }));
  };
  deleteContact = contactId => {
    console.log(contactId);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
    console.log(e.currentTarget.value);
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
console.log(this.state.contacts);
    const visibleContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
console.log(visibleContacts);
    return (
      <Contain>
        <PhoneBook>Phonebook</PhoneBook>
        <FormContacts onSubmit={this.addContact} />

        <PhoneContacts>Contacts</PhoneContacts>

        <Filter onChange={this.handleFilterChange} value={this.state.filter} />
        <ContactList items={visibleContacts} onDelete={this.deleteContact} />
      </Contain>
    );
  }
}

export default App;
