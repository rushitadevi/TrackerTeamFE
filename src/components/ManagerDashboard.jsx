import React from 'react';
import NavBar from "./Navbar";
//import diagrampicture1 from './Img/diagrampicture1.png'
import diagrampicture2 from './Img/diagrampicture2.png'

class ManagerDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            applications: [],
            students: [],
            newStudet:[],
            weekapps: null,
            appCount:0
        }
    }

    componentDidMount = async () => {
        try {
            var res = await fetch("http://localhost:4000/application/app", {
                method: "GET",
                // headers: {
                //     "Authorization": "Bearer " + localStorage.token
                // },
            })
            if (res.ok) {
                var applications = await res.json();
                this.setState({
                    applications: applications
                })
            }
            // }
        } catch (err) {
            console.log(err)
        }

        try {
            res = await fetch("http://localhost:4000/user/", {
                method: "GET",
                // headers: {
                //     "Authorization": "Bearer " + localStorage.token
                // },
            })
            if (res.ok) {
                var student = await res.json();
                var students = student
                this.setState({
                    students: students
                })
                //   console.log(this.state.students,"st")
            }
        } catch (err) {
            console.log(err)
        }

        try {
            res = await fetch("http://localhost:4000/application/AppsWeek", {
                method: "GET",
                // headers: {
                //     "Authorization": "Bearer " + localStorage.token
                // },
            })
            if (res.ok) {
                var weekApps = await res.json();
                weekApps = weekApps.lastWeek
                this.setState({
                    weekapps: weekApps
                })
            }
        } catch (err) {
            console.log(err)
        }

        try {
            res = await fetch("http://localhost:4000/application/totApp", {
                method: "GET",
                // headers: {
                //     "Authorization": "Bearer " + localStorage.token
                // },
            })
            if (res.ok) {
                var appCount = await res.json();
                appCount = appCount.totApp
                this.setState({
                    appCount:appCount
                })
            }
        } catch (err) {
            console.log(err)
        }
    }

    getName = (id) => {
        var arr = this.state.students
        if (arr !== undefined) {
            var student = []
            student = arr.find(a => a._id === id);
            return student !== undefined && student.name !== undefined
                ? student.name
                : "";
        }
    }

    updateStatus = async (state,value) => {
        try {                  
           var selectElement = document.getElementById("ddlVal")[1];
          value=selectElement.value  
          var arr=[]
          var results=[]
          arr.push(state)  
          for(var i=0; i<arr.length; i++) {
            if(arr[i].status === "Pending"){
                arr[i].status=value
              results.push(arr[i])
            }
          }
            var res = await fetch("http://localhost:4000/user/"+ results[0]._id, {
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
        return (
            <div className="container-fluid" style={{ backgroundColor: "#F5F9FC", paddingLeft: "0px", paddingRight: "0px" }} >
                <div>
                    <NavBar />
                </div>
                <div className="row p-3">
                    <div className="col-md-8">
                        <div className="container" style={{ borderRight: "1px solid #dee2e6", borderBottom: "1px solid #dee2e6" }}>
                            <div className="row table-wrapper-scroll-y my-manager-scrollbar">
                                <table className="table table-hover" id="tblData">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Surname</th>
                                            <th>Email</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    {this.state.students && this.state.students.map((st) => (
                                        <tbody>
                                            <tr>
                                                {st.name !== "" && st.status==='Pending' ?
                                                    <>
                                                        <td>{st.name}</td>
                                                        <td>{st.surname}</td>
                                                        <td>{st.email}</td>
                                                        <td ><select id="ddlVal">
                                                            <option value="Pending">Pending</option>
                                                            <option value="Accept">Accept</option>
                                                            <option value="Reject">Reject</option>
                                                        </select></td>
                                                        <button type="button" className="btn btn-warning btn-sm m-0" id="btnUpdate"
                                                            onClick={()=>this.updateStatus(st)}  >Update Status</button>
                                                    </>
                                                    : null}
                                            </tr>
                                        </tbody>
                                    ))}
                                </table>
                            </div>
                            <div className="row py-3" style={{ border: "1px solid #dee2e6", marginTop: "10px" }} >
                                <div className="col-md-4">
                                TOTAL APPLICATIONS THIS WEEK :<b>{this.state.weekapps}</b><br></br>
                                TOTAL APPLICATIONS :<b>{this.state.appCount}</b>
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
                        {this.state.applications && this.state.applications.map((app) => (
                            <div >
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

export default ManagerDashboard;
