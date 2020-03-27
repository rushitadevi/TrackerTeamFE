import React, { Component } from "react";
import { Button, Input } from "reactstrap";
import { Scrollbars } from 'react-custom-scrollbars';

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

        <div className="taskRow">
          <div id="inputTaskField">
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
          </div>

          <div id="buttonAddTask">
            <Button className="taskButton" onClick={this.setTaskState}>
              +
        </Button>
          </div>
        </div>

        {this.props.tasks &&
          this.props.tasks.map(task => (
            <>
              <div className="taskRow">
                <div className="displayTaskCont" id="allList">
                  <Scrollbars id="scrollTask">
                    {task}
                  </Scrollbars>
                </div>

                <div id="displayTaskDelete" >
                  <Button
                    className="taskButton"
                    onClick={() => this.deleteOneTask(task)}
                  >
                    x
                  </Button>
                </div>
              </div>
            </>
          ))}

      </>
    );
  }
}

export default TaskComponent;
