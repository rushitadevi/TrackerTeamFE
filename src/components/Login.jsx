import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
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
                email: null,
                password: null
            },
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addLoginDataThunk(this.state.loginDetails)
    }

    onChange = (e) => {
        var LoginDetails = this.state.loginDetails
        if (e.currentTarget.id === "email") {
            LoginDetails.email = e.currentTarget.value
        }
        else if (e.currentTarget.id === "password") {
            LoginDetails.password = e.currentTarget.value
        }
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
                                            <h3 className="mb-0" style={{color: "#052f5f"}} >Login</h3>
                                        </div>
                                        <div className="card-body">
                                            <form className="form" onSubmit={(e) => this.onSubmit(e)} >
                                                <div className="form-group">
                                                    <label for="uname1">Email</label>
                                                    <input type="text" className="form-control form-control-lg rounded-0" placeholder="email"
                                                        name="uname1" id="email" required onChange={(e) => this.onChange(e)} />
                                                    <div className="invalid-feedback">Oops, you missed this one.</div>
                                                </div>
                                                <div className="form-group">
                                                    <label>Password</label>
                                                    <input type="password" className="form-control form-control-lg rounded-0"
                                                        id="password" required placeholder="password" autocomplete="new-password" onChange={(e) => this.onChange(e)} />
                                                    <div className="invalid-feedback">Enter your password too!</div>
                                                </div>
                                                <button className="btn submitButton btn-lg float-center" id="btnLogin">Login</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>                            </div>
                       </div>
                    </div>
                </div>


                <Container>
                    <Row>
                        <Col></Col>
                        <Col>





                            {/* <form className="form" style={{ border: "2px solid grey", borderRadius: "20px", paddingLeft: "20px" }} onSubmit={(e) => this.onSubmit(e)}>
                                <div className="columns">
                                    <div className="column is-one-third registerColumn">
                                        <div className="field">
                                            <label className="label">LOGIN</label>
                                        </div>
                                        <div className="field">
                                            <label className="label">
                                                <small>EMAIL</small>
                                            </label>
                                            <div className="control has-icons-left has-icons-right">
                                                <input
                                                    id="email"
                                                    className="input"
                                                    type="text"
                                                    placeholder="Email input"
                                                    onChange={(e) => this.onChange(e)}
                                                />
                                                <span className="icon is-small is-left">
                                                    <i className="fas fa-envelope" />
                                                </span>
                                                <span className="icon is-small is-right">
                                                    <i className="fas fa-exclamation-triangle" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label className="label">
                                                <small>PASSWORD</small>
                                            </label>
                                            <div className="control has-icons-left has-icons-right">
                                                <input
                                                    id="password"
                                                    className="input"
                                                    type="password"
                                                    placeholder="PASSWORD"
                                                    onChange={(e) => this.onChange(e)}
                                                />
                                                <span className="icon is-small is-left">
                                                    <i className="fas fa-envelope" />
                                                </span>
                                                <span className="icon is-small is-right">
                                                    <i className="fas fa-exclamation-triangle" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="field is-grouped">
                                            <div className="control">
                                                <button className="button" id="buttonWhite">
                                                    Submit
								        </button>
                                            </div>
                                        </div>
                                    </div> */}
                            {this.props.loggedInUser.loggedInUser && this.props.loggedInUser.loggedInUser.map((user) => (
                                user.role === "Student" ? this.props.history.push("/student")
                                    : user.role === "Manager" ? this.props.history.push("/manager")
                                        : this.props.history.push("/admin")
                            ))
                            }
                            <div className="column" />
                            {/* </div>
                            </form> */}
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);