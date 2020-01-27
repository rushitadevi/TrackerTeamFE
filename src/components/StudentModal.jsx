import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Input, Row, Col } from "reactstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Scrollbars } from "react-custom-scrollbars";
import StatusUpdateModal from "./StatusUpdateModal";
import { addJobApp } from "../Actions/jobAppFetches";
import TaskComponent from "./TaskComponent";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  addJobAppThunk: application => dispatch(addJobApp(application)),

});

class StudentModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedComponent: "JobInfo",
      id: null,
      application: {
        tasks: [],
        statusDateTime: undefined,
        intDateTime: undefined,
        replyDateTime: undefined,
        status: undefined,
        companyName: undefined,
        companyLogo: undefined,
        roleTitle: undefined,
        location: undefined,
        description: undefined,
      }
    };
  }

  componentDidMount= () => {
  //  let id = this.props.application._id
  //  this.setState({id: id})
  }

  handleApplication = () => {
    let application = {
      tasks: this.state.application.tasks,
      statusDateTime: this.state.statusDateTime,
      intDateTime: this.state.intDateTime,
      replyDateTime: this.state.replyDateTime,
      status: this.state.status,
      companyName: this.props.selectedJob.company,
      companyLogo: this.props.selectedJob.company_logo,
      roleTitle: this.props.selectedJob.title,
      location: this.props.selectedJob.location,
      description: this.props.selectedJob.description,
    };

    console.log(application);
    this.setState({ application: application });
    this.props.addJobAppThunk(application);
  };

  addTask = (newTask) => {
    const application = this.state.application
    application.tasks = [...application.tasks, newTask]
    this.setState({application: application})
    // if (this.state.application._id) {
    //   // execute the PUT
    // } else {
    //   // execute the post and save the _id
    // }
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
      >
        <Container id="modalHeader">
          <Row id="xButtonRow" className="col-sm-12">
            <Button
              id="xButton"
              onClick={() => {
                this.props.toggleModal();
                {
                  this.state.application && (this.handleApplication());
                }
                // onSubmit={() => this.handleApplication}
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

            <Button
              className="updateButton"
              onClick={() => this.setState({ showModal: true })}
            >
              UPDATE STATUS
            </Button>
            <StatusUpdateModal
              showModal={this.state.showModal}
              toggleModal={this.toggleModal}
              handleStatus={newStatus => this.setState({ status: newStatus })}
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
                    onChange={e =>
                      this.setState({ statusDateTime: e.currentTarget.value })
                    }
                  />

                  <h6 id="interviewDateTitle">Interview Date</h6>
                  <Input
                    type="date"
                    name="intDateTime"
                    id="dateTime"
                    placeholder="Date &amp; Time"
                    value={this.state.intDateTime}
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
            <TaskComponent tasks={this.state.application.tasks} addTask={this.addTask} />
          )}
   
        </Container>
      </Modal>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentModal);

/*addTask={this.adddTask} removeTask={this.removeTask} */
