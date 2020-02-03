import React from 'react';
import NavBar from "./Navbar";
//import diagrampicture1 from './Img/diagrampicture1.png'
import diagrampicture2 from './Img/diagrampicture2.png'
import { getApplications, getStudents, totAppsWeek, totApps } from "../Actions/manager.js"
import { connect } from "react-redux";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
//import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

const mapStateToProps = state => {
    return state;
};

const mapDispatchToProps = dispatch => ({
    getApplicationThunk: () => dispatch(getApplications()),
    fetchStudents: () => dispatch(getStudents()),
    totAppsWeekThunk: () => dispatch(totAppsWeek()),
    totAppsThunk: () => dispatch(totApps())
});

class ManagerDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            applications: [],
            students: [],
            newStudet: [],
            weekapps: null,
            appCount: 0
        }
    }

    componentDidMount = async () => {
        this.props.getApplicationThunk();
        this.props.fetchStudents();
        this.props.totAppsWeekThunk();
        //this.props.totAppsThunk();        
    }

    getName = (id) => {
        var arr = this.props.students.students
        
        if (arr !== undefined) {
            var student = []
            student = arr.find(a => a._id === id);
            if(student!==undefined)
            console.log(student.name,"stid")
            return student !== undefined && student.name !== undefined
                ? student.name
                : "";
        }
    }

    updateStatus = async (state, value) => {
        try {
            var selectElement = document.getElementById("ddlVal")[1];
            value = selectElement.value
            var arr = []
            var results = []
            arr.push(state)
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].status === "Pending") {
                    arr[i].status = value
                    results.push(arr[i])
                }
            }

            console.log(state.email)
            const toSend = { Email: state.email };
            console.log(toSend, "se")
            var res = await fetch("http://localhost:4000/user", {
                method: "POST",
                body: JSON.stringify(toSend),
                headers: {
                    //"Authorization": "Bearer " + localStorage.token,
                    "Content-Type": "application/json"
                }
            })
            if (res.ok) {
                await res.json();
                console.log("success")
            }


            res = await fetch("http://localhost:4000/user/" + results[0]._id, {
                method: "PUT",
                body: JSON.stringify(results[0]),
                headers: {
                    //"Authorization": "Bearer " + localStorage.token,
                    "Content-Type": "application/json"
                }
            })
            if (res.ok) {
                await res.json();
            }

        } catch (err) {
            console.log(err)
        }
    }

    onClickHandler = async () => {
        let resp = await fetch('http://localhost:4000/application/downloadPdf', {
            method: "GET",
            //   headers: {
            //     "Authorization": "Bearer " + localStorage.token
            //   },
        })

        const blob = await resp.blob()
        const url = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', `export.pdf`);
        // 3. Append to html page
        document.body.appendChild(link);
        // 4. Force download
        link.click();
        // 5. Clean up and remove the link
        link.parentNode.removeChild(link);

        //https://medium.com/yellowcode/download-api-files-with-react-fetch-393e4dae0d9e
    }

    render() {
        console.log(this.props,"pp")
        return (
            <div className="container-fluid" style={{ backgroundColor: "#F5F9FC", paddingLeft: "0px", paddingRight: "0px" }} >
                <div>
                    <NavBar />
                </div>
                <div className="row p-3">
                    <div className="col-md-8">
                        <div className="container" style={{ borderRight: "1px solid #dee2e6", borderBottom: "1px solid #dee2e6" }}>
                            <div className="row table-wrapper-scroll-y my-manager-scrollbar">
                                <Table responsive className="table table-hover" id="tblData" >
                                    <Thead>
                                        <Tr>
                                            <Th>Name</Th>
                                            <Th>Surname</Th>
                                            <Th>Email</Th>
                                            <Th>Status</Th>
                                        </Tr>
                                    </Thead>
                                    {this.props.students.students && this.props.students.students.map((st, id) => (
                                        <Tbody key={id} >
                                            <Tr>
                                                {st.name !== "" && st.status === 'Pending' ?
                                                    <>
                                                        <Td>{st.name}</Td>
                                                        <Td>{st.surname}</Td>
                                                        <Td>{st.email}</Td>
                                                        <Td ><select id="ddlVal">
                                                            <option value="Pending">Pending</option>
                                                            <option value="Accept">Accept</option>
                                                            <option value="Reject">Reject</option>
                                                        </select></Td>
                                                        <button type="button" className="btn btn-warning btn-sm m-0" id="btnUpdate"
                                                            onClick={() => this.updateStatus(st)}  >Update Status</button>
                                                    </>
                                                    : null}
                                            </Tr>
                                        </Tbody>
                                    ))}
                                </Table>
                            </div>
                            <div className="row py-3" style={{ border: "1px solid #dee2e6", marginTop: "10px" }} >
                                <div className="col-md-4">
                                    TOTAL APPLICATIONS THIS WEEK :<b></b><br></br>
                                    TOTAL APPLICATIONS :<b></b>
                                </div>
                                <img
                                    src={diagrampicture2}
                                    width="50%"
                                    className="diagrampicture"
                                    alt="diagrampicture"
                                />
                                <button className="btn" id="buttonExport" onClick={this.onClickHandler}>EXPORT</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 topColumn recentScroll">
                        <div className="row" style={{ fontWeight: "bolder", fontSize: "24px", borderBottom: "1px solid #dee2e6" }}>RECENT ACTIVITIES
                        </div>
                        <br />
                        {this.props.applications.applications && this.props.applications.applications.map((app, id) => (
                            <div key={id} >
                                {this.getName(app.studentId) !== "" ?
                                    <div >
                                        {app.status === "offer" ?
                                            <div className="alert alert-danger " role="alert"> <b>{this.getName(app.studentId)}  -</b>  {app.status}  <b>- {app.companyName}</b></div>
                                            : <div className="alert alert-info " role="alert"> <b>{this.getName(app.studentId)}  -</b>  {app.status}  <b>- {app.companyName} </b></div>
                                        }
                                    </div>
                                    :
                                   null
                                }
                            </div>
                        )
                        )}
                    </div>
                </div>
                <footer className="py-5 bg-dark">
                </footer>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ManagerDashboard);
