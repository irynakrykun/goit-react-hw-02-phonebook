import React, { Component } from 'react';
import FormContacts from './FormContacts/FormContacts';
import { Contain } from './App.styled';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import initialContacts from '../components/contacts.json';
import { nanoid } from 'nanoid';


class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };
  addContact = values => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, {  values ,  id: nanoid() } ],
    }));
  };
  deleteContact = (contactId) => {
    console.log(contactId);
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  };

  handleFilterChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  render() {
    return (
      <Contain>
        <h1>Phonebook</h1>
        <FormContacts onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter onChange={this.handleFilterChange} value={this.state.filter} />
        <ContactList items={this.state.contacts} onDelete={this.deleteContact} />
      </Contain>
    );
  }
}
export default App;
