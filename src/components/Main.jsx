import React, { Component } from "react";
import { Container } from "reactstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import StudentDashboard from "./StudentDashboard";
import ManagerDashboard from "./ManagerDashboard";
import FilteredSearchBar from "./FilteredSearchBar";
import Navbar from "./Navbar";
import configureStore from "../store";
// import { ok } from "assert";


class Main extends Component {
  state = {}

  render() {
    return (
      <Provider store={configureStore()}>
        <Router>
        <Navbar/>
        <Container fluid className="studentHomepage">
     
          {/* <FilteredSearchBar/> */}
          {/* <StudentDashboard triggerSearch={this.search} location={this.state.locationResults} /> */}
          <Route path="/student" exact component={StudentDashboard} />
          </Container>
          <Route path="/manager" exact component={ManagerDashboard} />

        </Router>
      </Provider>
    );
  }


};



export default Main;
