import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StudentDashboard from "./StudentDashboard";


class Main extends Component {
    state = {}
//   constructor(props) {
//     super(props);
//     this.state = {
//       genericArtist: null,
//       genericArtistTitle: null
//     };
//   }


  render() {
    return (
      <Router>
        <Route path="/student" exact component={StudentDashboard} />
      </Router>
    );
  }

  
  };


export default Main;
