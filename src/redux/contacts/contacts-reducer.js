import { combineReducers } from 'redux';
import actionTypes from './contacts-types';
// import { filter } from './contacts-actions';

const itemsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_CONTACT:
      return [...state, payload];

    case actionTypes.DELETE_CONTACT:
      return state.filter(item => item.id !== payload);

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_FILTER:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
