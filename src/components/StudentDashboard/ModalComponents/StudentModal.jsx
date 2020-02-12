import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import StatusUpdateModal from "./StatusUpdateModal";
import { addJobApp, updateJobApp } from "../../../Actions/jobAppFetches";
import TaskComponent from "./TaskComponent";
import NotesComponent from "./NotesComponent";
import DirectoryComponent from "./DirectoryComponent";
import JobInfoComponent from "./JobInfoComponent";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  addJobAppThunk: application => dispatch(addJobApp(application)),
  updateJobAppThunk: (application, id) => dispatch(updateJobApp(application, id))
});

class StudentModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedComponent: "JobInfo",
      id: null,
     
    };
  }


  handleApplication = async () => {
    if (this.props.selectedJob._id){
      const id = this.props.selectedJob._id
      await this.props.updateJobAppThunk(this.props.selectedJob, id);
      this.props.updateStateMethod()
    }
    else 
      await this.props.addJobAppThunk(this.props.selectedJob);
  };


  selectComponent = component => {
    this.setState({ selectedComponent: component });
  };

  toggleStatusModal = () => { this.setState({ showModal: false})}

  render() {
    const {selectedJob, updateSelectedJob } = this.props;

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
              onClick={async () => {
                if (selectedJob.status) await this.handleApplication();
                // this.resetState()
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
                src={selectedJob.companyLogo}
                height="20px"
                alt="logo"
              />
            </Col>
            <Col sm="9" id="titleCol">
              <h3 id="title">{selectedJob.companyName}</h3>
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
              handleStatus={newStatus => updateSelectedJob({ status: newStatus})}
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
             <JobInfoComponent
             selectedJob = {selectedJob}
             onChange = {(e) => updateSelectedJob({ [e.target.name]: e.target.value })}
            //  title = {selectedJob.roleTitle}
            //  company = {selectedJob.companyName}
           />
          )}

          {this.state.selectedComponent === "Tasks" && (
            <TaskComponent 
              tasks={selectedJob.tasks}
              addTask={(task) => updateSelectedJob({ tasks: selectedJob.tasks ? selectedJob.tasks.concat(task) : [task]}) }
              deleteTask={(task) => updateSelectedJob({ tasks: selectedJob.tasks.filter(x => x !== task)})}
            />
          )}

          {this.state.selectedComponent === "Notes" && (
            <NotesComponent
              notes={selectedJob.notes}
              addNotes={(note) => updateSelectedJob({ notes: selectedJob.notes ? selectedJob.notes.concat(note) : [note]}) }
              deleteNotes={(note) => updateSelectedJob({ notes: selectedJob.notes.filter(x => x !== note)})}
              //TODO: editNotes={this.editNotes}
            />
          )}

          {this.state.selectedComponent === "Directory" &&  
           <DirectoryComponent
              companyName={this.props.selectedJob.company.replace(/ /g, "+")}
              selectedJob = {this.props.selectedJob}
            />
          }
        </Container>
      </Modal>
        
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentModal);

/*addTask={this.adddTask} removeTask={this.removeTask} */