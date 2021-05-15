// export const myActionCreator = value => ({ type: 'MY_ACTION', payload: value });

export const submit = value => ({
  type: 'contacts/addContact',
  payload: value,
});

export const remove = value => ({
  type: 'contacts/deleteContact',
  payload: value,
});

export const filter = value => ({
  type: 'contacts/addFilter',
  payload: value,
});
