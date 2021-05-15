import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import * as actions from '../src/redux/actions';

import ContactsList from './components/ContactsList';
import ContactsListItem from './components/ContactListItem';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';

import './App.scss';

function App({ items, filter, onSubmit, onChange, onDelete }) {
  const normalizedFilter = filter.toLocaleLowerCase();

  const filteredContactList = items.filter(item =>
    item.name.toLocaleLowerCase().includes(normalizedFilter),
  );

  return (
    <div className="phonebook">
      <h1>Phonebook</h1>
      <ContactForm onSubmit={() => onSubmit} />
      <h2>Contacts</h2>

      {items.length > 0 ? (
        <>
          <Filter onChange={() => onChange} value={filter} />

          <ContactsList>
            <ContactsListItem
              contacts={filteredContactList}
              onDelete={() => onDelete}
            />
          </ContactsList>
        </>
      ) : (
        <span>You have no contacts yet </span>
      )}
    </div>
  );
}
const mapStateToProps = state => ({
  items: state.contacts.items,
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onSubmit: value => dispatch(actions.submit(value)),
  onChange: value => dispatch(actions.remove(value)),
  onDelete: value => dispatch(actions.filter(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

// class App extends Component {
//   static propTypes = {
//     contacts: PropTypes.array,
//     filter: PropTypes.number,
//   };

//   state = {
//     contacts: [],
//     // contacts: [
//     //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     // ],
//     filter: '',
//   };

//   formSubmitHandler = data => {
//     const isInContacts = contact => {
//       return contact.name === data.name;
//     };

//     if (this.state.contacts.some(isInContacts)) {
//       alert(`${data.name} is already in contacts`);
//       return;
//     } else
//       this.setState(prevState => ({
//         contacts: [...prevState.contacts, data],
//       }));
//   };

//   filterHandler = event => {
//     const { value } = event.currentTarget;
//     this.setState({ filter: value });
//   };

//   deleteHandler = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(contact => contact.id !== contactId),
//     }));
//   };

//   render() {
//     const { contacts, filter } = this.state;

//     const normalizedFilter = filter.toLocaleLowerCase();

//     const filteredContactList = contacts.filter(contact =>
//       contact.name.toLocaleLowerCase().includes(normalizedFilter),
//     );

//     return (
//       <div className="phonebook">
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={this.formSubmitHandler} />
//         <h2>Contacts</h2>

//         {contacts.length > 0 ? (
//           <>
//             <Filter onChange={this.filterHandler} value={filter} />

//             <ContactsList>
//               <ContactsListItem
//                 contacts={filteredContactList}
//                 onDelete={this.deleteHandler}
//               />
//             </ContactsList>
//           </>
//         ) : (
//           <span>You have no contacts yet </span>
//         )}
//       </div>
//     );
//   }
// }

// export default App;
