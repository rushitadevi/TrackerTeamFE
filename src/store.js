import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import publicAPIReducer from "./Reducers/publicAPI";
import jobAppReducer from "./Reducers/jobApp";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  publicAPI: {
    filteredSearch: [],
    companyVacancies: [],
  },

  jobApp: {
    jobApp: [],
    wishlist:{ items: [], count: 0},
    closed: { items: [], count: 0},
    active: { items: [], count: 0},
    allJobApps: [],
    items: [],
    count: {},
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