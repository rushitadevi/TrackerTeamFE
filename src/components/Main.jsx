import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import StudentDashboard from "./StudentDashboard";
import configureStore from "../store";
import { ok } from "assert";


class Main extends Component {
  state = {}
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Provider store={configureStore()}>
        <Router>
          {/* <StudentDashboard triggerSearch={this.search} location={this.state.locationResults} /> */}
          <Route path="/student" exact component={StudentDashboard} />
        </Router>
      </Provider>
    );
  }


};



export default Main;
