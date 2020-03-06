import React, { Component } from 'react';
import {Row, Col} from "reactstrap";
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
          selectedJob: {}
        });
      };

    render() { 
  
        return ( 
          <>
          <div id="filterDisplayCont">
            <div className="filteredRows" id="filterTitleRow">
              <div className ="headerTitle" id="filterCompanyHeader">
                Company
              </div>
              <div className ="headerTitle" id="filterRoleHeader">
                Role
              </div>
              <div className ="headerTitle" id="filterLocationHeader">
                Location
              </div>
              <div className ="headerTitle"  id="filterDescHeader">
                Description
              </div>
            </div>
   
            <Scrollbars id="filteredScroll" style={{ height: 500 }}>
         
              {this.props.filteredSearch &&
                this.props.filteredSearch.map((jobs, index) => (
                  <>
                     <div className = "filteredRows" id="recordMapCont">
                    <div key={index} id="filterCompany">
                      {jobs.companyName}
                    </div>
                    <div id="filterRole">
                      {jobs.roleTitle}
                    </div>
                    <div id="filterLocation">
                      {jobs.location}
                      </div>
                    <div
                      id="filteredJobDescText"
                      onMouseOver={this.mouseOver}
                    >
                      {jobs.description.replace(/<[^>]*>?/gm, "")}
                    </div>
                    <div id="viewDetails">
                    <div
                      onClick={() =>
                        this.props.onSelectedJob(jobs)
                        // this.setState({
                        //   showModal: true,
                        //   selectedJob: jobs
                        // })
                      }
                      id="detailsButton"
                    >
                      Details
                    </div>
                    </div>
                    </div>
                    </>
                ))}
            </Scrollbars>
    
            </div>
       </>
         );
    }
}
 
export default FilteredDisplayPage;

