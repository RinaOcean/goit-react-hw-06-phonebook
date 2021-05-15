import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import actionTypes from './contacts-types';

export const addContact = createAction(
  actionTypes.ADD_CONTACT,
  ({ name, number }) => ({
    payload: {
      id: nanoid(),
      name,
      number,
    },
  }),
);

export const removeContact = createAction(actionTypes.DELETE_CONTACT);

export const addFilter = createAction(actionTypes.ADD_FILTER);
