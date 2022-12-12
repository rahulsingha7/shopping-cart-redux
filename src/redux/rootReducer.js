import { combineReducers } from "redux";
import asusReducer from "./asus/asusReducer";
import canonReducer from "./canon/canonReducer";
import dellReducer from "./dell/dellReducer";

const rootReducer = combineReducers({
  asus: asusReducer,
  dell: dellReducer,
  canon: canonReducer,
});
export default rootReducer;
