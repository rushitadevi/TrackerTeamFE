import React from "react"
import { Container, Row, Col } from 'react-bootstrap'
import {addLoginData} from "../Actions/login"
import { connect } from "react-redux";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
    addLoginDataThunk: data => dispatch(addLoginData(data)),
});

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loginDetails :{
                email:null,
                password:null
            }
        }
    }
     
    onSubmit = (e) => {
        e.preventDefault();
        console.log("hii",this.state.loginDetails)
        this.props.addLoginDataThunk(this.state.loginDetails)
        console.log(this.props.loggedInUser,"uu")
        //this.props.history.push("/signIn");
    }

    onChange = (e) => {
        var LoginDetails=this.state.loginDetails
        if(e.currentTarget.id==="email")
        {
            LoginDetails.email=e.currentTarget.value
        }
        else if(e.currentTarget.id==="password")
        {
            LoginDetails.password=e.currentTarget.value
        }
        this.setState({
            loginDetails:LoginDetails
        })
    }

    render() {
        return (
            <Container>
                <Row>
                <Col></Col>
                    <Col>
                        <form className="form" onSubmit={(e) => this.onSubmit(e)}>
                            <div className="columns">
                                <div className="column" />
                                <div className="column" />
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
                                        <div className="control">
                                            <button className="button buttonDelete" id="buttonDelete">
                                                Cancel
								</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="column" />
                            </div>
                        </form>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);