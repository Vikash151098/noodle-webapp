import { GET_BRANDS, ADD_MORE_BRANDS } from '../actions/types'

function brandReducer(state = [], action) {
  switch (action.type) {
    case GET_BRANDS:
      return [...state, ...action.payload];
    // case ADD_MORE_BRANDS:
    //   return [...state, action.payload];
    default:
      return state;
  }
}

export default brandReducer;
