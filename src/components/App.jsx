import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContactFormData = data => {
    // console.log(this.state.contacts)
    const newContact = data;
    console.log(newContact);

    const contacts = this.state.contacts;
    const findDouble = contacts.find(({ name }) => {
      return name === data.name;
    });

    if (findDouble) {
      return alert(`${findDouble.name} is already in contact`);
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));
  };

  deleteContactFormData = dataId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== dataId),
    }));
  };

  filterContactData = e => {
    console.log(e);
    this.setState({ filter: e.target.value });
  };

  getvisibleContacts = ()=>{
    const {contacts, filter} = this.state

    const toLowerCaseName = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(toLowerCaseName))

  }
  render() {
    const { filter } = this.state;

    const visibleContacts = this.getvisibleContacts()

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContactFormData} />

        <h2>Contacts</h2>
        <Filter onChange={this.filterContactData} value={filter} />

        <ContactList
          data={visibleContacts}
          onDelete={this.deleteContactFormData}
        />
      </div>
    );
  }
}
