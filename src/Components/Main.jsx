import React, { Component } from "react";
import { Container } from "reactstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import StudentDashboard from "../Components/StudentDashboard/MainPage/StudentDashboard"
import ManagerDashboard from "./ManagerDashboard";
import configureStore from "../Store";
import Register from "./Register";
import Login from "./Login";
import LandingPage from "./LandingPage";
// import { ok } from "assert";


class Main extends Component {
  state = {}

  render() {
    return (
      <>
      
      <Provider store={configureStore()}>
         {/* <Navbar/> */}
         
        <Router>
        <Route path="/" exact component={LandingPage}/>
        <Container fluid className="studentHomepage">
          <Route path="/student" exact component={StudentDashboard} />
          </Container>
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