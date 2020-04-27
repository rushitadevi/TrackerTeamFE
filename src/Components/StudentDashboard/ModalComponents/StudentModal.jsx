import React, { Component } from "react";
import { connect } from "react-redux";
import {Modal} from "react-bootstrap";
import StatusUpdateModal from "./StatusUpdateModal";
import { addJobApp, updateJobApp } from "../../../Actions/jobAppFetches";
import TaskComponent from "./TaskComponent";
import NotesComponent from "./NotesComponent";
import DirectoryComponent from "./DirectoryComponent";
import JobInfoComponent from "./JobInfoComponent";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  addJobAppThunk: (application) => dispatch(addJobApp(application)),
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
    if (this.props.selectedJob._id) {
      const id = this.props.selectedJob._id
      await this.props.updateJobAppThunk(this.props.selectedJob, id);
      this.props.updateStateMethod()
    }
    else
      await this.props.addJobAppThunk(this.props.selectedJob);
  // }
  };

  selectComponent = component => {
    this.setState({ selectedComponent: component });
  };



  toggleStatusModal = () => { this.setState({ showModal: false }) }

  render() {
    const { selectedJob, updateSelectedJob } = this.props;
    return (
      <Modal
        show={this.props.showModal}
        id="statusModal"
        aria-labelledby="contained-modal-title-vcenter"
      >
        <div id="modalHeader">
          <div className="xButtonRow" >
            <div
              className="xButton"
              onClick={async () => {

                if (selectedJob.status) await this.handleApplication();
                // this.resetState()
                this.props.toggleModal();
              }}
            >
              X
            </div>
          </div>
          <div id="modalTitleRow">
            <div id="logoTitle">
            <div id="colModalLogo">
           {selectedJob.companyLogo 
              ? <img
                            className="modalLogo"
                            src={selectedJob.companyLogo}
                            alt="logo"
                          />

                          :<img
                          className="modalLogo"
                          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.fusenet.eu%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Flarge%2Fpublic%2Fdefault_images%2Flogo_placeholder_0.png%3Fitok%3DDwPivBp_&f=1&nofb=1"
                          alt="logo"
                        />
           }
            </div>
            <div id="colTitle">
              <h1 id="title">{selectedJob.companyName}</h1>
            </div>
            </div>
            <div id="colUpdateButton">
            <div
              className="appButtons"
              id="updateButton"
              onClick={() => this.setState({ showModal: true })}
            >
              Update Status
            </div>
            </div >
            <StatusUpdateModal
              showModal={this.state.showModal}
              toggleModal={this.toggleStatusModal}
              handleStatus={newStatus => updateSelectedJob({ status: newStatus })}
            />
          </div>
        </div>

        {/* <Row className="modalOptionsRect"> */}
        <div id="jobInfoScreens">

          <div className="colJobInfoOne" >
              <div
              className="colSideMenu"
                href="#"
                onClick={() => {
                  this.selectComponent("JobInfo");
                }}
              >
                JOB INFO
            </div>

     
              <div 
               className="colSideMenu" 
                href="#"
                onClick={() => {
                  this.selectComponent("Tasks");
                }}
              >
                TASKS
                </div>
    
              
              <div
              className="colSideMenu"
                onClick={() => {
                  this.selectComponent("Notes");
                }}
              >
                NOTES
                </div>

            <div >

              <div
               className="colSideMenu" 
                onClick={() => {
                  this.selectComponent("Directory");
                }}
              >
                MORE VACANCIES
                </div>

            </div>
          </div>


          {/* </Row> */}


          <div className="colJobInfoTwo">

            {/* <Container className="companyInfoCont"> */}
            {this.state.selectedComponent === "JobInfo" && (
              <JobInfoComponent
                selectedJob={selectedJob}
                onChange={(e) => updateSelectedJob({ [e.target.name]: e.target.value })}
                status={this.props.selectedJob.status ? this.props.selectedJob.status : "New"}

              />
            )}

            {this.state.selectedComponent === "Tasks" && (
              <TaskComponent
                tasks={selectedJob.tasks}
                addTask={(task) => updateSelectedJob({ tasks: selectedJob.tasks ? selectedJob.tasks.concat(task) : [task] })}
                deleteTask={(task) => updateSelectedJob({ tasks: selectedJob.tasks.filter(x => x !== task) })}
              />
            )}

            {this.state.selectedComponent === "Notes" && (
              <NotesComponent
                notes={selectedJob.notes}
                addNotes={(note) => updateSelectedJob({ notes: selectedJob.notes ? selectedJob.notes.concat(note) : [note] })}
                deleteNotes={(note) => updateSelectedJob({ notes: selectedJob.notes.filter(x => x !== note) })}
              //TODO: editNotes={this.editNotes}
              />
            )}

            {this.state.selectedComponent === "Directory" &&
              <DirectoryComponent
                companyName={selectedJob.companyName.replace(/ /g, "+")}
              // companyName={this.props.selectedJob.company.replace(/ /g, "+")}
              // selectedJob = {this.props.selectedJob}
              />
            }

          </div>

        </div>
      </Modal>

    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentModal);

/*addTask={this.adddTask} removeTask={this.removeTask} */