import React from 'react';

import  InputForm  from "components/Form/InputFotm"
import { ContactList } from 'components/ContactList/ConactList';
import {Filter} from 'components/Filter/Filter';

class App extends React.Component {

state= {
  contacts: [ 
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: ' ',
}  
formSubmit = ({name, number, id})=>{
console.log({name, number, id})
const contact = {
  id,
  name,
  number
}
this.setState(({ contacts }) => {
  if (
    contacts.some(
      contact =>
        contact.name.trim().toUpperCase() === name.trim().toUpperCase(),
    )
  ) {
    return alert(`${name} is already in contacts!`);
  }
  return {
    contacts: [contact, ...contacts],
  };
});
}

getContact = () => {
  const { contacts, filter } = this.state;
  const normalizedFilter = filter.trim().toLowerCase();
  return  contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );
};
changeFilter= e=>{
  this.setState({filter: e.currentTarget.value })
}
deleteContact= (contaktId)=>{
  this.setState(prevState=> ({
    contacts: prevState.contacts.filter(contact=>contact.id !==contaktId),
  }) )
}
  
  render(){
  
    // console.log(this.state.contacts)
  return (
    <div>
      <InputForm onSubmit={this.formSubmit} />
      <Filter value={this.state.filter} onChange={this.changeFilter} />
      {/* <Filter onFilterSubmit={this.filter} /> */}
      <ContactList contacts={this.getContact()} onDeleteContact={this.deleteContact} />
    </div>
  );
};
 }
 export default App