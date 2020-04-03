import * as React from "react";
import styled from 'styled-components';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { SubTask } from "./subtaskType";
import { LandProjectColumn } from "./landProjCol";

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

interface ProjLandProps {
    projectHead: SubTask;
    projectData: SubTask;
    handleStateChange: any;
}

interface ProjLandState {
    projectHead: any;
    projectData: any;
    handleStateChange: any;
}

export class ProjectLanding extends React.Component<ProjLandProps, ProjLanState> {
    owner: IUser;

    constructor(props: ProjLandProps) {
        super(props);

        this.state = { projectHead: props.projectHead, projectData: props.projectData, handleStateChange: props.handleStateChange};
        this.owner = props.projectHead.owner;

    }

    public render() {
        return(
            <Container fluid>
                <Row style={styles.center}>
                    <h1 style={styles.title}>TaskTabs</h1>
                </Row>
                <Row>
                    <p style={styles.label}>Welcome, {this.owner.name}. Here are your Projects!</p>
                </Row>
                <Row style={styles.projects} noGutters={true}>
                    <LandProjectColumn task={this.state.projectHead} changeHead={this.changeHead} handleStateChange = {this.state.handleStateChange}/>
                </Row>
            </Container>
        );
    }

    private changeHead = (newHead: SubTask) => {
      this.setState(() => {
        return { projectData: newHead };
      })
    }
};
