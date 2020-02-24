import React, { Component } from "react";
import { Button, Input, Row, Col } from "reactstrap";

class NotesComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: ""
      //   taskDelete: ""
    };
  }

  addNotesState = () => {
    this.props.addNotes(this.state.note);
    this.setState({ note: "" });
  };

  deleteOneNote = note => {
    this.props.deleteNotes(note);
  };

  editOneNote = note => {
    this.props.editNotes(note);
  };

  render() {
    return (
      <>
        <Row id="rowAddNotes">
          <Col className="col-9" id="colAddNotes">
            <Input
              className="addNotes"
              placeholder="Notes "
              type="textarea"
              value={this.state.note}
              onChange={e => this.setState({ note: e.currentTarget.value })}
            />
          </Col>
          <Col className="col-3" id="colNotesAddButton">
            <Button className="taskButton" onClick={this.addNotesState}>
              +
            </Button>
          </Col>
        </Row>

        
          {this.props.notes &&
            this.props.notes.map(singleNote => (
              <>
              <Row>
                <Col className="col-8" >
                    {singleNote}
                </Col>

                <Col className="col-2" >
                  <Button
                    id="deleteTaskButton"
                      onClick={() => this.deleteOneNote(singleNote)}
                  >
                    x
                  </Button>
                  </Col>
                  <Col className="col-2" >
                  <i class="material-icons" id="editIcon" onClick={() => this.editOneNote(singleNote)} style={{cursor:'pointer'}}>create</i>
                  </Col>
                </Row>
              </>
            ))}
        
      </>
    );
  }
}

export default NotesComponents;
