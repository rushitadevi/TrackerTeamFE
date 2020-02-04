import React, { Component } from 'react';
import { Scrollbars } from "react-custom-scrollbars";
import {Input, Row, Col } from "reactstrap";

class JobInfoComponent extends Component {
    state = {  }
    render() { 
        const {application} = this.props;
        const {selectedJob}  = this.props;
        return ( 
            <>
              <Row className="col-sm-12 companyInfoRow">
                <Col xs={6} className="companyInfo">
                  <h6 id="vacancyTitle">Vacancy Details</h6>
                  <h6 id="companyInfoTitle">Company Name</h6>
                  <h6 id="jobInfo">{selectedJob.company}</h6>
                  <h6 id="role">Role Title</h6>
                  <h6 id="jobInfo">{selectedJob.title}</h6>
                  <h6 id="loco">Location</h6>
                  <h6 id="jobInfo">{selectedJob.location}</h6>
                  <h6 id="applicationTitle">Posting URL</h6>
                  <a id="applicationJobInfo" href={selectedJob.url}>
                    {selectedJob.url}
                  </a>
                </Col>
                <Col xs={6} className="companyInfo">
                  <h6 id="statusTitle">Status: New</h6>
                  <h6 id="appDateTitle">Application Date</h6>
                  <Input
                    type="date"
                    name="statusDateTime"
                    id="dateTime"
                    placeholder="Date &amp; Time"
                    value={application.statusDateTime}
                    onChange={e => this.onChange(e)}
                  />

                  <h6 id="interviewDateTitle">Interview Date</h6>
                  <Input
                    type="date"
                    name="intDateTime"
                    id="dateTime"
                    placeholder="Date &amp; Time"
                    value={application.intDateTime}
                    onChange={e => this.onChange(e)}
                  />

                  <h6 id="replyDateTitle">Expected Reply Date</h6>
                  <Input
                    type="date"
                    name="replyDateTime"
                    id="dateTime"
                    placeholder="Date &amp; Time"
                    value={application.replyDateTime}
                    onChange={e => this.onChange(e)}
                  />
                </Col>
                <Col xs={12} className="companyRoleDesc">
                  <h6 id="companyRoleTitle">Role Description</h6>

                  <div id="jobInfo">
                    <Scrollbars id="modalScroll" style={{ height: 110 }}>
                    {selectedJob.description && selectedJob.description.replace(/<[^>]*>?/gm, "")}
                    </Scrollbars>
                  </div>
                </Col>
              </Row>
            </>
         );
    }
}
 
export default JobInfoComponent;