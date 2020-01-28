import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import publicAPIReducer from "./Reducers/publicAPI";
import jobAppReducer from "./Reducers/jobApp";
import registratioReducer from "./Reducers/register.js";
import loginReducer from "./Reducers/login.js";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  publicAPI: {
    filteredSearch: [],
  },

  jobApp: {
    jobApp: [],
    allJobApps: [],
    wishlist: [],    
  },
  user:{
   userData:[],
   loggedInUser:[]
  },
  

};

const combReducer = combineReducers({user:registratioReducer,user:loginReducer, publicAPI: publicAPIReducer,  jobApp: jobAppReducer });

export default function configureStore() {
  return createStore(
    combReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}