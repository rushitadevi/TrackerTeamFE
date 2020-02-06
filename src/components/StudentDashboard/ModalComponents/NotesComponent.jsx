import React, { Component } from "react";
import { Button, Input, Row, Col } from "reactstrap";
import { Scrollbars } from "react-custom-scrollbars";

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
        {/* <Row className="col-sm-12 notesTitleRow">
              <h6 id="notesHeader">Notes</h6>
            </Row>
     */}
        <Row className="col-sm-12 notesListRow">
          {this.props.notes &&
            this.props.notes.map(singleNote => (
              <>
                <Col sm="9" id="allNotesList">
                  <Scrollbars id="allNotesScroll" style={{ height: 40 }}>
                    {singleNote}
                  </Scrollbars>
                </Col>

                <Col sm="3" id="allNotesList">
                  <Button
                    id="deleteTaskButton"
                      onClick={() => this.deleteOneNote(singleNote)}
                  >
                    x
                  </Button>
                  <i class="material-icons" id="editIcon" onClick={() => this.editOneNote(singleNote)} style={{cursor:'pointer'}}>create</i>
                </Col>
              </>
            ))}
        </Row>
      </>
    );
  }
}

export default NotesComponents;
