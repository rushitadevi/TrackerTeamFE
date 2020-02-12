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
        <Row className="col-sm-12 notesRow">
          <Col sm="8" className="notesInputCol">
            <Input
              className="addNotes"
              placeholder="...Notes "
              type="textarea"
              value={this.state.note}
              onChange={e => this.setState({ note: e.currentTarget.value })}
            />
          </Col>
          <Col sm="2" id="plusNotesButtonCol">
            <Button id="plusNotesButton" onClick={this.addNotesState}>
              +
            </Button>
          </Col>
        </Row>

        
          {this.props.notes &&
            this.props.notes.map(singleNote => (
              <>
              <Row className="col-sm-12 notesListRow">
                <Col sm="12" id="allNotesList">
                    {singleNote}
                </Col>

                <Col sm="12" id="allNotesButtons">
                  <Button
                    id="deleteTaskButton"
                      onClick={() => this.deleteOneNote(singleNote)}
                  >
                    x
                  </Button>
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
