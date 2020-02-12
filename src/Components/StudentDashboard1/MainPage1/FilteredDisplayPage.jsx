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
              {this.props.filteredSearch &&
                this.props.filteredSearch.map((jobs, index) => (
                  <Row key={index} className="col-12" id="record">
                    <Col xs="2" id="companyRecord">
                      {jobs.companyName}
                    </Col>
                    <Col xs="3" id="titleRecord">
                      {jobs.roleTitle}
                    </Col>
                    <Col xs="2">{jobs.location}</Col>
                    <Col
                      xs="3"
                      id="descriptionRecord"
                      onMouseOver={this.mouseOver}
                    >
                      {jobs.description.replace(/<[^>]*>?/gm, "")}
                    </Col>
                    <button
                      onClick={() =>
                        this.props.onSelectedJob(jobs)
                        // this.setState({
                        //   showModal: true,
                        //   selectedJob: jobs
                        // })
                      }
                      className="detailsButton"
                    >
                      Details
                    </button>
                  </Row>
                ))}
            </Scrollbars>
       </>
         );
    }
}
 
export default FilteredDisplayPage;

