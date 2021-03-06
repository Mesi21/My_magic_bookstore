export const createBook = book => ({
  type: 'CREATE_BOOK',
  book,
});

export const removeBook = book => ({
  type: 'REMOVE_BOOK',
  id: book.id,
});

export const changeFilter = (filter) => ({
  type: 'CHANGE_FILTER',
  name: filter,
});