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
export class MainPage extends React.Component<MainPageProps, {error: any, isLoaded: boolean, task: SubTask, head: number, projectPageUp: any}>{

    constructor(props: MainPageProps) {
      super(props);

      this.state = {
        error: null,
        isLoaded: false,
        task: null,
        head: undefined,
        projectPageUp: props.projectPageUp
      };

      this.handleStateChange = this.handleStateChange.bind(this);
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

    handleStateChange = (pageUp: boolean) => {
        this.setState({projectPageUp: pageUp})
    }

    render() {
        const { error, isLoaded, task, head, projectPageUp } = this.state;
        let showPage;
        if(projectPageUp){
            showPage = <Container fluid>
                <Row>
                <NavBar handleStateChange = {this.handleStateChange}/>
                </Row>
                <Row><ProjectPage handleStateChange = {this.handleStateChange} changeHead={this.changeHead}/></Row></Container>;
        }
        else{
            showPage = <Container fluid>
                <Row>
                <NavBar handleStateChange = {this.handleStateChange}/>
                </Row>
                <Row>
                <ProjectLanding handleStateChange = {this.handleStateChange} changeHead={this.changeHead}/>
                </Row></Container>;
        }

        return (
            showPage
        )
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
}
