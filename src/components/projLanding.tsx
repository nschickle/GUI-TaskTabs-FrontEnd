import * as React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { Task } from "./taskType";
import { LandProjectColumn } from "./landProjCol";
import { UserInfo } from "./userInfo";

const font16 = {
    title: {
        fontSize: 96,
        margin: "auto",
        borderBottom: "dotted",
        paddingRight: 15,
        paddingLeft: 15,
        marginBottom: 10
    },
    label: {
        fontSize: 24,
        margin: "auto",
        marginBottom: 15,
        borderBottom: "dotted",
        paddingRight: 15,
        paddingLeft: 15
    },
};

const font24 = {
    title: {
        fontSize: 96,
        margin: "auto",
        borderBottom: "dotted",
        paddingRight: 15,
        paddingLeft: 15,
        marginBottom: 10
    },
    label: {
        fontSize: 32,
        margin: "auto",
        marginBottom: 15,
        borderBottom: "dotted",
        paddingRight: 15,
        paddingLeft: 15
    },
};

const font32 = {
    title: {
        fontSize: 96,
        margin: "auto",
        borderBottom: "dotted",
        paddingRight: 15,
        paddingLeft: 15,
        marginBottom: 10
    },
    label: {
        fontSize: 40,
        margin: "auto",
        marginBottom: 15,
        borderBottom: "dotted",
        paddingRight: 15,
        paddingLeft: 15
    },
};

const font40 = {
    title: {
        fontSize: 96,
        margin: "auto",
        borderBottom: "dotted",
        paddingRight: 15,
        paddingLeft: 15,
        marginBottom: 10
    },
    label: {
        fontSize: 48,
        margin: "auto",
        marginBottom: 15,
        borderBottom: "dotted",
        paddingRight: 15,
        paddingLeft: 15
    },
}

const styles = {
    center: {
        marginTop: 10
    },
    projects: {
        width: window.innerWidth / 3,
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
    theme: string;
    fontSize: number;
    userInfo: UserInfo;
    showLoading: () => any;
}

export class ProjectLanding extends React.Component<ProjLandProps, { error: any, isLoaded: boolean, task: Task, head: number, showProjectPage: (projectID: number) => any }> {
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
        if(this.props.fontSize === 16){
            return(
                <Container fluid>
                    <Row style={styles.center}>
                        <h1 style={font16.title}>TaskTabs</h1>
                    </Row>
                    <Row>
                        <p style={font16.label}>Welcome, {this.owner.name}. Here are your Projects!</p>
                    </Row>
                    <Row style={styles.projects} noGutters={true}>
                        <LandProjectColumn selectProject={this.selectProject} theme={this.props.theme} fontSize={this.props.fontSize} userInfo={this.props.userInfo} showLoading = {this.props.showLoading}/>
                    </Row>
                </Container>
            );

        } else if(this.props.fontSize === 24){
            return(
                <Container fluid>
                    <Row style={styles.center}>
                        <h1 style={font24.title}>TaskTabs</h1>
                    </Row>
                    <Row>
                        <p style={font24.label}>Welcome, {this.owner.name}. Here are your Projects!</p>
                    </Row>
                    <Row style={styles.projects} noGutters={true}>
                        <LandProjectColumn selectProject={this.selectProject} theme={this.props.theme} fontSize={this.props.fontSize} userInfo={this.props.userInfo} showLoading = {this.props.showLoading}/>
                    </Row>
                </Container>
            );

        } else if(this.props.fontSize === 32){
            return(
                <Container fluid>
                    <Row style={styles.center}>
                        <h1 style={font32.title}>TaskTabs</h1>
                    </Row>
                    <Row>
                        <p style={font32.label}>Welcome, {this.owner.name}. Here are your Projects!</p>
                    </Row>
                    <Row style={styles.projects} noGutters={true}>
                        <LandProjectColumn selectProject={this.selectProject} theme={this.props.theme} fontSize={this.props.fontSize} userInfo={this.props.userInfo} showLoading = {this.props.showLoading}/>
                    </Row>
                </Container>
            );

        } else{
            return(
                <Container fluid>
                    <Row style={styles.center}>
                        <h1 style={font40.title}>TaskTabs</h1>
                    </Row>
                    <Row>
                        <p style={font40.label}>Welcome, {this.owner.name}. Here are your Projects!</p>
                    </Row>
                    <Row style={styles.projects} noGutters={true}>
                        <LandProjectColumn selectProject={this.selectProject} theme={this.props.theme} fontSize={this.props.fontSize} userInfo={this.props.userInfo} showLoading = {this.props.showLoading}/>
                    </Row>
                </Container>
            );

        }
    }
};
