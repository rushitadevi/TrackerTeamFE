import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import StudentDashboard from "../Components/StudentDashboard/MainPage/StudentDashboard"
import ManagerDashboard from "./ManagerDashboard";
import configureStore from "../Store";
import Register from "./Register";
import Login from "./Login";
import LandingPage from "./LandingPage";

class Main extends Component {
  state = {}

  render() {
    return (
      <>
        <Provider store={configureStore()}>
          <Router>
            <Route path="/" exact component={LandingPage} />
            <Route path="/student" exact component={StudentDashboard} />
            <Route path="/manager" exact component={ManagerDashboard} />
            <Route path="/register" exact component={Register} />
            <Route path="/signIn" exact component={Login} />
          </Router>
        </Provider>
      </>
    );
  }
};

export default Main;
