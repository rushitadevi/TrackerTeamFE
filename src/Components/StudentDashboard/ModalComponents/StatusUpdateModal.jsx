import React, { Component } from "react";
import {Button, Modal} from "react-bootstrap";

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

        <div id="statusList">
        <div className="xButtonRow" id="statusListxBtn">
            <Button
              className="xButton"
              onClick={() => {
                this.props.toggleModal();
              }}
            >
              X
            </Button>
          </div>

            <div className="statusDesc">
             <div className="statusDescText">Save to wishlist</div>
             <div href="#" onClick={() => {this.statusInput("wishlist"); {this.props.toggleModal();}}}>      
             <i className="material-icons" id="addCircle">add_circle_outline</i>
                </div>
             </div>

             <div className="statusDesc">
             <div  className="statusDescText">Applied</div>
             <div href="#" onClick={() => {this.statusInput("applied"); {this.props.toggleModal();}}}>      
             <i className="material-icons" id="addCircle">add_circle_outline</i>
              </div>
             </div>

             <div className="statusDesc">
             <div  className="statusDescText">Interview</div>
             <div href="#" onClick={() => {this.statusInput("interview"); {this.props.toggleModal();}}}>      
             <i className="material-icons" id="addCircle">add_circle_outline</i>
              </div>
             </div>

             <div className="statusDesc">
             <div  className="statusDescText"> Offer</div>
             <div href="#" onClick={() => {this.statusInput("offer"); {this.props.toggleModal();}}}>      
             <i className="material-icons" id="addCircle">add_circle_outline</i>
              </div>
             </div>

             <div className="statusDesc">
             <div  className="statusDescText">Application Withdrawn</div>
             <div href="#" onClick={() => {this.statusInput("application"); {this.props.toggleModal();}}}>      
             <i className="material-icons" id="addCircle">add_circle_outline</i>
              </div>
             </div>

             <div className="statusDesc">
             <div  className="statusDescText">Rejected</div>
             <div href="#" onClick={() => {this.statusInput("rejected"); {this.props.toggleModal();}}}>      
             <i className="material-icons" id="addCircle">add_circle_outline</i>
              </div>
             </div>

        </div>

       

      
      
                  
  
      </Modal>
    );
  }
}

export default StatusUpdateModal;
