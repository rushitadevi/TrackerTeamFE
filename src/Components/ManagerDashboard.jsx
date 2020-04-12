import React from "react";
import diagrampicture2 from "./Img/graph.png";
import {
  getApplications,
  getStudents,
  totAppsWeek,
  totApps,
  updateStudentStatus,
  sendEmailToStudent
} from "../Actions/manager.js";
import { connect } from "react-redux";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import Navbar from "./Navbar";

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  getApplicationThunk: () => dispatch(getApplications()),
  fetchStudents: () => dispatch(getStudents()),
  totAppsWeekThunk: () => dispatch(totAppsWeek()),
  totAppsThunk: () => dispatch(totApps()),
  updateStudentStatusThunk: student => dispatch(updateStudentStatus(student)),
  sendEmailToStudentThunk: email => dispatch(sendEmailToStudent(email))
});

class ManagerDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newStudet: [],
      weekapps: null,
      appCount: 0
    };
  }

  componentDidMount = async () => {
    this.props.getApplicationThunk();
    this.props.fetchStudents();
    this.props.totAppsWeekThunk();
    this.props.totAppsThunk();
  };

  componentDidUpdate=async()=>{
    this.props.fetchStudents();
  }

  getName = id => {
    var arr = this.props.students.students;

    if (arr !== undefined) {
      var student = [];
      student = arr.find(a => a._id === id);
      if (student !== undefined)
        return student !== undefined && student.name !== undefined
          ? student.name
          : "";
    }
  };

  updateStatus = async (state, value) => {
    try {
      var selectElement = document.getElementById("ddlVal")[1];
      value = selectElement.value;
      var arr = [];
      var results = [];
      arr.push(state);
      for (var i = 0; i < arr.length; i++) {
        if (arr[i].userStatus === "Pending") {
          arr[i].userStatus = value;
          results.push(arr[i]);
        }
      }
      this.props.updateStudentStatusThunk(results[0]);
      this.props.fetchStudents();
      // const toSend = { Email: state.email };
      // this.props.sendEmailToStudentThunk(toSend);
    } catch (err) {
      console.log(err);
    }
  };

  onClickHandler = async () => {
    let resp = await fetch(
      process.env.REACT_APP_URL + "application/downloadPdf",
      {
        method: "GET"
        //   headers: {
        //     "Authorization": "Bearer " + localStorage.token
        //   },
      }
    );

    const blob = await resp.blob();
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", `export.pdf`);
    // 3. Append to html page
    document.body.appendChild(link);
    // 4. Force download
    link.click();
    // 5. Clean up and remove the link
    link.parentNode.removeChild(link);

    //https://medium.com/yellowcode/download-api-files-with-react-fetch-393e4dae0d9e
  };

  render() {
    return (
      <>
        {/* <Navbar margin="none" /> */}
        <div
          className="container-fluid"
          style={{
            backgroundColor: "#F5F9FC",
            paddingLeft: "0px",
            paddingRight: "0px"
          }}
        >
          <div></div>
          <div className="row p-3">
            <div className="col-md-8">
              <div
                className="container"
                style={{
                  border: "1px solid #dee2e6",
                  borderRadius:"20px"
                }}
              >
                <div
                  className="row py-3"
                  style={{ border: "1px solid #dee2e6",borderRadius: "20px" }}
                >
                  <div className="col" style={{ textAlign: "center" }}>
                    <img
                      src={diagrampicture2}
                      width="50%"
                      className="diagrampicture"
                      alt="diagrampicture"
                      height="248px"
                    />
                     <button
                      className="btn"
                      id="buttonExport"
                      onClick={this.onClickHandler}
                    >
                      EXPORT
                  </button>
                    <div className="row">
                      <div className="col">
                        <b>NO OF JOBS APPLIED FOR THIS WEEK :
                          {this.props.manager.weekapps}</b>
                      </div>
                      <div className="col">
                        <b>TOTAL APPLICATIONS :{this.props.manager.appCount}</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row table-wrapper-scroll-y my-manager-scrollbar">
                  <Table responsive className="table table-hover" id="tblData">
                    <Thead>
                      <Tr>
                        <Th>Name</Th>
                        <Th>Surname</Th>
                        <Th>Email</Th>
                        <Th>Status</Th>
                      </Tr>
                    </Thead>
                    {this.props.manager.students &&
                      this.props.manager.students.map((st, id) => (
                        <Tbody key={id}>
                          <Tr>
                            {st.name !== "" && st.userStatus === "Pending" ? (
                              <>
                                <Td>{st.name}</Td>
                                <Td>{st.surname}</Td>
                                <Td>{st.email}</Td>
                                <Td>
                                  <select id="ddlVal">
                                    <option value="Pending">Pending</option>
                                    <option value="Accept">Accept</option>
                                    <option value="Reject">Reject</option>
                                  </select>
                                </Td>
                                <button
                                  type="button"
                                  className="btn btn-warning btn-sm m-0"
                                  id="btnUpdate"
                                  onClick={() => this.updateStatus(st)}
                                >
                                  Update Status
                                </button>
                              </>
                            ) : null}
                          </Tr>
                        </Tbody>
                      ))}
                  </Table>
                </div>
              </div>
            </div>
            <div className="col-md-4 topColumn recentScroll">
              <div
                className="row"
                style={{
                  fontWeight: "bolder",
                  fontSize: "24px",
                  borderBottom: "1px solid #dee2e6"
                }}
              >
                RECENT ACTIVITIES
              </div>
              <br />
              {this.props.students.applications &&
                this.props.students.applications.map((app, id) => (
                  <div key={id}>
                    {this.getName(app.studentId) !== "" ? (
                      <div>
                        {app.status === "offer" ? (
                          <div className="alert alert-danger " role="alert">
                            {" "}
                            <b>{this.getName(app.studentId)} -</b> {app.status}{" "}
                            <b>- {app.companyName}</b>
                          </div>
                        ) : (
                            <div className="alert alert-info " role="alert">
                              {" "}
                              <b>{this.getName(app.studentId)} -</b> {app.status}{" "}
                              <b>- {app.companyName} </b>
                            </div>
                          )}
                      </div>
                    ) : null}
                  </div>
                ))}
            </div>
          </div>
          {/* <footer className="py-5 bg-dark"></footer> */}
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagerDashboard);
