import { GET_BRANDS, ADD_MORE_BRANDS, GET_UNIQUE_BRANDS } from '../actions/types'

const initialState = {
  brands: [],
  isLoading: false,
}

function brandReducer(state = initialState, action) {
  switch (action.type) {
    case GET_BRANDS:
      return { ...state, brands: [...state.brands, ...action.payload] };
    case GET_UNIQUE_BRANDS:
      {
        const set = new Set();
        const res = [];
        for (let i = 0; i < state.brands.length; i++) {
          if (!set.has(state.brands[i].Country)) {
            set.add(state.brands[i].Country)
            res.push(state.brands[i])
          }
        }
        return { ...state, brands: [...state.brands, ...res] };
      }
    case ADD_MORE_BRANDS:
      return { ...state, brands: [...state.brands, ...action.payload] };
    default:
      return state;
  }
}

export default brandReducer;
