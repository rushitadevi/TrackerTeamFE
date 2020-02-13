import React, { Component } from 'react';
import LandingPageImg from "./Img/LandingPageImg.jpg"
import Navbar from "./Navbar";

class LandingPage extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div>
                    <div className="w-100">
                        <div className="row">
                            <div className="col-6">
                                <div id="logo">
                                    {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1280px-LinkedIn_Logo.svg.png" alt="hello" /> */}
                                </div>
                            </div>
                            <div className="col-6">
                                <div id="login-option-nav">
                                    {/* {this.state.token == null ?
                            <> 
                            <a href="/signup" className="mr-3">Join Now</a>
                            <button onClick={() => window.location.href='/signin'} className="sign-btn">sign in</button>
                            </>
                            : <button onClick={this.Logout} className="sign-btn">Log out</button>
                        } */}
                                </div>
                            </div>
                        </div>

                        <div className="row" id="header-loginpage">
                            <div className="col-6">
                                <h1>If you can DREAM it, you can DO it!!
                        </h1>
                                {/* <input id="searchbar" type="text" placeholder="Find jobs, people and more..." /> */}
                            </div>
                            <div className="col-6">
                                <div >
                                    <img id="login-img-header" src={LandingPageImg} alt="No I" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default LandingPage;