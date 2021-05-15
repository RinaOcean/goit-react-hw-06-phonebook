import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { filter } from './actions';
// const initialState = {
//   contacts: {
//     items: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   },
// };

// const reducer = (state = initialState, { type, payload }) => {
//   console.log(state.contacts.items);

//   switch (type) {
//     case 'contacts/addContact':
//       return {
//         ...state,
//         contacts: {
//           ...state.contacts,
//           items: [...state.contacts.items, payload],
//         },
//       };

//     case 'contacts/deleteContact':
//       return {
//         ...state,
//         contacts: {
//           ...state.contacts,
//           items: state.contacts.filter(contact => contact.id !== payload),
//         },
//       };

//     case 'contacts/addFilter':
//       return {
//         ...state,
//         contacts: {
//           ...state.contacts,
//           filter: payload,
//         },
//       };

//     default:
//       return state;
//   }
// };

// const contactsInitialState = {
//   items: [
//     { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//     { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//     { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//     { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//   ],
//   filter: '',
// };

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case 'contacts/addContact':
      return payload;

    case 'contacts/deleteContact':
      return state.filter(item => item.id !== payload);

    default:
      return state;
  }
};

const filterReducer = (state = '', { payload }) => state;

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
