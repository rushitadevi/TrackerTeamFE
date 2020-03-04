import React, { Component } from 'react';
import { Scrollbars } from "react-custom-scrollbars";
import {Input, Row, Col } from "reactstrap";

class JobInfoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: undefined,
      company: undefined,     
    };
  }

    render() { 
        const {selectedJob}  = this.props;
       
        return ( 
            <>
              <div className="companyInfoRow">
                <div id="companyInfoColOne">
                  <div className="companyInfoOne">
                  <h6 id="vacancyTitle">Vacancy Details</h6>
                  </div>
                  <div className="companyInfoOne">
                  <h6 id="companyInfoTitle">Company Name</h6>           
                  <h6 className ="jobInfo">{selectedJob.companyName}</h6>
                  </div>
                  <div className="companyInfoOne">
                  <h6 id="role">Role Title</h6>
                  <h6 className="jobInfo">{selectedJob.roleTitle}</h6>
                  </div>
                  <div className="companyInfoOne">
                  <h6 id="loco">Location</h6>
                  <h6 className="jobInfo">{selectedJob.location}</h6>
                  </div>
                  <div className="companyInfoOne">
                  <h6 id="applicationTitle">Posting URL</h6>
                  <a id="applicationJobInfo" href={selectedJob.applyUrl}>
                    {selectedJob.applyUrl}
                  </a>
                  </div>
                  </div>
                <div id="companyInfoColTwo">
                <div className="companyInfoTwo">
                  <h6 id="statusTitle">Status: New</h6>
                  </div>
                  <div className="companyInfoTwo">
                  <h6 id="appDateTitle">Application Date</h6>
                  <Input
                    type="date"
                    name="statusDateTime"
                    id="dateTime"
                    placeholder="Date &amp; Time"
                    value={selectedJob.statusDateTime ? selectedJob.statusDateTime.split('T')[0] : undefined}
                    onChange={e => this.props.onChange(e)}
                  />
                 </div>
                 <div className="companyInfoTwo">
                  <h6 id="interviewDateTitle">Interview Date</h6>
                  <Input
                    type="date"
                    name="intDateTime"
                    id="dateTime"
                    placeholder="Date &amp; Time"
                    value={selectedJob.intDateTime ? selectedJob.intDateTime.split('T')[0] : undefined}
                    onChange={e => this.props.onChange(e)}
                  />
                 </div>
                 <div className="companyInfoTwo">
                  <h6 id="replyDateTitle">Expected Reply Date</h6>
                  <Input
                    type="date"
                    name="replyDateTime"
                    id="dateTime"
                    placeholder="Date &amp; Time"
                    value={selectedJob.replyDateTime ? selectedJob.replyDateTime.split('T')[0] : undefined}
                    onChange={e => this.props.onChange(e)}
                  />
                  </div>
                </div>
                </div >
                <div className="companyRoleDesc">
                  <div className="roleDesc">
                  <h6 id="companyRoleTitle">Role Description</h6>
                  </div>
                  <div className="roleDesc jobInfo">
                    <Scrollbars id="modalScroll" style={{ height: 110 }}>
                    {selectedJob.description && selectedJob.description.replace(/<[^>]*>?/gm, "")}
                    </Scrollbars>
                  </div>
                </div>
    
            </>
         );
    }
}
 
export default JobInfoComponent;