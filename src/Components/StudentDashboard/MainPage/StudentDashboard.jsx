import React, { Component } from 'react';
import { connect } from "react-redux";
import Navbar from "../../Navbar";
import {Container,Input} from "reactstrap";
import { getSearch } from "../../../Actions/apiFetches";
import { getJobApps} from "../../../Actions/jobAppFetches";
import WishlistActiveClosed from "./WishlistActiveClosed";
import FilteredDisplayPage from "./FilteredDisplayPage";
import StudentModal from "../ModalComponents/StudentModal";


const mapStateToProps = state => state;

const mapDispatchToProps = dispatch => ({
  getSearchThunk: url => dispatch(getSearch(url)),
  getJobAppsThunk: () => dispatch(getJobApps()),

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
      <Navbar/>
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
            <WishlistActiveClosed
              title="WISHLIST"
              extraTitleClass="wishCard"
              seeMoreClass="wishlist"
              app={this.props.jobApp.wishlist}
              onSelectedJob={(selectedJob) => this.setState({ selectedJob: selectedJob, showModal: true})}
            />
            <WishlistActiveClosed
              title="ACTIVE"
              extraTitleClass="activeCard"
              seeMoreClass="active"
              app={this.props.jobApp.active}
              onSelectedJob={(selectedJob) => this.setState({ selectedJob: selectedJob, showModal: true})}
            />
            <WishlistActiveClosed
              title="CLOSED"
              extraTitleClass="closedCard"
              seeMoreClass="closed"
              app={this.props.jobApp.closed}
              onSelectedJob={(selectedJob) => this.setState({ selectedJob: selectedJob, showModal: true})}
            />
          </Container>
        )}

        {this.state.url && (
          <Container className="dashboardMainDisplay">
          
            <FilteredDisplayPage 
              filteredSearch = {this.props.publicAPI.filteredSearch}
              onSelectedJob={(selectedJob) => this.setState({ selectedJob: selectedJob, showModal: true})}
            />
          </Container>
        )}

      {this.state.selectedJob && <StudentModal
              showModal={this.state.showModal}
              toggleModal={this.toggleModal}
              selectedJob={this.state.selectedJob}
              updateSelectedJob={(update) => this.setState({ selectedJob: {
                ...this.state.selectedJob,
                ...update
              }})}
              updateStateMethod={this.updateStateMethod}
            />}
      </>
    );
  }
  mouseOver = () => {
    this.setState({ hover: true });
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentDashboard);