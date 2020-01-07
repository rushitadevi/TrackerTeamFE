import React, { Component } from "react";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Provider } from 'react-redux';
import StudentDashboard from "./StudentDashboard";
import configureStore from "../store";


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
      <Provider store={configureStore()}>
    
      <Router>
        <Route path="/student" exact component={StudentDashboard} />
      </Router>
     </Provider>
    );
  }

  
  };


export default Main;
