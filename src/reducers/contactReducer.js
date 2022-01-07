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
      return { ...state, contact: action.payload };
    case DELETE_CONTACT:
      return { ...state, contact: action.payload };
    default:
      return state;
  }
}

export default contactReducer;
