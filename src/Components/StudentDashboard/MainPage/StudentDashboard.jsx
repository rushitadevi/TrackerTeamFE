import React, { Component } from "react";
import { connect } from "react-redux";
import NavBar from "../../Navbar";
import {
  Container,
  Input,
  Row,
  Col,
  InputGroupAddon,
  InputGroup,
  InputGroupText,
} from "reactstrap";
import { getSearch } from "../../../Actions/apiFetches";
import { getJobApps } from "../../../Actions/jobAppFetches";
import WishlistActiveClosed from "./WishlistActiveClosed";
import FilteredDisplayPage from "./FilteredDisplayPage";
import StudentModal from "../ModalComponents/StudentModal";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  getSearchThunk: (url) => dispatch(getSearch(url)),
  getJobAppsThunk: () => dispatch(getJobApps()),
});

class StudentDashboard extends Component {
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
      selectedJobId: {},
      query: null,
      seeMoreLink: null,
    };
  }

  updateStateMethod = async () => {
    await this.props.getJobAppsThunk();
  };

  componentDidMount = async () => {
    await this.props.getJobAppsThunk();
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };

  toggleView = () => {
    this.setState({ selectedView: !this.state.selectedView });
  };

  searchInput = async (value) => {
    value.preventDefault();
    let url = "search=";

    if (this.state.company.length >= 4) url += "+" + this.state.company;
    if (this.state.role.length >= 4) url += "+" + this.state.role;
    if (this.state.level.length) url += "+" + this.state.level;
    if (this.state.location.length >= 4)
      url += "&location=" + this.state.location;

    this.setState({
      url: url,
    });

    await this.props.getSearchThunk(url);
  };
  //if fetch is an empty array return a message: (no results matching your search)

  render() {
    return (
      <>
     <NavBar margin="none" />
        <div id="filterBar">
          <div className="filterBarDashboard">
            <h5 id="logoDashboard">TrackeR</h5>
          </div>
          <div id="rowFilterBarAndButton" className="filterBarDashboard">
            <div className="filterInput">
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="material-icons">search</i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Company"
                  value={this.state.company || ""}
                  onChange={(e) =>
                    this.setState({ company: e.currentTarget.value })
                  }
                />
              </InputGroup>
            </div>
            <div className="filterInput">
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="material-icons">work_outline</i>
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Role"
                  value={this.state.role || ""}
                  onChange={(e) =>
                    this.setState({ role: e.currentTarget.value })
                  }
                />
              </InputGroup>
            </div>
            <div className="filterInput">
              <InputGroup id="juniorSeniorSelect" className="inputFieldsFilter">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="material-icons">file_copy</i>
                  </InputGroupText>
                </InputGroupAddon>

                <Input
                  type="select"
                  name="select"
                  id="seniorJunior"
                  value={this.state.level || "senior"}
                  onChange={(e) =>
                    this.setState({ level: e.currentTarget.value })
                  }
                >
                  <option value="junior">Junior</option>
                  <option value="senior">Senior</option>
                </Input>
              </InputGroup>
            </div>
            <div className="filterInput">
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <img
                      style={{ width: "24px" }}
                      src="https://www.freeiconspng.com/uploads/gray-location-icon-png-6.png"
                      alt="/"
                    />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  placeholder="Location"
                  value={this.state.location || ""}
                  onChange={(e) =>
                    this.setState({ location: e.currentTarget.value })
                  }
                />
              </InputGroup>
            </div>
            <div id="colBtnSearch" className="filterInput">
              <div
                className="appButtons"
                id="btnSearchJob"
                type="submit"
                onClick={this.searchInput}
              >
                Search
              </div>
            </div>
          </div>
        </div>
        {!this.state.url && (
          <Container className="dashboardMainDisplay">
            <Row className="rowAllCards">
              <Col md={4} xs={12} className="colCardCol">
                <WishlistActiveClosed
                  title="WISHLIST"
                  extraClass="wishlist"
                  // seeMoreClass="seeMore"
                  app={this.props.jobApp.wishlist}
                  onSelectedJob={(selectedJob) =>
                    this.setState({ selectedJob: selectedJob, showModal: true })
                  }
                />
              </Col>
              <Col md={4} xs={12} className="colCardCol">
                <WishlistActiveClosed
                  title="ACTIVE"
                  extraClass="active"
                  // seeMoreClass="seeMore"
                  app={this.props.jobApp.active}
                  onSelectedJob={(selectedJob) =>
                    this.setState({ selectedJob: selectedJob, showModal: true })
                  }
                />
              </Col>
              <Col md={4} xs={12} className="colCardCol">
                <WishlistActiveClosed
                  title="CLOSED"
                  extraClass="closed"
                  // seeMoreClass="seeMore"
                  app={this.props.jobApp.closed}
                  onSelectedJob={(selectedJob) =>
                    this.setState({ selectedJob: selectedJob, showModal: true })
                  }
                />
              </Col>
            </Row>
          </Container>
        )}
        {this.state.url && (
          <div className="dashboardMainDisplay">
            <FilteredDisplayPage
              filteredSearch={this.props.publicAPI.filteredSearch}
              onSelectedJob={(selectedJob) =>
                this.setState({ selectedJob: selectedJob, showModal: true })
              }
            />
          </div>
        )}

        {this.state.selectedJob && (
          <StudentModal
            showModal={this.state.showModal}
            toggleModal={this.toggleModal}
            selectedJob={this.state.selectedJob}
            studentId={this.props.loggedInUser.user._id}
            updateSelectedJob={(update) =>
              this.setState({
                selectedJob: {
                  ...this.state.selectedJob,
                  ...update,
                },
              })
            }
            updateStateMethod={this.updateStateMethod}
          />
        )}
      </>
    );
  }
  mouseOver = () => {
    this.setState({ hover: true });
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentDashboard);
