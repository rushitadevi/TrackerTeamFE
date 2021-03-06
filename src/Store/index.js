import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import publicAPIReducer from "../Reducers/publicAPI";
import jobAppReducer from "../Reducers/jobApp";
import registratioReducer from "../Reducers/register.js";
import loginReducer from "../Reducers/login.js";
import managerReducer from "../Reducers/manager";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  publicAPI: {
    filteredSearch: [],
    companyVacancies: [],
  },

  jobApp: {
    wishlist: { items: [], count: 0 },
    closed: { items: [], count: 0 },
    active: { items: [], count: 0 },
    allJobApps: [],
    jobApp: [],
    singleApp: {},
    jobAppUpdate: []
  },
  userData: {
    userData: []
  },
  loggedInUser: {
    user: {},
    token: undefined,
  },
  students: {
    students: [],
    applications: [],
    appCount: 0
  },
   manager:{
    applications:[],
    students:[],
    weekApps: null,
    appCount: null,
    studentStatus:[],
    sendEmail:false
   }
};

const combReducer = combineReducers({
  userData: registratioReducer, loggedInUser: loginReducer,
  publicAPI: publicAPIReducer, jobApp: jobAppReducer, students: managerReducer,
  manager:managerReducer 
});

export default function configureStore() {
  return createStore(
    combReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}