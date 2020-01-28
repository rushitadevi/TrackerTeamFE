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
import { Scrollbars } from "react-custom-scrollbars";
import {getJobApps} from "../Actions/jobAppFetches"
import StudentModal from "./StudentModal";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  getSearchThunk: url => dispatch(getSearch(url)),
  getJobApps: () => dispatch(getJobApps()) //Rushita
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
    };
  }


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
    await this.props.getJobApps(); //Rushita
  };
  //if fetch is an empty array return a message: (no results matching your search)


  render() {
    return (
      <>
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
              <Card id="wishList">
                <CardHeader>WISHLIST</CardHeader>
                <CardBody>
                  <div className="wishlistRecord">
                    {" "}
                    <img
                      className="wishCompanyLogo"
                      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbrandox-production.s3-eu-central-1.amazonaws.com%2Fad0c0479-e033-4016-93fa-dbf1cb3d0972%2Fbrand-page-logo%2F1553513398828%2FDummy-logo-BW--1200x1200.png&f=1&nofb=1"
                      alt="logo"
                    />
                  </div>
                  <a href="/" id="seeMoreLink">
                    See More
                  </a>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card id="active">
                <CardHeader>ACTIVE APPLICATIONS</CardHeader>
                <CardBody>
                  <div className="activeRecord">
                    {" "}
                    <img
                      className="activeCompanyLogo"
                      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbrandox-production.s3-eu-central-1.amazonaws.com%2Fad0c0479-e033-4016-93fa-dbf1cb3d0972%2Fbrand-page-logo%2F1553513398828%2FDummy-logo-BW--1200x1200.png&f=1&nofb=1"
                      alt="logo"
                    />
                  </div>
                  <a href="/" id="seeMoreActiveLink">
                    See More
                  </a>
                </CardBody>
              </Card>
            </div>
            <div>
              <Card id="closed">
                <CardHeader>CLOSED APPLICATIONS</CardHeader>
                <CardBody>
                  <div className="closedRecord">
                    {" "}
                    <img
                      className="closedCompanyLogo"
                      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbrandox-production.s3-eu-central-1.amazonaws.com%2Fad0c0479-e033-4016-93fa-dbf1cb3d0972%2Fbrand-page-logo%2F1553513398828%2FDummy-logo-BW--1200x1200.png&f=1&nofb=1"
                      alt="logo"
                    />
                  </div>
                  <a href="/" id="seeMoreClosedLink">
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
                {" "}
                Company{" "}
              </Col>
              <Col xs="2" id="roleTitle">
                {" "}
                Role{" "}
              </Col>
              <Col xs="2" id="locationTitle">
                {" "}
                Location{" "}
              </Col>
              <Col xs="2" id="descriptionTitle">
                {" "}
                Description{" "}
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
