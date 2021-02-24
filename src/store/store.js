import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { reducerAPI } from "./reducers/reducerAPI";
import { reducerCart } from "./reducers/reducerCart";
import { reducerDelForm } from "./reducers/reducerDelForm";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  reducerAPI,
  reducerCart,
  reducerDelForm,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

window.__store__ = store;

export default store;
