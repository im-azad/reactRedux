import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import dyCounterReducer from "./dynamicCounter/dynamicCounterReducer";
import filterReducer from "./filters/reducer";
import todoReducer from "./todos/reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  dynamicCounter: dyCounterReducer,
  todos: todoReducer,
  filters: filterReducer,
});

export default rootReducer;
