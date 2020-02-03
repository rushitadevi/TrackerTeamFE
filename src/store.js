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
    companyVacancies: []
  },

  jobApp: {
    jobApp: [],
    allJobApps: [],
<<<<<<< HEAD
    wishlist: [],    
=======
    wishlist: [],
    active: [],
    closed: [],
    wishlistCount: null
>>>>>>> studentDashboard-homepage
  },
 userData:{
  userData:[]
 },
 loggedInUser :{
  loggedInUser:[]
 }
 
   
 
  

};

const combReducer = combineReducers({userData:registratioReducer,loggedInUser:loginReducer, publicAPI: publicAPIReducer,  jobApp: jobAppReducer });

export default function configureStore() {
  return createStore(
    combReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}