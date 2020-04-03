import * as React from "react";
import styled from 'styled-components';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { SubTask } from "./subtaskType";
import { LandProjectColumn } from "./landProjCol";
import ApplicationConfig from './applicationConfig';

const styles = {
    center: {
        marginTop: 25
    },
    title: {
        fontSize: 96,
        margin: "auto"
    },
    label: {
        fontSize: 48,
        margin: "auto",
        marginBottom: 15
    },
    projects: {
        width: window.innerWidth/3,
        margin: "auto",
        padding: 0
    }
};

interface IUser {
  id: number;
  name: string;
}

const testOwner: IUser = { id: 0, name: "Super Steve" };

interface ProjLandProps {
    handleStateChange: any;
    changeHead: (newHead: number) => any;
}

export class ProjectLanding extends React.Component<ProjLandProps,  { error: any, isLoaded: boolean, task: SubTask, head: number, handleStateChange: any}> {
    owner: IUser;

    constructor(props: ProjLandProps) {
        super(props);

        this.state = {
          error: null,
          isLoaded: false,
          task: null,
          head: undefined,
          handleStateChange: props.handleStateChange,
        };
        this.owner = testOwner;
    }

    componentDidMount() {

      fetch(`${ApplicationConfig.api.staging.baseUrl}/api/projects`, {
        method: 'get',
      }).then(response => {

        // pass the data as promise to next then block
        return response.json();
      }).then(data => {

        const taskId = data[0]._id;
        // make a 2nd request and return a promise
        return fetch(`${ApplicationConfig.api.staging.baseUrl}/api/tasks/${taskId}`);
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

    public render() {
        const { error, isLoaded, task, head, handleStateChange } = this.state;
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
    }

        return(
            <Container fluid>
                <Row style={styles.center}>
                    <h1 style={styles.title}>TaskTabs</h1>
                </Row>
                <Row>
                    <p style={styles.label}>Welcome, {this.owner.name}. Here are your Projects!</p>
                </Row>
                <Row style={styles.projects} noGutters={true}>
                    <LandProjectColumn changeHead={this.changeHead} handleStateChange = {this.state.handleStateChange}/>
                </Row>
            </Container>
        );
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
