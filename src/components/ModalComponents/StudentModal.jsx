import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Input, Row, Col } from "reactstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Scrollbars } from "react-custom-scrollbars";
import StatusUpdateModal from "./StatusUpdateModal";
import { addJobApp } from "../../Actions/jobAppFetches";
import TaskComponent from "./TaskComponent";
import NotesComponent from "./NotesComponent";
import DirectoryComponent from "./DirectoryComponent";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  addJobAppThunk: application => dispatch(addJobApp(application))
});

class StudentModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedComponent: "JobInfo",
      id: null,
      // desc: null,
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
        notes: []
      }
    };
  }

  componentDidMount = () => {
    //  let id = this.props.application._id
    //  this.setState({id: id})
    // const selectedJob = this.props.selectedJob
    // console.log(selectedJob)
    // let desc = selectedJob.description
    // desc = desc.replace(/<[^>]*>?/gm, '')

    // this.setState({
    //    desc: desc
    // })

  };

  setStatusState = newStatus => {
    console.log("hello", newStatus);
    const application = this.state.application;
    application.status = newStatus;

    console.log(application)

    this.setState({
      application: application
    });
    // console.log(application)
  };

  onChange = e => {
    console.log("onChangeMethod");
    const application = this.state.application;
    application[e.currentTarget.name] = e.currentTarget.value;
    // if (e.currentTarget.name === "statusDateTime") {
    //   application.statusDateTime = e.currentTarget.value;
    // } else if (e.currentTarget.name === "intDateTime") {
    //   application.intDateTime = e.currentTarget.value;
    // } else if (e.currentTarget.name === "replyDateTime") {
    //   application.replyDateTime = e.currentTarget.value;
    // } else if (e.currentTarget.value === undefined) {
    //   e.currentTarget.value = "";
    // }

    this.setState({
      application: application
    });
  };

  handleApplication = () => {
    console.log("handleapplication");
    //   if (this.state === undefined) {
    //     this.state = ""
    // }
    let application = {
      tasks: this.state.application.tasks,
      statusDateTime: this.state.application.statusDateTime,
      intDateTime: this.state.application.intDateTime,
      replyDateTime: this.state.application.replyDateTime,
      status: this.state.application.status,
      notes: this.state.application.notes,
      companyName: this.props.selectedJob.company,
      companyLogo: this.props.selectedJob.company_logo,
      roleTitle: this.props.selectedJob.title,
      location: this.props.selectedJob.location,
      description: this.props.selectedJob.description
    };

    this.setState({ application: application });

    this.props.addJobAppThunk(application);
  };

  addTask = newTask => {
    const application = this.state.application;
    application.tasks = [...application.tasks, newTask];
    this.setState({ application: application });
    // this.setState({ task: "" })
    // if (this.state.application._id) {
    //   // execute the PUT
    // } else {
    //   // execute the post and save the _id
    // }
  };

  addNotes = newNote => {
    console.log(newNote);
    const application = this.state.application;
    application.notes = [...application.notes, newNote];
    this.setState({ application: application });
  };

  deleteTask = deleteTask => {
    const application = this.state.application;
    const taskArray = application.tasks;
    var index = taskArray.indexOf(deleteTask);
    if (index !== -1) {
      taskArray.splice(index, 1);
      this.setState({ taskArray: taskArray });
    }
  };

  deleteNotes = deleteNotes => {
    const application = this.state.application;
    const taskArray = application.notes;
    var index = taskArray.indexOf(deleteNotes);
    if (index !== -1) {
      taskArray.splice(index, 1);
      this.setState({ taskArray: taskArray });
    }
  };

  selectComponent = component => {
    this.setState({ selectedComponent: component });
  };

  toggleStatusModal = () => { this.setState({ showModal: false})}

  resetState = () => {   
    this.setState({
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
        notes: []
      }
    });
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
                if (this.state.application.status) this.handleApplication();
                this.resetState()
                this.props.toggleModal();
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
              toggleModal={this.toggleStatusModal}
              handleStatus={newStatus => this.setStatusState(newStatus)}
              // handleStatus={newStatus => this.setState({ status: newStatus })}
            />
          </Row>
        </Container>

        <Container>
          <Row className="modalOptionsRect">
            <Row className="modalOptions">
              <Col xs={12} className="sideOptions first">
                <a
                  href="#"
                  onClick={() => {
                    this.selectComponent("JobInfo");
                  }}
                >
                  JOB INFO
                </a>
              </Col>
              <Col xs={12} className="sideOptions">
                <a
                  href="#"
                  onClick={() => {
                    this.selectComponent("Tasks");
                  }}
                >
                  TASKS
                </a>
              </Col>
              <Col xs={12} className="sideOptions">
                <a
                  href="#"
                  onClick={() => {
                    this.selectComponent("Notes");
                  }}
                >
                  NOTES
                </a>
              </Col>
              <Col xs={12} className="sideOptions more">
                <a
                  href="#"
                  onClick={() => {
                    this.selectComponent("Directory");
                  }}
                >
                  MORE VACANCIES
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
                    value={this.state.application.statusDateTime}
                    onChange={e => this.onChange(e)}
                    /* onChange={e =>
                      this.setState({ statusDateTime: e.currentTarget.value  || "" })
                    } */
                  />

                  <h6 id="interviewDateTitle">Interview Date</h6>
                  <Input
                    type="date"
                    name="intDateTime"
                    id="dateTime"
                    placeholder="Date &amp; Time"
                    value={this.state.application.intDateTime}
                    onChange={e => this.onChange(e)}
                    // onChange={e =>
                    //   this.setState({ intDateTime: e.currentTarget.value || "" })
                    // }
                  />

                  <h6 id="replyDateTitle">Expected Reply Date</h6>
                  <Input
                    type="date"
                    name="replyDateTime"
                    id="dateTime"
                    placeholder="Date &amp; Time"
                    value={this.state.application.replyDateTime}
                    onChange={e => this.onChange(e)}
                    // onChange={e =>
                    //   this.setState({ replyDateTime: e.currentTarget.value || "" })
                    // }
                  />
                </Col>
                <Col xs={12} className="companyRoleDesc">
                  <h6 id="companyRoleTitle">Role Description</h6>

                  <div id="jobInfo">
                    <Scrollbars id="modalScroll" style={{ height: 110 }}>
                    {this.props.selectedJob.description}
                    </Scrollbars>
                  </div>
                </Col>
              </Row>
            </>
          )}

          {this.state.selectedComponent === "Tasks" && (
            <TaskComponent
              tasks={this.state.application.tasks}
              addTask={this.addTask}
              deleteTask={this.deleteTask}
            />
          )}

          {this.state.selectedComponent === "Notes" && (
            <NotesComponent
              notes={this.state.application.notes}
              addNotes={this.addNotes}
              deleteNotes={this.deleteNotes}
            />
          )}

          {this.state.selectedComponent === "Directory" && (
            <DirectoryComponent
              companyName={this.props.selectedJob.company.replace(/ /g, "+")}
            />
          )}
        </Container>
      </Modal>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentModal);

/*addTask={this.adddTask} removeTask={this.removeTask} */
