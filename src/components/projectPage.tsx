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
export class ProjectPage extends React.Component<{}, { error: any, isLoaded: boolean, projects: SubTask[], head: number}>{

  constructor(props: {}) {
    super(props);

    this.state = {
      error: null,
      isLoaded: false,
      projects: [],
      head: -1,
    };
  }

  componentDidMount() {
    fetch("http://localhost:1337/api/projects")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            projects: result,
            head: result[0]._id
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

  // TODO
  // assignedTo should probably be a User, not a string. Fine for now with dummy data,
  // but should be replaced.
  public render() {

    const { error, isLoaded, projects, head} = this.state;
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
      console.log(projects[0].deadline);
      return (
        <Container fluid style={styles.box}>
          <Row noGutters={true}>
            <Col sm="3"><ProjectColumn head={head} projects={projects} changeHead={this.changeHead} /></Col>
            <Col sm="6"><TaskView
              name={projects[0].title}
              completion={projects[0].progress}
              description={projects[0].description}
              dueDate={projects[0].deadline}
              status={projects[0].status}
              assignee={projects[0].title}
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
    this.setState(() => {
      return { head: newHead };
    })
  }

};
