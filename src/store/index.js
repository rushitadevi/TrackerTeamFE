
import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import applicationReducer from "../reducers/manager"
import studentReducer from "../reducers/manager"
import totAppWeekReducer from "../reducers/manager"
import totAppsReducer from "../reducers/manager"
import managerReducer from "../reducers/manager"
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
   manager:{
    applications:[],
    students:[],
    weekapps: null,
    appCount:0
   }
}
  const combReducer = combineReducers({manager:managerReducer });

  export default function configureStore() {
    return createStore(
      combReducer,
      initialState,
      composeEnhancers(applyMiddleware(thunk))
    );
  }