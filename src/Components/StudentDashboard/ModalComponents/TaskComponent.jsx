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
      <Row>
        <Col className="col-9" id="colTaskInput">
        <Input
          className="addTask"
          placeholder="Add Task "
          value={this.state.task}
          onChange={e => this.setState({ task: e.currentTarget.value })}
          // onKeyDown={e => {
          //   if (e.key === "Enter") {
          //     this.props.addTask(this.state.task);
          //     this.setState({ task: "" });
          //   }
          // }}
        />
       </Col>
       <Col className="col-3">
        <Button className="taskButton" onClick={this.setTaskState}>
          +
        </Button>
        </Col>
        </Row>
       
          {this.props.tasks &&
            this.props.tasks.map(task => (
              <>
               <Row id="taskListRow">
                <Col className="col-9" id="allList">
                  - {task}
                </Col>

                <Col className="col-3" >
                  <Button
                    className="taskButton"
                    onClick={() => this.deleteOneTask(task)}
                  >
                    x
                  </Button>
                </Col>
                </Row>
              </>
            ))}

      </>
    );
  }
}

export default TaskComponent;
