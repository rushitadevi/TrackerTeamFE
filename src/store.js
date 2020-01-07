import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import publicAPIfetchesReducer from "./Reducers/publicAPIfetches";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  publicAPIfetches: {
    jobCategory: [],
    contractType: []
  },

};

const combReducer = combineReducers({ publicAPIfetches: publicAPIfetchesReducer});

export default function configureStore() {
  return createStore(
    combReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}