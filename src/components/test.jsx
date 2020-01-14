 // <>
      //         <div className="row">
      //             <div className="col-md-12">
      //                 <div className="row">
      //                 </div>
      //                 <div className="row">
      //                     <div className="container" >
      //                         <div className="row" style={{ height: "350px", paddingTop: "30px" }} >
      //                             <div className="container" style={{
      //                                 width: "1294px", backgroundColor: "white",
      //                                 border: "1px solid #CCC",
      //                                 boxShadow: "0 1px 5px #CCC"
      //                             }}>
      //                                 <label className="lblTracker"  >Tracker</label>
      //                                 <hr style={{ border: "0.5px solid #EAEEF6" }} ></hr>
      //                                 <div className="row">
      //                                     <div className="col" style={{ paddingLeft: "40px", height: "35px" }}>
      //                                         <input type="text" placeholder="Search Company" />
      //                                     </div>
      //                                     <div className="col"  >
      //                                         <select className="form-control" id="sel1" style={{ border: "#2188e2 1px solid", width: "150px" }}>
      //                                             <option>Job Category</option>
      //                                             <option>Front-End</option>
      //                                             <option>Back-End</option>
      //                                             <option>Product Management</option>
      //                                         </select>
      //                                     </div>
      //                                     <div className="col" >
      //                                         <select className="form-control" id="sel1" style={{ border: "#2188e2 1px solid", width: "150px" }}>
      //                                             <option>Contract Type</option>
      //                                             <option>Full Time</option>
      //                                             <option>Part Time</option>
      //                                             <option>Remote</option>
      //                                             <option>Freelance</option>
      //                                         </select>
      //                                     </div>
      //                                     <div className="col" style={{ width: "200px" }}>
      //                                         <select className="form-control" id="sel1" style={{ border: "#2188e2 1px solid", width: "150px" }}>
      //                                             <option>Location</option>
      //                                             <option>Berlin</option>
      //                                             <option>Milan</option>
      //                                             <option>Warsaw</option>
      //                                         </select>
      //                                     </div>
      //                                     <div className="col" >
      //                                         {/* <Button id="buttonSearch" data-toggle="collapse" data-target="#demo" variant="outline-secondary">Search</Button> */}
      //                                         <button type="button" className="btn btn-info" data-toggle="collapse" data-target="#demo"  >Search</button>
      //                                     </div>
      //                                 </div>
      //                                 <div className="row">
      //                                     <div id="demo" className="collapse" style={{ marginLeft: "40px", margin: "40px" }}>
      //                                         <div className="row table-wrapper-scroll-y my-custom-scrollbar">
      //                                             <table className="table table-hover">
      //                                                 <thead>
      //                                                     <tr>
      //                                                         <th>Company</th>
      //                                                         <th>Role</th>
      //                                                         <th>Location</th>
      //                                                         <th>Description</th>
      //                                                     </tr>
      //                                                 </thead>
      //                                                 <tbody>
      //                                                     <tr>
      //                                                         <td>John</td>
      //                                                         <td>Doe</td>
      //                                                         <td>john@example.com</td>
      //                                                         <td >hello</td>
      //                                                         <button type="button" className="btn btn-warning btn-sm m-0" id="btnDetails" onClick={() => this.setState({ showModal: true })} >Details</button>
      //                                                     </tr>
      //                                                     <tr>
      //                                                         <td>John</td>
      //                                                         <td>Doe</td>
      //                                                         <td>john@example.com</td>
      //                                                         <td>hello</td>
      //                                                         <button type="button" className="btn btn-warning btn-sm m-0" id="btnDetails" onClick={() => this.setState({ showModal: true })} >Details</button>
      //                                                     </tr>
      //                                                     <tr>
      //                                                         <td>John</td>
      //                                                         <td>Doe</td>
      //                                                         <td>john@example.com</td>
      //                                                         <td>hello</td>
      //                                                         <button type="button" className="btn btn-warning btn-sm m-0" id="btnDetails" onClick={() => this.setState({ showModal: true })} >Details</button>
      //                                                     </tr>
      //                                                     <tr>
      //                                                         <td>John</td>
      //                                                         <td>Doe</td>
      //                                                         <td>john@example.com</td>
      //                                                         <td>hello</td>
      //                                                         <button type="button" className="btn btn-warning btn-sm m-0" id="btnDetails" onClick={() => this.setState({ showModal: true })} >Details</button>
      //                                                     </tr>
      //                                                 </tbody>
      //                                             </table>

      //                                         </div>
      //                                     </div>
      //                                 </div>
      //                             </div>
      //                         </div>
      //                         <div className="row" style={{ height: "350px", paddingTop: "30px", }}>
      //                             <div className="container" style={{
      //                                 width: "1294px", backgroundColor: "#FCFFFF", border: "1px solid #CCC",
      //                                 boxShadow: "0 1px 5px #CCC", paddingLeft: "60px", paddingTop: "30px"
      //                             }} >
      //                                 <div className="row" >
      //                                     <div className="col-md-4">
      //                                         <ul className="list-group scroll">
      //                                             <li className="list-group-item active">ACTIVE APPLICATIONS</li>
      //                                             {this.state.newApp && this.state.newApp.map((app, id) => (
      //                                                 <li key={id} className="list-group-item ">{app.companyName}({app.roleTitle})</li>
      //                                             ))}
      //                                         </ul>
      //                                     </div>
      //                                     <div className="col-md-4">
      //                                         <ul className="list-group scroll">
      //                                             <li className="list-group-item active">WISHLIST</li>
      //                                             {this.state.wishList && this.state.wishList.map((app, id) => (
      //                                                 <li className="list-group-item">{app.companyName}({app.roleTitle})</li>
      //                                             ))}
      //                                         </ul>
      //                                     </div>
      //                                     <div className="col-md-4">
      //                                         <ul className="list-group scroll">
      //                                             <li className="list-group-item active">INTERVIEW APPLICATIONS</li>
      //                                             {this.state.interview && this.state.interview.map((app, id) => (
      //                                                 <li className="list-group-item">{app.companyName}({app.roleTitle})</li>
      //                                             ))}
      //                                         </ul>
      //                                     </div>
      //                                 </div>
      //                             </div>
      //                         </div>
      //                     </div>
      //                 </div>
      //             </div>
      //         </div>
      //         </>

      // <Modal show={this.state.showModal} onHide={this.toggleModal}>
      //     <Modal.Header style={{ backgroundColor: "#2867B2" }} closeButton>
      //         <Modal.Title></Modal.Title>
      //     </Modal.Header>
      //     <Modal.Body>
      //         <div className="row" style={{ height: "30px" }} >
      //           company name
      // </div>
      // <hr></hr>
      //         <div className="row">
      //             <div className="col-md-4" style={{borderRight:"solid 1px lightgrey",}}>
      //                 <button id="btnJobInfo" style={{border:"0px", background:"transparent" }}>Job Info</button><br></br>
      //                 <button style={{border:"0px", background:"transparent" }}>Tasks</button><br></br>
      //                 <button style={{border:"0px", background:"transparent" }}>Notes</button><br></br>
      //                 <button style={{border:"0px", background:"transparent" }}>Company</button><br></br>
      //                 <button style={{border:"0px", background:"transparent" }}>Directory</button><br></br>
      //              </div>
      //             <div className="col-md-8">
      //                 <InputGroup className="mb-3">
      //                     <FormControl
      //                         placeholder="school name"
      //                         aria-label="schoolName"
      //                         id="name"
      //                     //defaultValue={this.props.schools.schools.name}
      //                     />
      //                 </InputGroup>
      //                 <InputGroup className="mb-3">
      //                     <FormControl
      //                         placeholder="Email"
      //                         aria-label="email"
      //                         //onChange={this.handleInput}
      //                         id="email"
      //                     //defaultValue={this.props.schools.schools.email}
      //                     />
      //                 </InputGroup>
      //                 <InputGroup className="mb-3">
      //                     <FormControl
      //                         placeholder="Address"
      //                         as="textarea" style={{ height: "100px" }}
      //                         aria-label="address"
      //                         //onChange={this.handleInput}
      //                         id="address"
      //                     //defaultValue={this.props.schools.schools.address}
      //                     />
      //                 </InputGroup>
      //             </div>
      //         </div>

      //     </Modal.Body>
      //     <Modal.Footer>
      //         <Button variant="secondary" onClick={() => this.toggleModal()}>
      //             Close
      //      </Button>
      //         <Button variant="primary" style={{ backgroundColor: "#2867B2" }}
      //             onClick={() => { this.toggleModal(); this.setState({ show: false }); }}>
      //             Update
      //    </Button>
      //     </Modal.Footer>
      // </Modal>

      // <footer className="py-5 bg-dark">
      // </footer>


      class StudentDashboard extends React.Component {
          state = {
            showModal: false,
            company: "",
            role: "",
            level: "senior",
            location: "",
        
          };
        
          componentDidMount = async () => {
        
            await this.props.getJobCategoryThunk();
            // await this.props.getEntryLevelThunk();
            console.log(this.props.publicAPIfetches.jobCategory);
          };
        
          toggleModal = () => {
            this.setState({ showModal: !this.state.showModal });
          };
        
          searchInput = async (value) => {
            value.preventDefault();
            
            console.log(value)
            var selectElement = this.state.level//document.getElementById("entryLevel")[1];
            value = selectElement.value
            var arr = []
            arr.push(value)
            // console.log(arr)
        
        
        
        
            if (this.state.location.length >= 4 || this.state.company.length >= 4 || this.state.role.length >= 4) {
              // parameter = {
              //   company: this.state.company,
              //   role: this.state.role,
              //   level: this.state.level,
              //   location: this.state.location
              // }
              await this.props.getSearchThunk(this.state);
            }
        
            // else {
            //   await this.props.getSearchThunk("");
            // }
          };
        
        
     //      render() {
     //        return (
     //          <Container fluid className="studentHomepage">
     //            <div>
     //              <NavBar />
     //            </div>
     //            <Container className="filterBar">
     //              <h5 id="logo">TrackeR</h5>
     //              <hr
     //                style={{
     //                  backgroundColor: "#fcffff",
     //                  height: 0.2,
     //                  marginTop: "93px"
     //                }}
     //              />
     //              <form>
     //                <i className="material-icons" id="searchIcon">
     //                  search
     //              </i>
     //                <Input className="searchCompany"
     //                  id="search"
     //                  placeholder="Company"
        
     //                  value={this.state.company || ''}
     //                  onChange={(e) => this.setState({ company: e.currentTarget.value })} />
        
     //                <i className="material-icons" id="roleIcon">
     //                  work_outline
     //              </i>
     //                <Input id="jobRole"
     //                  placeholder="Role"
     //                  value={this.state.role || ''}
     //                  onChange={(e) => this.setState({ role: e.currentTarget.value })} />
        
     //                {/* <select className="form-control" id="jobCategory">
     //                        <option selected="selected"> Job Category </option>
                           
     //                              {this.props.publicAPIfetches.jobCategory && this.props.publicAPIfetches.jobCategory.map((job, index) => (                                         
     //                                <option key={index}>{job.name.replace("&amp;", "&")}</option>
     //                            )
     //                            )}
     //                        </select> */}
        
     //                <i className="material-icons" id="entryLevelIcon">
     //                  file_copy
     //              </i>
     //                {/* <form className="form-control"> */}
     //                {/* <select id="entryLevel" name="role" onChange={e => this.searchInput(e)} > */}
     //                <select className="form-control" id="entryLevel" value={this.state.level} onChange={(val) => this.setState({ level: val.currentTarget.value })}>
        
     //                  {/* <option selected="selected"> Entry Level </option> */}
     //                  <option value="senior">Senior</option>
     //                  <option value="junior">Junior</option>
     //                </select>
     //                {/* </form> */}
     //                <img
     //                  className="locationImg"
     //                  src="https://www.freeiconspng.com/uploads/simple-location-icon-png-22.png"
     //                  alt="/"
     //                />
     //                <Input
     //                  className="searchCompany"
     //                  id="location"
     //                  placeholder="Location"
     //                  value={this.state.location || ''}
     //                  onChange={(e) => this.setState({ location: e.currentTarget.value })}
     //                // onKeyUp={this.searchInput}
     //                />
        
     //                <button className="searchButton" type='submit' onClick={this.searchInput}>Search</button>
     //              </form>
     //            </Container>
     //            <Container className="dashboardMainDisplay">
     //              <div>
     //                <Card id="wishList">
     //                  <CardHeader>WISHLIST</CardHeader>
     //                  <CardBody>
        
     //                    <div className="wishlistRecord">
     //                      {" "}
     //                      <img
     //                        className="wishCompanyLogo"
     //                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbrandox-production.s3-eu-central-1.amazonaws.com%2Fad0c0479-e033-4016-93fa-dbf1cb3d0972%2Fbrand-page-logo%2F1553513398828%2FDummy-logo-BW--1200x1200.png&f=1&nofb=1"
     //                        alt="logo"
     //                      />
     //                    </div>
     //                    <a href="/" id="seeMoreLink">
     //                      See More
     //                    </a>
     //                  </CardBody>
     //                </Card>
     //              </div>
     //              <div>
     //                <Card id="active">
     //                  <CardHeader>ACTIVE APPLICATIONS</CardHeader>
     //                  <CardBody>
     //                    <div className="activeRecord">
     //                      {" "}
     //                      <img
     //                        className="activeCompanyLogo"
     //                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbrandox-production.s3-eu-central-1.amazonaws.com%2Fad0c0479-e033-4016-93fa-dbf1cb3d0972%2Fbrand-page-logo%2F1553513398828%2FDummy-logo-BW--1200x1200.png&f=1&nofb=1"
     //                        alt="logo"
     //                      />
     //                    </div>
     //                    <a href="/" id="seeMoreActiveLink">
     //                      See More
     //                    </a>
     //                  </CardBody>
     //                </Card>
     //              </div>
     //              <div>
     //                <Card id="closed">
     //                  <CardHeader>CLOSED APPLICATIONS</CardHeader>
     //                  <CardBody>
     //                    <div className="closedRecord">
     //                      {" "}
     //                      <img
     //                        className="closedCompanyLogo"
     //                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbrandox-production.s3-eu-central-1.amazonaws.com%2Fad0c0479-e033-4016-93fa-dbf1cb3d0972%2Fbrand-page-logo%2F1553513398828%2FDummy-logo-BW--1200x1200.png&f=1&nofb=1"
     //                        alt="logo"
     //                      />
     //                    </div>
     //                    <a href="/" id="seeMoreClosedLink">
     //                      See More
     //                    </a>
     //                  </CardBody>
     //                </Card>
     //              </div>
     //            </Container>
     //          </Container>
        
     //        );
     //      }
     //    }