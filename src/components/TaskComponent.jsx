import React, { Component } from "react";
import { Button, Input, Row, Col } from "reactstrap";

class TaskComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      taskDelete: ""
    };
  }

  setTaskState = () => {
    this.props.addTask(this.state.task);
    this.setState({ task: "" });
  };

  deleteOneTask = task => {
    this.props.deleteTask(task);
    // this.setState({ task: "" });
  };

  render() {
    return (
      <>
        <Row className="col-sm-12 titleRow">
          <h6 id="taskHeader">Add Task</h6>
        </Row>

        <Input
          className="addTask"
          placeholder="...Task "
          value={this.state.task}
          onChange={e => this.setState({ task: e.currentTarget.value })}
          // onKeyDown={e => {
          //   if (e.key === "Enter") {
          //     this.props.addTask(this.state.task);
          //     this.setState({ task: "" });
          //   }
          // }}
        />

        <Button id="plusButton" onClick={this.setTaskState}>
          +
        </Button>

        <Row className="col-sm-12 titleRow">
          <h6 id="taskHeader">Task List</h6>
        </Row>

        <Row className="col-sm-12 taskListRow">
          {this.props.tasks &&
            this.props.tasks.map(task => (
              <>
                <Col sm="9" id="allList">
                  - {task}
                </Col>

                <Col sm="3" id="allList">
                <Button
                  id="deleteTaskButton"
                  onClick={() => this.deleteOneTask(task)}
                >
                  x
                </Button>
                </Col>
              </>
            ))}
        </Row>
      </>
    );
  }
}

export default TaskComponent;
