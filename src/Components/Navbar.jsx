import React from 'react';
class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    logOut=()=>{
        localStorage.removeItem("token");
        window.location.href='/'
    }
    render() { 
        return (
            <nav className="navbar navbar-expand-lg bg-light" style={{ paddingLeft:"0px" }}>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample10"
                            aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample10" >
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a href="/" className="nav-link" >
                                        Home</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/signIn" className="nav-link" >
                                        Login</a>
                                </li>
                                <li className="nav-item">
                                    <a href="/register" className="nav-link" >
                                        Sign Up</a>
                                </li>
                                <li className="nav-item text-center">
                                    <a onClick={this.logOut} className="nav-link" style={{cursor:"pointer"}} >
                                        Log Out</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
          );
    }
}
 
export default NavBar;
