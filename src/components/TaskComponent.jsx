import React, { Component } from 'react';
import { Container, Input, Row, Col } from "reactstrap";

class TaskComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          tasks: []
        };
      }
    render() { 
        return (   <>
            <Row className="col-sm-12 tasksRow">
             <Col xs={12} className="addTaskTitle">
               <h6 id="vacancyTitle">Tasks</h6>
             </Col>
             <Col xs={12} className="addTaskCol">
               <Input
                 className="addTask"
                 id="addTask"
                 placeholder="+ Add Task"
                 value={this.props.taskList}
                 onChange={e => 
                   this.props.addTask(e.currentTarget.value)
                 }
               />
             </Col>
             </Row>
            
           </>);
    }
}
 
export default TaskComponent ;