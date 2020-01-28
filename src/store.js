import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import publicAPIReducer from "./Reducers/publicAPI";
import jobAppReducer from "./Reducers/jobApp";
import registration from "./Reducers/register";
import login from "./Reducers/login";
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
  user:[],
    loggedInUser:[]

};

const combReducer = combineReducers({ publicAPI: publicAPIReducer,  jobApp: jobAppReducer,user:registration,loggedInUser:login });

export default function configureStore() {
  return createStore(
    combReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}