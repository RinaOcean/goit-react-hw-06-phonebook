import { nanoid } from 'nanoid';
import actionTypes from './contacts-types';

export const addContact = ({ name, number }) => ({
  type: actionTypes.ADD_CONTACT,
  payload: {
    id: nanoid(),
    name,
    number,
  },
});

export const removeContact = contactId => ({
  type: actionTypes.DELETE_CONTACT,
  payload: contactId,
});

export const addFilter = value => ({
  type: actionTypes.ADD_FILTER,
  payload: value,
});
