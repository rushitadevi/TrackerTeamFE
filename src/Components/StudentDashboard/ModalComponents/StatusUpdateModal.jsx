import React, { Component } from "react";
import { Modal } from "react-bootstrap";

class StatusUpdateModal extends Component {
  state = {};

  statusInput = (status) => {
    this.props.handleStatus(status);
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
            <div
              className="xButton"
              onClick={() => {
                this.props.toggleModal();
              }}
            >
              X
            </div>
          </div>
          <div className="statusDesc">
            <div className="statusDescText">Save to wishlist</div>
            <i
              className="material-icons"
              onClick={() => {
                this.statusInput("wishlist");
                {
                  this.props.toggleModal();
                }
              }}
            >
              add_circle_outline
            </i>
          </div>
          <div className="statusDesc">
            <div className="statusDescText">Applied</div>
            <i
              className="material-icons"
              onClick={() => {
                this.statusInput("applied");
                {
                  this.props.toggleModal();
                }
              }}
            >
              add_circle_outline
            </i>
          </div>
          <div className="statusDesc">
            <div className="statusDescText">Interview</div>
            <i
              className="material-icons"
              onClick={() => {
                this.statusInput("interview");
                {
                  this.props.toggleModal();
                }
              }}
            >
              add_circle_outline
            </i>
          </div>

          <div className="statusDesc">
            <div className="statusDescText"> Offer</div>
            <i
              className="material-icons"
              onClick={() => {
                this.statusInput("offer");
                {
                  this.props.toggleModal();
                }
              }}
            >
              add_circle_outline
            </i>
          </div>

          <div className="statusDesc">
            <div className="statusDescText">Application Withdrawn</div>
            <i
              className="material-icons"
              onClick={() => {
                this.statusInput("application");
                {
                  this.props.toggleModal();
                }
              }}
            >
              add_circle_outline
            </i>
          </div>

          <div className="statusDesc">
            <div className="statusDescText">Rejected</div>
            <i
              className="material-icons"
              onClick={() => {
                this.statusInput("rejected");
                {
                  this.props.toggleModal();
                }
              }}
            >
              add_circle_outline
            </i>
          </div>
        </div>
      </Modal>
    );
  }
}

export default StatusUpdateModal;
