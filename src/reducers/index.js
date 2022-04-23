import { combineReducers } from "redux";
import brandReducer from "./brandReducer";
import imageReducer from "./imageReducer";

const rootReducer = combineReducers({
  brandData: brandReducer,
  imageData: imageReducer,

});

export default rootReducer;
