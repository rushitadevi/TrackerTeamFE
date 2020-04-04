
  <div id="filterDisplayCont">
  {/* <div className="filteredRows" id="filterTitleRow"> */}
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
  {/* </div> */}

  {/* <Scrollbars id="filteredScroll" style={{ height: 500 }}> */}

    {this.props.filteredSearch &&
      this.props.filteredSearch.map((jobs, index) => (
        <>
           {/* <div className = "filteredRows" id="recordMapCont"> */}
          <div key={index} id="filterCompany" className ="headerTitle" >
            {jobs.companyName}
          </div>
          <div id="filterRole" className ="headerTitle" >
            {jobs.roleTitle}
          </div>
          <div id="filterLocation" className ="headerTitle" >
            {jobs.location}
            </div>
          <div
          className ="headerTitle" 
            id="filteredJobDescText"
            onMouseOver={this.mouseOver}
          >
            {jobs.description.replace(/<[^>]*>?/gm, "")}
          </div>
          <div id="viewDetails" className ="headerTitle" >
          <div
          className="updateButton"
          id="detailsButton"
            onClick={() =>this.props.onSelectedJob(jobs)}
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
  {/* </Scrollbars> */}

  </div>