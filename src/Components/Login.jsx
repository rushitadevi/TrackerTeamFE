import React from "react"
import { addLoginData } from "../Actions/login"
import { connect } from "react-redux";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    addLoginDataThunk: data => dispatch(addLoginData(data)),
});

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginDetails: {
                email: "",
                password: null
            },
            checkLogin: false
        }
    }

    componentDidUpdate = (oldState, oldProps) => {
        if (this.props.loggedInUser.token) {

            if (this.props.loggedInUser.user.role === "Student") {
                this.props.history.push("/student")
            }
            else if (this.props.loggedInUser.user.role === "Manager") {
                this.props.history.push("/manager")
            }
        }
    }


    login = async () => {    
        this.props.addLoginDataThunk(this.state.loginDetails)  
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 min-vh-100 d-flex flex-column justify-content-center">
                            <div className="row">
                                <div className="col-lg-6 col-md-8 mx-auto">
                                    <div className="card rounded shadow shadow-sm">
                                        <div className="card-header">
                                            <h3 className="mb-0" style={{ color: "#052f5f" }} >Sign In</h3>
                                        </div>
                                        <div className="card-body">
                    
                                                <div className="form-group">
                                                    <input type="text" className="form-control form-control-lg rounded-0" placeholder="email"
                                                       required value={this.state.loginDetails.email} onChange={(val) => this.setState({ loginDetails:{...this.state.loginDetails, email: val.currentTarget.value} })}/>
                                                    <div className="invalid-feedback">Oops, you missed this one.</div>
                                                </div>
                                                <div className="form-group">
                                                   
                                                    <input type="password" className="form-control form-control-lg rounded-0" value={this.state.loginDetails.password}
                                                        required placeholder="password" autocomplete="new-password" onChange={(val) => this.setState({ loginDetails:{...this.state.loginDetails, password: val.currentTarget.value} })} />
                                                    <div className="invalid-feedback">Enter your password too!</div>
                                                </div>
                                                <button className="btn submitButton btn-lg float-center" id="btnLogin" onClick={this.login}>Sign In</button>
                        
                                        </div>
                                    </div>
                                </div>                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);