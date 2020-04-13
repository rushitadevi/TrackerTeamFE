import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import StudentDashboard from "../Components/StudentDashboard/MainPage/StudentDashboard";
import ManagerDashboard from "./ManagerDashboard";
import Register from "./Register";
import Login from "./Login";
import LandingPage from "./LandingPage";

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
  getUser: (user, token) =>
    dispatch({
      type: "SIGN_IN",
      payload: {
        user: user,
        token: token,
      },
    }),
});

class Main extends Component {
  state = {};

  render() {
    let token = this.props.loggedInUser.token
    let loggedInUser = this.props.loggedInUser;

    return (
      <>
        <Router>
          <>
            <Route path="/" exact component={LandingPage} />
            <Route path="/signIn" exact component={Login} />
            <Route path="/register" exact component={Register} />
          </>
          {loggedInUser && token && (
            <>
              <Route path="/student" exact component={StudentDashboard} />
              <Route path="/manager" exact component={ManagerDashboard} />
            </>
          )}
        </Router>
      </>
    );
  }

  componentDidMount = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const res = await fetch(process.env.REACT_APP_URL + "user/refresh", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      });
      if (res.ok) {
        var tokenJson = await res.json();
        localStorage.setItem("token", tokenJson.token);
        this.props.getUser(tokenJson.user, tokenJson.token);
      } else {
        localStorage.removeItem("token");
      }
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
