const books = (state, action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [
        ...state,
        action.id,
      ];
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.id);
    default:
      return state;
  }
};

export default books;
