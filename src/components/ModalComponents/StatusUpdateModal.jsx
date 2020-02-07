import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";


class StatusUpdateModal extends Component {
  state={}

  statusInput = status => {  
    this.props.handleStatus(status)
  };
 

  render() {
    return (
      <Modal
        show={this.props.showModal}
        id="statusListModal"
        aria-labelledby="contained-modal-title-vcenter"
      >

        <Container id="statusList">
        <Row id="xButtonRow" className="col-sm-12">
            <Button
              id="minModalxButton"
              onClick={() => {
                this.props.toggleModal();
              }}
            >
              X
            </Button>
          </Row>
          <Row id="statOptionsRow" className="col-sm-12">
            <Col id="statusOptCol" sm={10}>
             <h6>Save to wishlist</h6>
             <h6>Applied</h6>
             <h6>Interview</h6>
             <h6>Offer</h6>
             <h6>Application Withdrawn</h6>
             <h6>Rejected</h6>
            </Col>
            <Col sm={2} id="addStatusOptCol">
                <a href="#" onClick={() => {this.statusInput("wishlist"); {this.props.toggleModal();}}}>      
            <i className="material-icons" id="addCircle">add_circle_outline</i>
                </a>
                <a href="#" onClick={() => {this.statusInput("applied"); {this.props.toggleModal();}}}>
            <i className="material-icons" id="addCircle">add_circle_outline</i> 
                </a>
                <a href="#" onClick={() => {this.statusInput("interview"); {this.props.toggleModal();}}}>
            <i className="material-icons" id="addCircle">add_circle_outline</i>
                </a>
                <a href="#"  onClick={() => {this.statusInput("offer"); {this.props.toggleModal();}}}>
            <i className="material-icons" id="addCircle">add_circle_outline</i>
                </a>
                <a href="#"  onClick={() => {this.statusInput("application withdrawn");{this.props.toggleModal();}}}>
            <i className="material-icons" id="addCircle">add_circle_outline</i> 
                </a>

                <a href="#" onClick={() => {this.statusInput("JobInfo");}}>
            <i class="material-icons" id="addCircle">add_circle_outline</i> 

                <a href="#" onClick={() => {this.statusInput("rejected");{this.props.toggleModal();}}}>
            <i className="material-icons" id="addCircle">add_circle_outline</i> 

                <a href="#" onClick={() => {this.statusInput("rejected");{this.props.toggleModal();}}}>
            <i className="material-icons" id="addCircle">add_circle_outline</i> 

                </a>
            </Col>
          </Row>
        </Container>

       

      
      
                  
  
      </Modal>
    );
  }
}

export default StatusUpdateModal;
