import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import publicAPIReducer from "./Reducers/publicAPI";
import jobAppReducer from "./Reducers/jobApp";
import registratioReducer from "./Reducers/register.js";
import loginReducer from "./Reducers/login.js";
import managerReducer from "./Reducers/manager";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  publicAPI: {
    filteredSearch: [],
    companyVacancies: [],
  },

  jobApp: {
    jobApp: [],
    wishlist: { items: [], count: 0 },
    closed: { items: [], count: 0 },
    active: { items: [], count: 0 },
    allJobApps: [],
    items: [],
    count: {},
    singleApp: {},
    jobAppUpdate: []
  },
  userData: {
    userData: []
  },
  loggedInUser: {
    loggedInUser: []
  },
  students: {
    students: [],
    applications: [],
    appCount: 0
  }

};

const combReducer = combineReducers({
  userData: registratioReducer, loggedInUser: loginReducer,
  publicAPI: publicAPIReducer, jobApp: jobAppReducer, students: managerReducer
});

export default function configureStore() {
  return createStore(
    combReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}