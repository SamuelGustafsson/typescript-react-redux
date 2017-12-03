import { applyMiddleware, compose } from "redux";
import { createStore } from "redux";
import { reducer, initialState } from "./root-reducer";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = composeEnhancers(applyMiddleware())(createStore)(
  reducer,
  initialState
);
