import React from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom"
import { Container, Card, CardHeader, CardBody, Input, Row, Col} from "reactstrap";
import { getJobCategory, getSearch } from "../Actions/apiFetches";
import { Scrollbars } from 'react-custom-scrollbars';
import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  getJobCategoryThunk: () => dispatch(getJobCategory()),
  getSearchThunk: (url) => dispatch(getSearch(url)),
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

  searchInput = async (value) => {
    value.preventDefault();

    // debugger;

    let url = "search=";

    if (this.state.company.length >= 4)
      url += "+" + this.state.company

    if (this.state.role.length >= 4)
      url += "+" + this.state.role

    if (this.state.level.length)
      url += "+" + this.state.level

    if (this.state.location.length >= 4)
      url += "&location=" + this.state.location


    this.setState({
      url: url
    })
    console.log(this.state.url)
    await this.props.getSearchThunk(url);

  }
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

          <i className="material-icons" id="searchIcon"> search</i>
          <Input className="searchCompany"
            id="search"
            placeholder="Company"
            value={this.state.company || ''}
            onChange={(e) => this.setState({ company: e.currentTarget.value })} />

          <i className="material-icons" id="roleIcon"> work_outline</i>
          <Input id="jobRole"
            placeholder="Role"
            value={this.state.role || ''}
            onChange={(e) => this.setState({ role: e.currentTarget.value })} />

          <i className="material-icons" id="entryLevelIcon"> file_copy</i>
          <select className="form-control" id="entryLevel" value={this.state.level || 'senior'} onChange={(e) => this.setState({ level: e.currentTarget.value })}>
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
            value={this.state.location || ''}
            onChange={(e) => this.setState({ location: e.currentTarget.value })}
          />

          <button className="searchButton" type='submit' onClick={this.searchInput} >Search</button>

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
              <Col xs="2" id="companyTitle"> Company </Col>
              <Col xs="2" id="roleTitle"> Role </Col>
              <Col xs="2" id="locationTitle"> Location </Col>
              <Col xs="2" id="descriptionTitle"> Description </Col>
            </Row>
            <Scrollbars id="filteredScroll" style={{ height: 500 }}>
              {this.props.publicAPIfetches.filteredSearch && this.props.publicAPIfetches.filteredSearch.map((jobs, index) => (
                <>
                  <Row className="col-12" id="record">
                    <Col xs="2" id="companyRecord" >{jobs.company}</Col>
                    <Col xs="3" id="titleRecord">{jobs.title}</Col>
                    <Col xs="2">{jobs.location}</Col>
                    <Col xs="3" id="descriptionRecord" onMouseOver={this.mouseOver}>{jobs.description.replace("<p>", "").replace("<strong>", "").replace("</strong>", "").replace("<em>", "").replace("</p>", "")}</Col>
                    <button   onClick={() => this.setState({ showModal: true })}  className="detailsButton">Details</button>
   
          {/* <Modal show={this.state.showModal} onHide={this.toggleModal}> */}
          <Modal show={this.state.showModal} id="statusModal" aria-labelledby="contained-modal-title-vcenter">
      <Container id="modalHeader" >  
      <Row id="xButtonRow" className = "col-sm-12">
      <Button id="xButton" onClick={() => { this.toggleModal(); this.setState({ show: false }); }}>X</Button>
      </Row>
      <Row id= "modalTitleRow" className = "col-sm-12">
        <Col sm="8">
        <Modal.Title id="title">
          Using Grid in Modal
        
        </Modal.Title>
        </Col>
        <Col sm="4">
        <Button className="updateButton">UPDATE STATUS</Button>
        </Col>
        </Row>
      </Container>
      {/* <Modal.Body> */}
        <Container>
          <Row className="modalOptions" >
            {/* <Col xs={12} md={8}> */}
              <h6 className="header first">JOB INFO</h6>
             <h6 className="header second">JOB INFO</h6>
            <h6 className="header third">JOB INFO</h6>
             <h6 className="header fourth">JOB INFO</h6>
              {/* <code>TASKS</code>
              <code>NOTES</code>
              <code>COMPANY</code> */}
            {/* </Col> */}
     
            {/* <Col xs={6} md={4}>
              <code>.col-xs-6 .col-md-4</code>
            </Col> */}
          </Row>
          {/* <Row className="show-grid">
            <Col xs={6} md={4}>
              <code>.col-xs-6 .col-md-4</code>
            </Col>
            <Col xs={6} md={4}>
              <code>.col-xs-6 .col-md-4</code>
            </Col>
            <Col xs={6} md={4}>
              <code>.col-xs-6 .col-md-4</code>
            </Col>
          </Row> */}
        </Container>
      {/* </Modal.Body> */}
    </Modal>
                  </Row>
                </>
              )
              )}
            </Scrollbars>
          </Container>
        )}
      </>
    );
  }
  mouseOver = () => {
    this.setState({ hover: true });
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentDashboard);
