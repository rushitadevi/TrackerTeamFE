import React from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom"
import {
  Container,
  Card,
  CardHeader,
  CardBody,
  Input,
  Row,
  Col
} from "reactstrap";
import { getSearch } from "../Actions/apiFetches";
import { getWishlistJobApps, getActiveJobApps, getClosedJobApps, getJobApps  } from "../Actions/jobAppFetches";
import { Scrollbars } from "react-custom-scrollbars";
import StudentModal from "./StudentModal";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  getSearchThunk: url => dispatch(getSearch(url)),
  getJobAppsThunk: () => dispatch(getJobApps()),
  getWishlistJobAppsThunk: (query) => dispatch(getWishlistJobApps(query)),
  getActiveJobAppsThunk: (query) => dispatch(getActiveJobApps(query)),
  getClosedJobAppsThunk: (query) => dispatch(getClosedJobApps(query))
});

class StudentDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company: "",
      role: "",
      level: "senior",
      location: "",
      url: "",
      hover: false,
      showModal: false,
      selectedJob: {},
      query: null
    };
  }

  componentDidMount= async () => {
    let query = "?limit=5";
    this.setState({query: query})
    //  await this.props.getJobAppsThunk();
     await this.props.getWishlistJobAppsThunk(query)
     await this.props.getActiveJobAppsThunk(query)
     await this.props.getClosedJobAppsThunk(query)
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  toggleView = () => {
    this.setState({ selectedView: !this.state.selectedView });
  };

  searchInput = async value => {
    value.preventDefault();

    // debugger;

    let url = "search=";

    if (this.state.company.length >= 4) url += "+" + this.state.company;
    if (this.state.role.length >= 4) url += "+" + this.state.role;
    if (this.state.level.length) url += "+" + this.state.level;
    if (this.state.location.length >= 4)
      url += "&location=" + this.state.location;

    this.setState({
      url: url
    });

    await this.props.getSearchThunk(url);
  };
  //if fetch is an empty array return a message: (no results matching your search)


  render() {
    return (
      <>
      
       {this.props.jobApp.allJobApps &&
        this.props.jobApp.allJobApps.map(application =>
         <StudentModal id={application._id} />
         )}

        <Container className="filterBar">
          <h5 id="logo">TrackeR</h5>
          <hr
            style={{
              backgroundColor: "#fcffff",
              height: 0.2,
              marginTop: "93px"
            }}
          />

          <i className="material-icons" id="searchIcon">
            {" "}
            search
          </i>
          <Input
            className="searchCompany"
            id="search"
            placeholder="Company"
            value={this.state.company || ""}
            onChange={e => this.setState({ company: e.currentTarget.value })}
          />

          <i className="material-icons" id="roleIcon">
            {" "}
            work_outline
          </i>
          <Input
            id="jobRole"
            placeholder="Role"
            value={this.state.role || ""}
            onChange={e => this.setState({ role: e.currentTarget.value })}
          />

          <i className="material-icons" id="entryLevelIcon">
            {" "}
            file_copy
          </i>
          <select
            className="form-control"
            id="entryLevel"
            value={this.state.level || "senior"}
            onChange={e => this.setState({ level: e.currentTarget.value })}
          >
            {/* <option selected="selected"> Entry Level </option> */}
            <option value="senior">Senior</option>
            <option value="junior">Junior</option>
          </select>
          <img
            className="locationImg"
            src="https://www.freeiconspng.com/uploads/gray-location-icon-png-6.png"
            alt="/"
          />

          <Input
            className="location"
            id="location"
            placeholder="Location"
            value={this.state.location || ""}
            onChange={e => this.setState({ location: e.currentTarget.value })}
          />

          <button
            className="searchButton"
            type="submit"
            onClick={this.searchInput}
          >
            Search
          </button>
        </Container>


        {!this.state.url && (
          <Container className="dashboardMainDisplay">
            <div>
              <Card className="listCard wishCard">
                <CardHeader>WISHLIST</CardHeader>
                <CardBody>
                {this.props.jobApp.wishlist &&
                this.props.jobApp.wishlist.map(wishlistJobs => {
                    return(
                  <Row key={wishlistJobs._id} className = "col-sm-12" id="listRecord">
                    <Col sm="3" className="logoCol">
                    {wishlistJobs.companyLogo &&(
                    <img
                      className="companyLogo"
                      src={wishlistJobs.companyLogo}
                      alt="logo"
                    />
                    )}
                      {!wishlistJobs.companyLogo &&(
                      <img
                      className="companyLogo"
                      src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.fusenet.eu%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Flarge%2Fpublic%2Fdefault_images%2Flogo_placeholder_0.png%3Fitok%3DDwPivBp_&f=1&nofb=1"
                      alt="logo"
                    />
                    )}
                    </Col>
                    <Col sm="9" className="companyCol">
                    {wishlistJobs.companyName}<br/>
                    {wishlistJobs.roleTitle}
                    </Col>
                  </Row>
                    )
                  })}
                  <a href="/" className="seeMoreLink wishlist">
                    See More
                  </a>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className="listCard activeCard">
                <CardHeader>ACTIVE APPLICATIONS</CardHeader>
                <CardBody>
                     {this.props.jobApp.active &&
                this.props.jobApp.active.map(activeJobs => {
                    return(
                  <Row key={activeJobs._id} className = "col-sm-12" id="listRecord">
                    <Col sm="3" className="logoCol">
                    {activeJobs.companyLogo &&(
                    <img
                      className="companyLogo"
                      src={activeJobs.companyLogo}
                      alt="logo"
                    />
                    )}
                      {!activeJobs.companyLogo &&(
                      <img
                      className="companyLogo"
                      src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.fusenet.eu%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Flarge%2Fpublic%2Fdefault_images%2Flogo_placeholder_0.png%3Fitok%3DDwPivBp_&f=1&nofb=1"
                      alt="logo"
                    />
                    )}
                    </Col>
                    <Col sm="9" className="companyCol">
                    {activeJobs.companyName}<br/>
                    {activeJobs.roleTitle}
                    </Col>
                  </Row>
                    )
                  })}
                  <a href="/" className="seeMoreLink active"> 
                    See More
                  </a>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card className="listCard closedCard">
                <CardHeader>CLOSED APPLICATIONS</CardHeader>
                <CardBody>
                {this.props.jobApp.closed &&
                this.props.jobApp.closed.map(closedJobs => {
                    return(
                  <Row key={closedJobs._id} className = "col-sm-12" id="listRecord">
                    <Col sm="3" className="logoCol">
                    {closedJobs.companyLogo &&(
                    <img
                      className="companyLogo"
                      src={closedJobs.companyLogo}
                      alt="logo"
                    />
                    )}
                      {!closedJobs.companyLogo &&(
                      <img
                      className="companyLogo"
                      src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.fusenet.eu%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Flarge%2Fpublic%2Fdefault_images%2Flogo_placeholder_0.png%3Fitok%3DDwPivBp_&f=1&nofb=1"
                      alt="logo"
                    />
                    )}
                    </Col>
                    <Col sm="9" className="companyCol">
                    {closedJobs.companyName}<br/>
                    {closedJobs.roleTitle}
                    </Col>
                  </Row>
                    )
                  })}
                  <a href="/" className="seeMoreLink closed">
                    See More
                  </a>
                </CardBody>
              </Card>
            </div>
          </Container>
        )}

        {this.state.url && (
          <Container className="dashboardMainDisplay">
            <Row className="col-12" id="titleRow">
              <Col xs="2" id="companyTitle">
                Company
              </Col>
              <Col xs="2" id="roleTitle">
                Role
              </Col>
              <Col xs="2" id="locationTitle">
                Location
              </Col>
              <Col xs="2" id="descriptionTitle">
                Description
              </Col>
            </Row>
            <Scrollbars id="filteredScroll" style={{ height: 500 }}>
              {this.props.publicAPI.filteredSearch &&
                this.props.publicAPI.filteredSearch.map(
                  (jobs, index) => {
                    return (
                      <>
                        <Row key={index} className="col-12" id="record">
                          <Col xs="2" id="companyRecord">
                            {jobs.company}
                          </Col>
                          <Col xs="3" id="titleRecord">
                            {jobs.title}
                          </Col>
                          <Col xs="2">{jobs.location}</Col>
                          <Col
                            xs="3"
                            id="descriptionRecord"
                            onMouseOver={this.mouseOver}
                          >
                            {jobs.description
                              .replace("<p>", "")
                              .replace("<strong>", "")
                              .replace("</strong>", "")
                              .replace("<em>", "")
                              .replace("</p>", "")}
                          </Col>
                          <button
                            onClick={() =>
                              this.setState({
                                showModal: true,
                                selectedJob: jobs
                              })
                            }
                            className="detailsButton"
                          >
                            Details
                          </button>
                        </Row>
                      </>
                    );
                  }
                )}
            </Scrollbars>
            <StudentModal showModal={this.state.showModal} toggleModal={this.toggleModal} selectedJob={this.state.selectedJob} />
          </Container>
        )}
      </>
    );
  }
  mouseOver = () => {
    this.setState({ hover: true });
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentDashboard);
