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
    showProjectPage: (projectID: number) => any;
}

export class ProjectLanding extends React.Component<ProjLandProps,  { error: any, isLoaded: boolean, task: SubTask, head: number, showProjectPage: (projectID: number) => any}> {
    owner: IUser;

    constructor(props: ProjLandProps) {
        super(props);

        this.state = {
          error: null,
          isLoaded: false,
          task: null,
          head: undefined,
          showProjectPage: props.showProjectPage,
        };
        this.owner = testOwner;
    }

    selectProject = (projectID: number) => {
        this.state.showProjectPage(projectID);
    }

    render() {

        return(
            <Container fluid>
                <Row style={styles.center}>
                    <h1 style={styles.title}>TaskTabs</h1>
                </Row>
                <Row>
                    <p style={styles.label}>Welcome, {this.owner.name}. Here are your Projects!</p>
                </Row>
                <Row style={styles.projects} noGutters={true}>
                    <LandProjectColumn selectProject={this.selectProject} />
                </Row>
            </Container>
        );
    }
};
