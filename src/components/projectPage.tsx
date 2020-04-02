import * as React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { ProjectColumn } from "./projectColumn";
import { SubTaskColumn } from "./subTaskColumn";
import { SubTask } from "./subtaskType";
import { TaskView } from "./taskView";

const styles = {
  box: {
    paddingLeft: 0,
    paddingRight: 0,
    minWidth: 1300
  }
};

interface IUser {
  id: number;
  name: string;
}

interface ITag {
  tag: string;
  id: number;
}

const testOwner: IUser = { id: 0, name: "Super Steve" };

const testSharedWith: IUser[] = [
  { id: 1, name: "Little Steve" },
  { id: 2, name: "Tiny Steve" },
];

// ProjectPage contains the entire application past the Google oauth. This should include the left and right sidebars
// task view, settings user info, etc.
export class ProjectPage extends React.Component<{}, { error: any, isLoaded: boolean, task: SubTask, head: number }>{

  constructor(props: {}) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      task: null,
      head: undefined,
    };
  }

  async componentDidMount() {

    fetch("https://tasktabs-backend.herokuapp.com/api/projects", {
      method: 'get',
    }).then(response => {

      // pass the data as promise to next then block
      return response.json(); 
    }).then(data => {

      const taskId = data[0]._id;
      // make a 2nd request and return a promise
      return fetch(`https://tasktabs-backend.herokuapp.com/api/tasks/${taskId}`); 
    })
    .then(response => {

      return response.json();
    })
    .catch(error => {
      this.setState({
        isLoaded: true,
        error: error,
      });
    }).then(res => {
      this.setState({
        isLoaded: true,
        task: res,
        head: res._id
      })
    })

  }

  // TODO
  // assignedTo should probably be a User, not a string. Fine for now with dummy data,
  // but should be replaced.
  public render() {

    const { error, isLoaded, task, head } = this.state;
    // TODO Style error and loading screens
    
    if (error) {
      return (
        <>Error!</>
      );
    } else if (!isLoaded) {
      return (
        <>Loading...</>
      );
    } else {
      let deadline;
      if(!!task.deadline) {
        deadline = new Date(task.deadline);
      } else {
        deadline = null;
      }
      return (
        <Container fluid style={styles.box}>
          <Row noGutters={true}>
            <Col sm="3"><ProjectColumn changeHead={this.changeHead} /></Col>
            <Col sm="6"><TaskView
              name={task.title}
              completion={task.progress}
              description={task.description}
              dueDate={deadline}
              status={task.status}
              assignee={task.title}
              owner={testOwner}
              sharedUsers={testSharedWith}
            /></Col>
            <Col sm="3"><SubTaskColumn head={head} changeHead={this.changeHead}></SubTaskColumn></Col>
          </Row>
        </Container>
      );
    }
  }

  private changeHead = (newHead: number) => {
    const previousHead = this.state.head;
    if (newHead !== previousHead) {
      this.setState(() => {
        return { head: newHead };
      })
      fetch(`https://tasktabs-backend.herokuapp.com/api/tasks/${newHead}`)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              task: result,
            });
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        );
    }
  }

};
