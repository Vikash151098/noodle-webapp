import { combineReducers } from "redux";
import contactReducer from "./contactReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  contactsData: contactReducer,
  usersData: userReducer,
});

export default rootReducer;
