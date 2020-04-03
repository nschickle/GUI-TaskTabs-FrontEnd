import * as React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { NavBar } from './navBar';
import { ProjectPage } from './projectPage';
import { ProjectLanding } from './projLanding';
import { SubTask } from './subtaskType';
import ApplicationConfig from './applicationConfig';

interface MainPageProps {
    projectPageUp: boolean;
}

// TODO:
// Make it so choosing a project on the landing changes it on project page
export class MainPage extends React.Component<MainPageProps, { projectPageUp: any}>{

    constructor(props: MainPageProps) {
      super(props);

      this.state = {
        projectPageUp: props.projectPageUp
      };
    }

    showProjectPage = (pageUp: boolean) => {
        this.setState({projectPageUp: pageUp})
    }

    render() {
        const { projectPageUp } = this.state;
        let showPage;
        if(projectPageUp){
            showPage = <Container fluid>
                <Row>
                <NavBar showProjectPage = {this.showProjectPage}/>
                </Row>
                <Row><ProjectPage showProjectPage = {this.showProjectPage}/></Row></Container>;
        }
        else{
            showPage = <Container fluid>
                <Row>
                <NavBar showProjectPage = {this.showProjectPage}/>
                </Row>
                <Row>
                <ProjectLanding showProjectPage = {this.showProjectPage}/>
                </Row></Container>;
        }

        return (
            showPage
        )
    }
}
