import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { connect } from "react-redux";
import { addRegisterData } from "../Actions/register";

const mapStateToProps = state => state;
const mapDispatchToProps = dispatch => ({
    addFormDataThunk: data => dispatch(addRegisterData(data)),
});

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: null,
                surname: null,
                email: null,
                role: "Manager",
                password: null,
                userStatus: null
            }
        }
    }

    onChange = e => {
        var user = this.state.user
        if (e.currentTarget.id === "name") {
            user.name = e.currentTarget.value
        }
        else if (e.currentTarget.id === "surname") {
            user.surname = e.currentTarget.value
        }
        else if (e.currentTarget.id === "email") {
            user.email = e.currentTarget.value
        }
        else if (e.currentTarget.id === "password") {
            user.password = e.currentTarget.value
        }
        if (e.currentTarget.id === "roleOption") {
            user.role = e.currentTarget.value
        }
        user.userStatus = "Pending"
        this.setState({
            user: user
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addFormDataThunk(this.state.user)
        this.props.history.push("/signIn");
    }

    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                        </Col>
                        <Col>
                            <form id="registerform" className=" shadow p-3 mb-5 bg-white" onSubmit={e => this.handleSubmit(e)} >
                                <div >
                                    <label style={{ color: " #052f5f", fontWeight: "bold", color: "#692799", marginLeft: "35%" }} >REGISTER</label>
                                </div>
                                <div className="form-row">
                                    <div className="col-md-6 mb-3">
                                        <label className="label" >NAME</label>
                                        <input type="text" className="form-control " id="name" required onChange={e => this.onChange(e)} />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="label" >SURNAME</label>
                                        <input type="text" className="form-control" id="surname" required onChange={e => this.onChange(e)} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-md-6 mb-3">
                                        <label className="label" >EMAIL</label>
                                        <input type="text" className="form-control " id="email" required onChange={e => this.onChange(e)} />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="label" >PASSWORD</label>
                                        <input type="password" className="form-control" id="password" required onChange={e => this.onChange(e)} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-md-6 mb-3">
                                        <label className="label" >ROLE</label>
                                        <div >
                                            <select id="roleOption" className="custom-select" value={this.state.user.role} onChange={e => this.onChange(e)} >
                                                <option>School Manager</option>
                                                <option>Student</option>
                                                <option>Admin</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="label" >SCHOOL</label>
                                        <input type="text" className="form-control" id="schoolName" onChange={e => this.onChange(e)} />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-md-6 mb-3">
                                        <label className="label" >GITHUBURL</label>
                                        <input type="text" className="form-control" id="github" onChange={e => this.onChange(e)} />
                                    </div>
                                </div>
                                <button className="submitButton" type="submit">Register</button>
                                <hr />
                                <a className="signIn" onClick={() => this.props.history.push("/signIn")} >Sign In</a>
                            </form>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </>);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);



