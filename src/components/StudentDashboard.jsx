import React from "react";
import { connect } from "react-redux";
import NavBar from "./Navbar";
// import { Link } from "react-router-dom"
import { Container, Input, Card, CardHeader, CardBody } from "reactstrap";
import {
  getJobCategory,
  getSearch,
  // getLocation
} from "../Actions/apiFetches";

const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  getJobCategoryThunk: () => dispatch(getJobCategory()),
  getSearchThunk: () => dispatch(getSearch()),
  // getLocationThunk: () => dispatch(getLocation())
});



class StudentDashboard extends React.Component {

  state = {
    showModal: false,
  };

  componentDidMount = async () => {

    await this.props.getJobCategoryThunk();
    // await this.props.getEntryLevelThunk();
    console.log(this.props.publicAPIfetches.jobCategory);
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  render() {
    return (
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


    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentDashboard);
