import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";

class FilteredDisplayPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedJob: {},
    };
  }

  componentDidMount = async () => {
    this.setState({
      selectedJob: {},
    });
  };

  render() {
    return (
      <>
        <div className="filterDisplayCont" id="filterCont">
          <div className="filteredTitleRows">
            <div className="headerTitle" id="filterCompanyHeader">
              Company
            </div>
            <div className="headerTitle" id="filterRoleHeader">
              Role
            </div>
            <div className="headerTitle" id="filterLocationHeader">
              Location
            </div>
            <div className="headerTitle" id="filterDescHeader">
              Description
            </div>
          </div>

          <Scrollbars id="filteredScroll" style={{ height: 500 }}>
            <div className="filteredRows">
              {this.props.filteredSearch &&
                this.props.filteredSearch.map((jobs, index) => (
                  <>
                    {/* <div className = "filteredRows" id="recordMapCont"> */}
                    <div
                      key={jobs.id}
                      id="filterCompany"
                      className="filteredRecordName"
                    >
                      <span className="headerSmallScreen">Company: </span>{" "}
                      <br />
                      {jobs.companyName}
                    </div>
                    <div id="filterRole" className="filteredRecordName">
                      <span className="headerSmallScreen">Role: </span> <br />
                      {jobs.roleTitle}
                    </div>
                    <div id="filterLocation" className="filteredRecordName">
                      <span className="headerSmallScreen">Location: </span>{" "}
                      <br />
                      {jobs.location}
                    </div>
                    <div
                      id="filteredJobDescText"
                      className="filteredRecordName"
                      onMouseOver={this.mouseOver}
                    >
                      <span className="headerSmallScreen">Description: </span>
                      <br /> {jobs.description.replace(/<[^>]*>?/gm, "")}
                    </div>
                    <div id="btnViewDetails" className="filteredRecordName">
                      <span className="headerSmallScreen"> </span> <br />
                      <div
                        className="appButtons"
                        id="detailsButton"
                        onClick={() => this.props.onSelectedJob(jobs)}
                        // this.setState({
                        //   showModal: true,
                        //   selectedJob: jobs
                        // })
                      >
                        Details
                      </div>
                    </div>
                    {/* </div> */}
                  </>
                ))}
            </div>
          </Scrollbars>
        </div>
      </>
    );
  }
}

export default FilteredDisplayPage;
