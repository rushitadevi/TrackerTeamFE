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
import { getJobCategory, getSearch } from "../Actions/apiFetches";
import { Scrollbars } from "react-custom-scrollbars";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  getJobCategoryThunk: () => dispatch(getJobCategory()),
  getSearchThunk: url => dispatch(getSearch(url))
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
      show: false,
      selectedJob: {}
    };
  }

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  componentDidMount = async () => {
    await this.props.getJobCategoryThunk();
    // await this.props.getEntryLevelThunk();
    console.log(this.props.publicAPIfetches.jobCategory);
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

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

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
            src="https://www.freeiconspng.com/uploads/simple-location-icon-png-22.png"
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
              {this.props.publicAPIfetches.filteredSearch &&
                this.props.publicAPIfetches.filteredSearch.map(
                  (jobs, index) => {
                    var idOne = jobs.id;
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
            <Modal
              show={this.state.showModal}
              id="statusModal"
              aria-labelledby="contained-modal-title-vcenter"
            >
              <Container id="modalHeader">
                <Row id="xButtonRow" className="col-sm-12">
                  <Button
                    id="xButton"
                    onClick={() => {
                      this.toggleModal();
                      this.setState({ show: false });
                    }}
                  >
                    X
                  </Button>
                </Row>
                <Row id="modalTitleRow" className="col-sm-12">
                  <Col sm="3" id="logoCol">
                    <img
                      id="modalLogo"
                      src={this.state.selectedJob.company_logo}
                      height="20px"
                      alt="logo"
                    />
                  </Col>
                  <Col sm="9" id="titleCol">
                    {/* <Modal.Title > */}
                    <h3 id="title">{this.state.selectedJob.company}</h3>
                    {/* </Modal.Title> */}
                  </Col>
                  {/* <Col sm="8"> */}
                  <Button className="updateButton">UPDATE STATUS</Button>
                  {/* </Col> */}
                </Row>
              </Container>
              {/* <Modal.Body> */}
              <Container>
                <Row className="modalOptionsRect">
                  <Row className="modalOptions">
                    <Col xs={12} className="first">
                      <h6>JOB INFO</h6>
                    </Col>
                    <Col xs={12} className="second">
                      <h6>TASKS</h6>
                    </Col>
                    <Col xs={12} className="third">
                      <h6>NOTES</h6>
                    </Col>
                    <Col xs={12} className="fourth">
                      <h6>DIRECTORY</h6>
                    </Col>
                  </Row>
                </Row>
              </Container>

              <Container className="companyInfoCont">
                <Row className="col-sm-12 companyInfoRow">
                  <Col xs={6} className="companyInfo">
                    <h6 id="vacancyTitle">Vacancy Details</h6>
                    <h6 id="companyTitle">Company Name</h6>
                    <h6 id="jobInfo">
                      {this.state.selectedJob.company}
                    </h6>
                    <h6 id="role">Role Title</h6>
                    <h6 id="jobInfo">{this.state.selectedJob.title}</h6>
                    <h6 id="loco">Location</h6>
                    <h6 id="jobInfo">
                      {this.state.selectedJob.location}
                    </h6>
                    <h6 id="applicationTitle">Posting URL</h6>
                    {/* <h6 id="applicationJobInfo">{this.state.selectedJob.url}</h6> */}
                    <a
                      id="applicationJobInfo"
                      href={this.state.selectedJob.url}
                    >
                      {this.state.selectedJob.url}
                    </a>
                  </Col>
                  <Col xs={6} className="companyInfo">
                    <h6 id="statusTitle">Status: New</h6>
                    <h6 id="appDateTitle">Application Date</h6>
                    <Input
                      type="datetime-local"
                      name="dateTime"
                      id="dateTime"
                      placeholder="Date &amp; Time"
                      // value={this.state.reservation.dateTime}
                      // onChange={this.updateReservation}
                    />
                    <h6 id="interviewDateTitle">Interview Date</h6>
                    <Input
                      type="datetime-local"
                      name="dateTime"
                      id="dateTime"
                      placeholder="Date &amp; Time"
                      // value={this.state.reservation.dateTime}
                      // onChange={this.updateReservation}
                    />

                    <h6 id="replyDateTitle">Expected Reply Date</h6>
                    <Input
                      type="datetime-local"
                      name="dateTime"
                      id="dateTime"
                      placeholder="Date &amp; Time"
                      // value={this.state.reservation.dateTime}
                      // onChange={this.updateReservation}
                    />
                  </Col>
                  <Col xs={12} className="companyRoleDesc">
                  <h6 id="companyRoleTitle">Role Description</h6>

                  <p id="jobInfo">
                  <Scrollbars id="modalScroll" style={{ height: 110}}>
                      {this.state.selectedJob.description}
                      </Scrollbars>
                    </p>
                  </Col>
                </Row>
              </Container>
              {/* </Modal.Body> */}
            </Modal>
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
