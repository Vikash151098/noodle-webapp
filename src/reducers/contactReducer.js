import {
  ADD_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
  GET_CONTACT,
  GET_CONTACT_BY_ID,
} from "../actions/types";

let contactsData = {
  contacts: [],
  contact: {},
  loading: false,
};

function contactReducer(state = contactsData, action) {
  switch (action.type) {
    case ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, action.payload] };
    case GET_CONTACT:
      return { ...state, contacts: action.payload };
    case GET_CONTACT_BY_ID:
      return { ...state, contact: action.payload };
    case EDIT_CONTACT:
      return state;
    case DELETE_CONTACT:
      return state;
    default:
      return state;
  }
}

export default contactReducer;
