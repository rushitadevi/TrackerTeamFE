import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Input, Row, Col } from "reactstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Scrollbars } from "react-custom-scrollbars";
import StatusUpdateModal from "./StatusUpdateModal";
import { addJobApp } from "../Actions/apiFetches";
/*if status has a state then on close call post method*/ 
const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
 addJobAppThunk: (application) => dispatch(addJobApp(application)),
});

class StudentModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedComponent: "JobInfo",
      task: "",
      statusDateTime: "",
      intDateTime: "",
      replyDateTime: "",
      status: "",
      // application: {}
    };
  }

  // handlePost = () => {
  //   // console.log("hello")
  //   // this.setState({ status: status });
  //   this.handleApplication()
  // };


  handleApplication = () => {
    // e.preventDefault();
    console.log("hello")
    var application = {
      task: this.state.task,
      statusDateTime: this.state.statusDateTime,
      intDateTime: this.state.intDateTime,
      replyDateTime: this.state.replyDateTime,
      status: this.state.status,
    }
    console.log(application)
    // this.setState({application: application})
    this.props.addJobAppThunk(application);
  };

  selectComponent = component => {
    this.setState({ selectedComponent: component });
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    return (
      <Modal
        show={this.props.showModal}
        id="statusModal"
        aria-labelledby="contained-modal-title-vcenter"
        onSubmit={() => this.handleApplication}
      >
        <Container id="modalHeader">
          <Row id="xButtonRow" className="col-sm-12">
            <Button
              id="xButton"
              onClick={() => {
                this.props.toggleModal();
                // {this.state.status && (
                //  this.handleApplication()
                // )}
              }}
            >
              X
            </Button>
          </Row>
          <Row id="modalTitleRow" className="col-sm-12">
            <Col sm="3" id="logoCol">
              <img
                id="modalLogo"
                src={this.props.selectedJob.company_logo}
                height="20px"
                alt="logo"
              />
            </Col>
            <Col sm="9" id="titleCol">
              <h3 id="title">{this.props.selectedJob.company}</h3>
            </Col>

            <Button className="updateButton"  onClick={() => this.setState({showModal: true,})}>UPDATE STATUS</Button>
            <StatusUpdateModal 
                showModal={this.state.showModal} 
                toggleModal={this.toggleModal}
                handleApplication={(newStatus) => this.setState({ status: newStatus}), this.handleApplication} 
                // handleStatus={this.handlePost} 
                />       
                        
          </Row>
        </Container>

        <Container>
          <Row className="modalOptionsRect">
            <Row className="modalOptions">
              <Col xs={12} className="first">
                <a
                  href="#"
                  onClick={() => {
                    this.selectComponent("JobInfo");
                  }}
                >
                  JOB INFO
                </a>
              </Col>
              <Col xs={12} className="second">
                <a
                  href="#"
                  onClick={() => {
                    this.selectComponent("Tasks");
                  }}
                >
                  TASKS
                </a>
              </Col>
              <Col xs={12} className="third">
                <a
                  href="#"
                  onClick={() => {
                    this.selectComponent("Notes");
                  }}
                >
                  NOTES
                </a>
              </Col>
              <Col xs={12} className="fourth">
                <a
                  href="#"
                  onClick={() => {
                    this.selectComponent("Directory");
                  }}
                >
                  DIRECTORY
                </a>
              </Col>
            </Row>
          </Row>
        </Container>

        <Container className="companyInfoCont">
        {this.state.selectedComponent === "JobInfo" && (
              <>
          <Row className="col-sm-12 companyInfoRow">
         
                <Col xs={6} className="companyInfo">
                  <h6 id="vacancyTitle">Vacancy Details</h6>
                  <h6 id="companyInfoTitle">Company Name</h6>
                  <h6 id="jobInfo">{this.props.selectedJob.company}</h6>
                  <h6 id="role">Role Title</h6>
                  <h6 id="jobInfo">{this.props.selectedJob.title}</h6>
                  <h6 id="loco">Location</h6>
                  <h6 id="jobInfo">{this.props.selectedJob.location}</h6>
                  <h6 id="applicationTitle">Posting URL</h6>
                  <a id="applicationJobInfo" href={this.props.selectedJob.url}>
                    {this.props.selectedJob.url}
                  </a>
                </Col>
                <Col xs={6} className="companyInfo">
                  <h6 id="statusTitle">Status: New</h6>
                  <h6 id="appDateTitle">Application Date</h6>
                  <Input
                    type="date"
                    name="statusDateTime"
                    id="dateTime"
                    placeholder="Date &amp; Time"
                    value={this.state.statusDateTime}
                    onChange={e => this.setState({ statusDateTime: e.currentTarget.value })}
                  />
                
                  <h6 id="interviewDateTitle">Interview Date</h6>
                  <Input
                    type="date"
                    name="intDateTime"
                    id="dateTime"
                    placeholder="Date &amp; Time"
                    value={this.state.intDateTime }
                    onChange={e =>
                      this.setState({ intDateTime: e.currentTarget.value })
                    }
                  />

                  <h6 id="replyDateTitle">Expected Reply Date</h6>
                  <Input
                    type="date"
                    name="replyDateTime"
                    id="dateTime"
                    placeholder="Date &amp; Time"
                    value={this.state.replyDateTime}
                    onChange={e =>
                      this.setState({ replyDateTime: e.currentTarget.value })
                    }
                  />
                </Col>
                <Col xs={12} className="companyRoleDesc">
                  <h6 id="companyRoleTitle">Role Description</h6>

                  <p id="jobInfo">
                    <Scrollbars id="modalScroll" style={{ height: 110 }}>
                      {this.props.selectedJob.description}
                    </Scrollbars>
                  </p>
                </Col>
          </Row>
          </>
            )}
                  
            {this.state.selectedComponent === "Tasks" && (
              <>
               <Row className="col-sm-12 tasksRow">
                <Col xs={12} className="addTaskTitle">
                  <h6 id="vacancyTitle">Tasks</h6>
                </Col>
                <Col xs={12} className="addTaskCol">
                  <Input
                    className="addTask"
                    id="addTask"
                    placeholder="+ Add Task"
                    value={this.state.task}
                    onChange={e =>
                      this.setState({ task: e.currentTarget.value })
                    }
                  />
                </Col>
                </Row>
               
              </>
            )}
             {/* <input type="submit" value="Submit" /> */}
             {/* <button type="submit" onClick={(this.handleApplication)}>submit</button> */}
        </Container>
      </Modal>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentModal);
