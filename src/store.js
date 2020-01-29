import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import publicAPIReducer from "./Reducers/publicAPI";
import jobAppReducer from "./Reducers/jobApp";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  publicAPI: {
    filteredSearch: [],
    companyVacancies: []
  },

  jobApp: {
    jobApp: [],
    allJobApps: [],
    wishlist: [],
    active: [],
    closed: [],
  },

};

const combReducer = combineReducers({ publicAPI: publicAPIReducer,  jobApp: jobAppReducer });

export default function configureStore() {
  return createStore(
    combReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}