import { combineReducers } from "redux";
import { permissionsReducer } from "./permissionsReducer";

export default combineReducers({
  username: () => {
    return "שיר שחק";
  },
  permissionsReducer: permissionsReducer,
});
