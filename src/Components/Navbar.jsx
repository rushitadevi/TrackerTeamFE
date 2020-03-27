import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => {
    return state;
};

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    logOut = () => {
        localStorage.removeItem("token");
        window.location.href = '/'
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-light" style={{ paddingLeft: "0px" }}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample10"
                    aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-md-flex-end" id="navbarsExample10" style={{justifyContent:"flex-end",margin:this.props.margin}} >                
                    <ul className="navbar-nav">
                        {this.props.loggedInUser && this.props.loggedInUser.user.role === "Student" ?
                            <li className="nav-item">
                                <a href="/student" className="nav-link" >
                                    Home</a>
                            </li> : null}
                        {this.props.loggedInUser && this.props.loggedInUser.user.role === "Student" ?
                            null
                            : this.props.loggedInUser.user.role === "Manager" ?
                                null :
                                <li className="nav-item">
                                    <a href="/signIn" className="nav-link" >
                                        Sign In</a>
                                </li>
                        }
                        {this.props.loggedInUser && this.props.loggedInUser.user.role === "Manager" ?
                            null :
                            this.props.loggedInUser.user.role === "Student" ?
                                null :
                                <li className="nav-item">
                                    <a href="/register" className="nav-link" >
                                        Register</a>
                                </li>
                        }
                        <li className="nav-item text-center">
                            {this.props.loggedInUser.user && this.props.loggedInUser.user.role === "Manager" ?
                                <li onClick={this.logOut} className="nav-link" style={{ cursor: "pointer" }} >
                                    Log Out</li>
                                : this.props.loggedInUser.user.role === "Student" ?
                                    <a href="/" onClick={this.logOut} className="nav-link" style={{ cursor: "pointer" }} >
                                        Log Out</a>
                                    : null
                            }
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default connect(mapStateToProps)(NavBar);
