import * as React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { ProjectColumn } from "./projectColumn";
import { SubTaskColumn } from "./subTaskColumn";
import { SubTask } from "./subtaskType";
import { TaskView } from "./taskView";
import ApplicationConfig from './applicationConfig';
import { number } from "prop-types";

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

const testOwner: IUser = { id: 0, name: "Super Steve" };

const testSharedWith: IUser[] = [
  { id: 1, name: "Little Steve" },
  { id: 2, name: "Tiny Steve" },
];

interface ProjectPageProps {
  projectID: number;
}

// ProjectPage contains the entire application past the Google oauth. This should include the left and right sidebars
// task view, settings user info, etc.
export class ProjectPage extends React.Component<ProjectPageProps, { error: any, isLoaded: boolean, task: SubTask, head: number }>{

  constructor(props: ProjectPageProps) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      task: null,
      head: undefined,
    };
  }

  // This will attempt to fetch from the database a given number of times.
  // This is needed because if the head was recently inserted, the fetch will
  // likely return null as the database will not have caught up yet.
  makeProjectQuery = (numTries: number) => {
    let timeout;
    if (numTries == 0) {
      this.setState({
        isLoaded: false,
        error: true
      });
      clearTimeout(timeout);
    } else {
      timeout = setTimeout(() => {
        fetch(`${ApplicationConfig.api.staging.baseUrl}/api/tasks/${this.props.projectID}`)
        .then(res => res.json())
        .then(
          (result) => {
            if (result) {
              this.setState({
                isLoaded: true,
                task: result,
                head: result._id
              });
            } else {
              this.makeProjectQuery(numTries - 1);
            }
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
        }, 1000);
    }
  }

  componentDidMount() {
    // This will attempt to the make the Project Query 5 times before giving up.
    this.makeProjectQuery(5);
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
      if (!!task.deadline) {
        deadline = new Date(task.deadline);
      } else {
        deadline = null;
      }
      return (
        <Container fluid style={styles.box}>
          <Row noGutters={true}>
            <Col sm="3"><ProjectColumn head={head} changeHead={this.changeHead} /></Col>
            <Col sm="6"><TaskView
              taskID={head}
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
      fetch(`${ApplicationConfig.api.staging.baseUrl}/api/tasks/${newHead}`)
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
