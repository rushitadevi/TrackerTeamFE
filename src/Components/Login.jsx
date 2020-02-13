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
                email: "ko@gmail.com",
                password: null
            },
            checkLogin: false
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addLoginDataThunk(this.state.loginDetails)
        this.setState({
            checkLogin: true
        })
    }

    componentDidUpdate = (oldState, oldProps) => {
        if (this.props.loggedInUser.token) {
            localStorage.setItem("token", this.props.loggedInUser.token)
            if (this.props.loggedInUser.role === "Student") {
                this.props.history.push("/student")
            }
            else if (this.props.loggedInUser.role === "Manager") {
                this.props.history.push("/manager")
            }
        }
    }

    onChange = (e) => {
        const LoginDetails = this.state.loginDetails
        if (e.currentTarget.id === "email") {
            LoginDetails.email = e.currentTarget.value
        }
        else if (e.currentTarget.id === "password") {
            LoginDetails.password = e.currentTarget.value
        }
        console.log(LoginDetails)
        this.setState({
            loginDetails: LoginDetails
        })
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
                                            <form className="form" onSubmit={(e) => this.onSubmit(e)} >
                                                <div className="form-group">
                                                    <label for="uname1">Email</label>
                                                    <input type="text" className="form-control form-control-lg rounded-0" placeholder="email"
                                                        name="uname1" id="email" required onChange={(e) => this.onChange(e)} value={this.state.loginDetails.email} />
                                                    <div className="invalid-feedback">Oops, you missed this one.</div>
                                                </div>
                                                <div className="form-group">
                                                    <label>Password</label>
                                                    <input type="password" className="form-control form-control-lg rounded-0" value={this.state.loginDetails.password}
                                                        id="password" required placeholder="password" autocomplete="new-password" onChange={(e) => this.onChange(e)} />
                                                    <div className="invalid-feedback">Enter your password too!</div>
                                                </div>
                                                <button className="btn submitButton btn-lg float-center" id="btnLogin">Sign In</button>
                                            </form>
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