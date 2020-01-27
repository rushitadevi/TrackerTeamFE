import React, { Component } from 'react';
import { Container, Input, Row, Col } from "reactstrap";

class TaskComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          task: ""
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
                 value={this.state.task}
                 onKeyDown={e => { 
                 if (e.key === "Enter"){
                   this.props.addTask(this.state.task)
                   this.setState({task: ""})
                 }
                }}
                 onChange={e => 
                   this.setState({ task: e.currentTarget.value})
                 }
               />

               {this.props.tasks && this.props.tasks.map( task => <p>{task}</p>)}
             </Col>
             </Row>
            
           </>);
    }
}
 
export default TaskComponent ;