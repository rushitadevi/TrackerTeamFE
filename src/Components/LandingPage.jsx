import React, { Component } from "react";
import backImg from "./Img/back.png";
import NavBar from "../Components/Navbar"

class LandingPage extends Component {
  render() {
    return (
      <>
        <div className="Container">
          <div className="leftContiner"></div>
          <div className="mainContainer">
            <div className="leftmainContainer">
              <h5 id="logoTRacker">TrackeR</h5>
              <img src={backImg} alt="no " className="imgLanding" />
            </div>
            <div className="rightmainContainer">
              <h1 className="tagLine">
                The best way to track, manage and analyze user data...
              </h1>{" "}
            </div>
          </div>
          <div className="rightContainer"></div>
        </div>
      </>
    );
  }
}

export default LandingPage;
