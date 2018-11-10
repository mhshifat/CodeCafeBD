import { combineReducers } from "redux";

import systemReducer from "./systemReducer";
import projectReducer from "./projectReducer";

export default combineReducers({
  system: systemReducer,
  projects: projectReducer
});
