import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import dyCounterReducer from "./dynamicCounter/dynamicCounterReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  dynamicCounter: dyCounterReducer,
});

export default rootReducer;
