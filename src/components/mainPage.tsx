import * as React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { NavBar } from './navBar';
import { ProjectPage } from './projectPage';
import { ProjectLanding } from './projLanding';
import { number } from "prop-types";

interface MainPageProps {
    projectPageUp: boolean;
}

// TODO:
// Make it so choosing a project on the landing changes it on project page
export class MainPage extends React.Component<MainPageProps, { projectPageUp: boolean, projectID: number}>{

    constructor(props: MainPageProps) {
      super(props);

      this.state = {
        projectPageUp: props.projectPageUp,
        projectID: null
      };
    }

    showProjectPage = (projectID: number) => {
        this.setState({projectPageUp: true});
        this.setState({projectID: projectID});
    }


    // Currently makes projectID null because it's state can't be guarentee
    hideProjectPage = () => {
        this.setState({projectPageUp: false});
        this.setState({projectID: null});
    }

    render() {
        const { projectPageUp } = this.state;
        let showPage;
        if(projectPageUp){
            showPage = <Container fluid>
                <Row>
                <NavBar hideProjectPage = {this.hideProjectPage}/>
                </Row>
                <Row><ProjectPage showProjectPage = {this.showProjectPage} /></Row></Container>;
        }
        else{
            showPage = <Container fluid>
                <Row>
                  <NavBar hideProjectPage = {this.hideProjectPage}/>
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
