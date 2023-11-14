import { applyMiddleware, createStore } from "redux";

import rootReducer from "./rootReducer";

//function from callable as f(a, b, c) into callable as f(a)(b)(c).
const myLogger = (store) => (next) => (action) => {
  console.log(`Action: ${JSON.stringify(action)}`);
  console.log(`Before: ${JSON.stringify(store.getState())}`);
  const upcomingState = [action].reduce(rootReducer, store.getState()); // array reduce a single value

  console.log(`Upcoming State: ${JSON.stringify(upcomingState)}`);

  return next(action);
};

const store = createStore(rootReducer, applyMiddleware(myLogger));
export default store;
