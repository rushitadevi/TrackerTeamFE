import React, { Component } from "react";
import { Card, CardHeader, CardBody, Row } from "reactstrap";
import { getJobApps } from "../../../Actions/jobAppFetches";
import { connect } from "react-redux";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  getJobAppsThunk: () => dispatch(getJobApps()),
});

class WishlistActiveClosed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: null,
      seeMoreLink: true,
      id: null,
      seeLessLink: false,
    };
  }

  deleteRecord = async (id) => {
    await fetch(process.env.REACT_APP_URL + "application/" + id, {
      method: "DELETE",
    });
    await this.props.getJobAppsThunk();
  };

  render() {
    let length = this.props.app.count
    let viewMore = length - 6;
    return (
      <>
        <Card className={"listCard" + " " + this.props.extraClass}>
          <CardHeader className="card-header">{this.props.title}</CardHeader>

          <CardBody>
            <>
              {this.props.app.items &&
                this.props.app.items
                  .slice(
                    0,
                    this.state.seeMoreLink ? 6 : this.props.app.items.length
                  )
                  .map((application) => (
                    <div key={application._id} className="listRecord">
                      <div
                      onClick={async () => {
                        this.props.onSelectedJob(application);
                      }}
                      >
                        {application.companyLogo  
                         ? <img
                            className="companyLogo"
                            src={application.companyLogo}
                            alt="logo"
                          />

                          :<img
                          className="companyLogo"
                          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.fusenet.eu%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Flarge%2Fpublic%2Fdefault_images%2Flogo_placeholder_0.png%3Fitok%3DDwPivBp_&f=1&nofb=1"
                          alt="logo"
                        />
                        }
                    
                      </div>

                      <div className="companyCol">
                        <div className="cardRecCompanyNameDelete">
                          <div
                            className="cardRecCompanyName"
                            onClick={async () => {
                              this.props.onSelectedJob(application);
                            }}
                          >
                            {application.companyName}
                          </div>
                          <div
                          className="delRecord"
                            onClick={() => this.deleteRecord(application._id)}
                          >
                            x
                          </div>
                        </div>
                        <div className="cardRecRoleTitle"
                         onClick={async () => {
                           this.props.onSelectedJob(application);
                         }}
                        >
                          {application.roleTitle}
                        </div>
                      </div>
                    </div>
                  ))}
            </>
            <Row className="rowSeeMoreLess">
              {this.state.seeMoreLink && (
                <div
                  onClick={() =>
                    this.setState({ seeMoreLink: false, seeLessLink: true })
                  }
                >
                  {length > 6
                  ? 'See ' + viewMore + ' More'
                  : 'See More'}
                </div>
              )}
              {this.state.seeLessLink && !this.state.seeMoreLink && (
                <div
                  onClick={() =>
                    this.setState({ seeLessLink: false, seeMoreLink: true })
                  }
                >
                  See Less
                </div>
              )}
            </Row>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WishlistActiveClosed);
