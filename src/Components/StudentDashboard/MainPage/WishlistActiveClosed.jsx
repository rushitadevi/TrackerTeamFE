import React, { Component } from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Row,
    Col
} from "reactstrap";


class WishlistActiveClosed extends Component {

    constructor(props) {
        super(props);
        this.state = {
          query: null,
          seeMoreLink: true,
          id: null,
          seeLessLink: false
        };
      }

    render() {
        return (
            <>
                <Card className={"listCard" + " " + this.props.extraTitleClass}>
                    <CardHeader  className='card-header'>{this.props.title}</CardHeader>
                    <CardBody>
                        <>
                            {/* {!this.state.seeMoreLink && this.props.apps.map && */}
                                            {this.props.app.items &&
                                this.props.app.items.slice(0, this.state.seeMoreLink ? 5 : this.props.app.items.length).map(application => (
                                    <Row
                                        key={application._id}
                                        className="col-sm-12 listRecord"
                                    >
                                        <Col sm="3" className="logoCol">
                                            {application.companyLogo && (
                                                <img
                                                    className="companyLogo"
                                                    src={application.companyLogo}
                                                    alt="logo"
                                                />
                                            )}
                                            {!application.companyLogo && (
                                                <img
                                                    className="companyLogo"
                                                    src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.fusenet.eu%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Flarge%2Fpublic%2Fdefault_images%2Flogo_placeholder_0.png%3Fitok%3DDwPivBp_&f=1&nofb=1"
                                                    alt="logo"
                                                />
                                            )}
                                        </Col>
                                        <Col sm="9" className="companyCol" style={{cursor:'pointer'}} onClick={async () => {
                                            this.props.onSelectedJob(application)
                                        
                                            }}>
                                            {application.companyName}
                                            <br />
                                            {application.roleTitle}
                                        </Col>
                                    </Row>
                                ))}
                        </>
                        {this.state.seeMoreLink &&
                        <a
                            href="#"
                            className={"seeMoreLink" + " " + this.props.seeMoreClass}
                            onClick={() => this.setState({seeMoreLink: false, seeLessLink: true}) }
                        >
                            See {this.props.app.count} More
                       </a>}
                       {this.state.seeLessLink && !this.state.seeMoreLink &&
                        <a
                            href="#"
                            className="seeLessLink" 
                            onClick={() => this.setState({seeMoreLink: false, seeMoreLink: true}) }
                        >
                            See Less
                       </a>}
                    </CardBody>
                </Card>
           </>



        )
}

}
export default WishlistActiveClosed;