import React, { Component } from "react";
import { Button, Input, Row, Col } from "reactstrap";

class TaskComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: ""
    };
  }
  render() {
    return (
      <>
        <Row className="col-sm-12 titleRow">
            <h6 id="vacancyTitle">Tasks</h6>
          </Row>

            <Input
              // className="addTask"
              className ="addTask"
              placeholder=" ...Add Task "
              value={this.state.task}
              onChange={e => this.setState({ task: e.currentTarget.value })}
              onKeyDown={e => {
                if (e.key === "Enter") {
                  this.props.addTask(this.state.task);
                  this.setState({ task: "" });
                }
              }}
            />

            <Button id="plusButton">+</Button>
            
        {this.props.tasks && this.props.tasks.map(task => <p>{task}</p>)}
      </>
    );
  }
}

export default TaskComponent;
