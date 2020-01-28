import React from "react"
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
          user:{
              name:null,
              surname:null,
              email:null,
              role:null,
              password:null,
          }
        }
    }
    
    onChange = e =>
    {
        var user=this.state.user
        if(e.currentTarget.id==="name")
        {
         user.name=e.currentTarget.value
        }
        else if(e.currentTarget.id==="surname")
        {
          user.surname=e.currentTarget.value
        }
        else if(e.currentTarget.id==="email")
        {
          user.email=e.currentTarget.value
        }
        else if(e.currentTarget.id==="password")
        {
          user.password=e.currentTarget.value
        }
        else if(e.currentTarget.id==="roleOption")
        {
          user.role=e.currentTarget.value
        }
        this.setState({
            user:user
        })
    }
    
    handleSubmit=(e)=>{
    e.preventDefault();
    this.props.addFormDataThunk(this.state.user)
    this.props.history.push("/signIn");
    }

    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col></Col>
                        <Col>
                            <form  className="registerform shadow p-3 mb-5 bg-white" onSubmit={e=>this.handleSubmit(e)}  >
                                <div className="columns">
                                    <div className="column"></div>
                                    <div className="column"></div>
                                    <div >
                                        <div className="field">
                                            <label style={{ fontWeight: "bold" }} >REGISTER</label>
                                        </div>
                                        <div className="field">
                                            <label className="label"><small>NAME</small></label>
                                            <div className="control">
                                                <input id='name' className="input" type="text" placeholder="name"  onChange={e => this.onChange(e)} />
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label className="label"><small>SURNAME</small></label>
                                            <div className="control">
                                                <input id='surname' className="input" type="text" placeholder="surname"  onChange={e => this.onChange(e)} />
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label className="label"><small>EMAIL</small></label>
                                            <div className="control has-icons-left has-icons-right">
                                                <input id='email' className="input" type="text" placeholder="Email input"  onChange={e => this.onChange(e)} />
                                                <span className="icon is-small is-left">
                                                    <i className="fas fa-envelope"></i>
                                                </span>
                                                <span className="icon is-small is-right">
                                                    <i className="fas fa-exclamation-triangle"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label className="label"><small>PASSWORD</small></label>
                                            <div className="control has-icons-left has-icons-right">
                                                <input id='password' className="input" type="password" placeholder="PASSWORD"  onChange={e => this.onChange(e)} />
                                                <span className="icon is-small is-left">
                                                    <i className="fas fa-envelope"></i>
                                                </span>
                                                <span className="icon is-small is-right">
                                                    <i className="fas fa-exclamation-triangle"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label className="label"><small>ROLE</small></label>
                                            <div className="control">
                                                <div className="select">
                                                    <select  id="roleOption"  onChange={e => this.onChange(e)} >
                                                        <option>School Manager</option>
                                                        <option>Student</option>
                                                        <option>Admin</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label className="label"><small>SCHOOL NAME</small></label>
                                            <div className="control">
                                                <input id='schoolName' className="input" type="text" placeholder="school name"  onChange={e => this.onChange(e)} />
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label className="label"><small>githubURL</small></label>
                                            <div className="control">
                                                <input name='gitURL' className="input" type="text" placeholder="url"  onChange={e => this.onChange(e)} />
                                            </div>
                                        </div>
                                        <div className="field is-grouped p-3 ">
                                            <div className="control">
                                                <button className="submitButton" >Submit</button>
                                                <button className="btnCancel" >Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column"></div>
                                </div>
                            </form>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </>);
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);



