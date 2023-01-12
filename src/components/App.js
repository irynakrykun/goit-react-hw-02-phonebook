import React, { Component } from 'react';
import FormContacts from './FormContacts/FormContacts';
import { Contain } from './App.styled';

class App extends Component {

  state = {
  contacts: [],
  filter: ''
}
  render() {
    return (
      
      <Contain>
//   <h1>Phonebook</h1>
  <FormContacts/>

//   <h2>Contacts</h2>
{/* //   // <Filter ... />
//   // <ContactList ... /> */}
</Contain>

    );

};
};
export default App;