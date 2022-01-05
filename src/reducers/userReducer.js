function userReducer(state = [], action) {
  switch (action.type) {
    case "Add":
      return [...state, action.payload];

    default:
      return state;
  }
}

export default userReducer;
