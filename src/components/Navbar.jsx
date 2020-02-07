import React from 'react';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-light " style={{ backgroundColor: "#FFB73E !important",paddingLeft:"0px" }}>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample10"
                            aria-controls="navbarsExample10" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample10" >
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a href="/student" className="nav-link" >
                                        Home</a>
                                </li>
                                <li className="nav-item text-center">
                                    <a href="https://github.com/reactstrap/reactstrap" className="nav-link" >
                                        Log Out</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
          );
    }
}
 
export default NavBar;
