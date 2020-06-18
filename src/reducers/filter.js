const filter = (state = 'All', action) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return action.name;
    default:
      return state;
  }
};

export default filter;
