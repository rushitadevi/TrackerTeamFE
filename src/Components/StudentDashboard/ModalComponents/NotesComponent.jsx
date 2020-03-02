import React, { Component } from "react";
import { Button, Input, Row, Col } from "reactstrap";
import { Scrollbars } from 'react-custom-scrollbars';

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
          <Col className="col-9 colAddNotes">
            <Input
              className="addNotes"
              placeholder="Notes "
              type="textarea"
              value={this.state.note}
              onChange={e => this.setState({ note: e.currentTarget.value })}
            />
          </Col>
          <Col className="col-3 colNotesAddButton">
            <Button className="taskButton" onClick={this.addNotesState}>
              +
            </Button>
          </Col>
        </Row>

        
          {this.props.notes &&
            this.props.notes.map(singleNote => (
              <>
              <Row id="rowNotesList">
                <Col className="col-8 colListNotes">
                <Scrollbars>
                    {singleNote}
                    </Scrollbars>
                </Col>
             <Row xs={2}>
               {/* <Row id="buttonsListNotes"> */}
                <Col className="col-1 buttonsCol"  id="deleteNote">
                  <Button
                    className="taskButton"
                      onClick={() => this.deleteOneNote(singleNote)}
                  >
                    x
                  </Button>
                  </Col>
                  <Col className="col-1 buttonsCol" >
                  <i className="material-icons taskButton editTask" id="editIcon" onClick={() => this.editOneNote(singleNote)} style={{cursor:'pointer'}}>create</i>
                  </Col>
                  {/* </Row>*/}
                  </Row> 
                </Row>
              </>
            ))}
        
      </>
    );
  }
}

export default NotesComponents;
