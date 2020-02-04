import React, { Component } from 'react';
import {Row, Col} from "reactstrap";
import { Scrollbars } from "react-custom-scrollbars";
import StudentModal from "../ModalComponents/StudentModal";

class FilteredDisplayPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showModal: false,
        };
      }

toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
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
                      {jobs.description.replace(/<[^>]*>?/gm, "")}
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
                ))}
            </Scrollbars>

     {this.props.selectedJob &&<StudentModal
              showModal={this.state.showModal}
              toggleModal={this.toggleModal}
              selectedJob={this.props.selectedJob}
            />}
       </>
         );
    }
}
 
export default FilteredDisplayPage;

