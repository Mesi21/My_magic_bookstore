/* eslint-disable no-unused-vars */

export const createBook = book => ({
  type: 'CREATE_Book',
  name: book,
});

export const removeBook = book => ({
  type: 'REMOVE_BOOK',
  id: book.id,
});
