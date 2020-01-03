import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import NavBar from './Navbar';

class StudentDashboard extends React.Component {
    state = {
        newApp: [],
        wishList: [],
        interview: [],
        showModal: false
    }

    componentDidMount = async () => {
        try {
            var res = await fetch("http://localhost:4000/application/newApp");
            var newApplications = await res.json();
            this.setState({
                newApp: newApplications
            })

            res = await fetch("http://localhost:4000/application/wishlist");
            var wishList = await res.json();
            this.setState({
                wishList: wishList
            })

            res = await fetch("http://localhost:4000/application/interview");
            var interview = await res.json();
            this.setState({
                interview: interview
            })

        } catch (err) {
        }
    }

    toggleModal = () => {
        this.setState({ showModal: !this.state.showModal });
    };

    render() {
        return (
            <div className="container-fluid" style={{backgroundColor: "#F5F9FC" , paddingLeft: "0px" ,paddingRight: "0px"}} >
                <div >
                    <NavBar/>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="row">
                        </div>
                        <div className="row">
                            <div className="container" >
                                <div className="row" style={{ height: "350px", paddingTop: "30px" }} >
                                    <div className="container" style={{
                                        width: "1294px", backgroundColor: "white",
                                        border: "1px solid #CCC",
                                        boxShadow: "0 1px 5px #CCC"
                                    }}>
                                        <label className="lblTracker"  >Tracker</label>
                                        <hr style={{ border: "0.5px solid #EAEEF6" }} ></hr>
                                        <div className="row">
                                            <div className="col" style={{ paddingLeft: "40px", height: "35px" }}>
                                                <input type="text" placeholder="Search Company" />
                                            </div>
                                            <div className="col"  >
                                                <select className="form-control" id="sel1" style={{ border: "#2188e2 1px solid", width: "150px" }}>
                                                    <option>Job Category</option>
                                                    <option>Front-End</option>
                                                    <option>Back-End</option>
                                                    <option>Product Management</option>
                                                </select>
                                            </div>
                                            <div className="col" >
                                                <select className="form-control" id="sel1" style={{ border: "#2188e2 1px solid", width: "150px" }}>
                                                    <option>Contract Type</option>
                                                    <option>Full Time</option>
                                                    <option>Part Time</option>
                                                    <option>Remote</option>
                                                    <option>Freelance</option>
                                                </select>
                                            </div>
                                            <div className="col" style={{ width: "200px" }}>
                                                <select className="form-control" id="sel1" style={{ border: "#2188e2 1px solid", width: "150px" }}>
                                                    <option>Location</option>
                                                    <option>Berlin</option>
                                                    <option>Milan</option>
                                                    <option>Warsaw</option>
                                                </select>
                                            </div>
                                            <div className="col" >
                                                {/* <Button id="buttonSearch" data-toggle="collapse" data-target="#demo" variant="outline-secondary">Search</Button> */}
                                                <button type="button" className="btn btn-info" data-toggle="collapse" data-target="#demo"  >Search</button>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div id="demo" className="collapse" style={{ marginLeft: "40px", margin: "40px" }}>
                                                <div className="row table-wrapper-scroll-y my-custom-scrollbar">
                                                    <table className="table table-hover">
                                                        <thead>
                                                            <tr>
                                                                <th>Company</th>
                                                                <th>Role</th>
                                                                <th>Location</th>
                                                                <th>Description</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>John</td>
                                                                <td>Doe</td>
                                                                <td>john@example.com</td>
                                                                <td >hello</td>
                                                                <button type="button" className="btn btn-warning btn-sm m-0" id="btnDetails" onClick={() => this.setState({ showModal: true })} >Details</button>
                                                            </tr>
                                                            <tr>
                                                                <td>John</td>
                                                                <td>Doe</td>
                                                                <td>john@example.com</td>
                                                                <td>hello</td>
                                                                <button type="button" className="btn btn-warning btn-sm m-0" id="btnDetails" onClick={() => this.setState({ showModal: true })} >Details</button>
                                                            </tr>
                                                            <tr>
                                                                <td>John</td>
                                                                <td>Doe</td>
                                                                <td>john@example.com</td>
                                                                <td>hello</td>
                                                                <button type="button" className="btn btn-warning btn-sm m-0" id="btnDetails" onClick={() => this.setState({ showModal: true })} >Details</button>
                                                            </tr>
                                                            <tr>
                                                                <td>John</td>
                                                                <td>Doe</td>
                                                                <td>john@example.com</td>
                                                                <td>hello</td>
                                                                <button type="button" className="btn btn-warning btn-sm m-0" id="btnDetails" onClick={() => this.setState({ showModal: true })} >Details</button>
                                                            </tr>
                                                        </tbody>
                                                    </table>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row" style={{ height: "350px", paddingTop: "30px", }}>
                                    <div className="container" style={{
                                        width: "1294px", backgroundColor: "#FCFFFF", border: "1px solid #CCC",
                                        boxShadow: "0 1px 5px #CCC", paddingLeft: "60px", paddingTop: "30px"
                                    }} >
                                        <div className="row" >
                                            <div className="col-md-4">
                                                <ul className="list-group scroll">
                                                    <li className="list-group-item active">ACTIVE APPLICATIONS</li>
                                                    {this.state.newApp && this.state.newApp.map((app, id) => (
                                                        <li key={id} className="list-group-item ">{app.companyName}({app.roleTitle})</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="col-md-4">
                                                <ul className="list-group scroll">
                                                    <li className="list-group-item active">WISHLIST</li>
                                                    {this.state.wishList && this.state.wishList.map((app, id) => (
                                                        <li className="list-group-item">{app.companyName}({app.roleTitle})</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="col-md-4">
                                                <ul className="list-group scroll">
                                                    <li className="list-group-item active">INTERVIEW APPLICATIONS</li>
                                                    {this.state.interview && this.state.interview.map((app, id) => (
                                                        <li className="list-group-item">{app.companyName}({app.roleTitle})</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Modal show={this.state.showModal} onHide={this.toggleModal}>
                    <Modal.Header style={{ backgroundColor: "#2867B2" }} closeButton>
                        <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="row" style={{ height: "30px" }} >
                          company name
                </div>
                <hr></hr>
                        <div className="row">
                            <div className="col-md-4" style={{borderRight:"solid 1px lightgrey",}}>
                                <button id="btnJobInfo" style={{border:"0px", background:"transparent" }}>Job Info</button><br></br>
                                <button style={{border:"0px", background:"transparent" }}>Tasks</button><br></br>
                                <button style={{border:"0px", background:"transparent" }}>Notes</button><br></br>
                                <button style={{border:"0px", background:"transparent" }}>Company</button><br></br>
                                <button style={{border:"0px", background:"transparent" }}>Directory</button><br></br>
                             </div>
                            <div className="col-md-8">
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="school name"
                                        aria-label="schoolName"
                                        id="name"
                                    //defaultValue={this.props.schools.schools.name}
                                    />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Email"
                                        aria-label="email"
                                        //onChange={this.handleInput}
                                        id="email"
                                    //defaultValue={this.props.schools.schools.email}
                                    />
                                </InputGroup>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Address"
                                        as="textarea" style={{ height: "100px" }}
                                        aria-label="address"
                                        //onChange={this.handleInput}
                                        id="address"
                                    //defaultValue={this.props.schools.schools.address}
                                    />
                                </InputGroup>
                            </div>
                        </div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.toggleModal()}>
                            Close
                     </Button>
                        <Button variant="primary" style={{ backgroundColor: "#2867B2" }}
                            onClick={() => { this.toggleModal(); this.setState({ show: false }); }}>
                            Update
                   </Button>
                    </Modal.Footer>
                </Modal>
                <footer className="py-5 bg-dark">
                </footer>
            </div>
        );
    }
}

export default StudentDashboard;