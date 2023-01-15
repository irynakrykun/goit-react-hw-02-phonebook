import React, { Component } from 'react';
import FormContacts from '../FormContacts/FormContacts';
import { Contain,PhoneBook,PhoneContacts } from './App.styled';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import initialContacts from '../contacts.json';



class App extends Component {
  state = {
    contacts: initialContacts,
    filter: " ",
  };
  addContact = values => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts,   values  ],
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
    // const normalizedFilter = this.state.filter.toLowerCase();
    
    // const visibleContacts = this.state.contacts.filter(contact =>
    //   contact.text.toLowerCase().includes(normalizedFilter));
   
    return (
      <Contain>
        <PhoneBook>Phonebook</PhoneBook>
        <FormContacts onSubmit={this.addContact} />

        <PhoneContacts>Contacts</PhoneContacts>
        
        <Filter onChange={this.handleFilterChange} value={this.state.filter} />
        <ContactList items={this.state.contacts} onDelete={this.deleteContact} />
      </Contain>
    );
  }
}
export default App;