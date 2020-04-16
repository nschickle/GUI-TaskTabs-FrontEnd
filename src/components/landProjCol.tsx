import * as React from "react";

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import { ProjectButton } from "./newProjectButton";
import { SubTaskButton } from "./subTaskButton";
import { Task } from "./taskType";
import { UserHeaderHttpRequest } from "./userHeaderHttpRequest";
import { UserInfo } from "./userInfo";

const styles = {
    box16: {
        paddingRight: 0,
        paddingLeft: 0,
        margin: 0,
        borderStyle: "solid",
        borderColor: "#15617c",
        borderRadius: 5,
        borderWidth: 1,
        height: window.innerHeight-275,
        minWidth: 250,
        overflow: "auto"
    },
    box24: {
        paddingRight: 0,
        paddingLeft: 0,
        margin: 0,
        borderStyle: "solid",
        borderColor: "#15617c",
        borderRadius: 5,
        borderWidth: 1,
        height: window.innerHeight-300,
        minWidth: 250,
        overflow: "auto"
    },
    box32: {
        paddingRight: 0,
        paddingLeft: 0,
        margin: 0,
        borderStyle: "solid",
        borderColor: "#15617c",
        borderRadius: 5,
        borderWidth: 1,
        height: window.innerHeight-315,
        minWidth: 250,
        overflow: "auto"
    },
    box40: {
        paddingRight: 0,
        paddingLeft: 0,
        margin: 0,
        borderStyle: "solid",
        borderColor: "#15617c",
        borderRadius: 5,
        borderWidth: 1,
        height: window.innerHeight-350,
        minWidth: 250,
        overflow: "auto"
    }
};

interface LandProjectColumnProps {
    selectProject: (projectID: number) => any;
    theme: string;
    fontSize: number;
    userInfo: UserInfo;
}

export class LandProjectColumn extends React.Component<LandProjectColumnProps, { error: any, isLoaded: boolean, projects: Task[] }> {

    constructor(props: LandProjectColumnProps) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            projects: []
        };
    }

    componentDidMount() {
        this.getProjects();
    }

    // If/when the project list needs to be updated to reflect a database
    // change, a componentDidUpdate() function will need to be added so that
    // the query can be re-run
    getProjects = () => {
        const request = new UserHeaderHttpRequest("/api/projects", this.props.userInfo);
        fetch(request)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        projects: result,
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

    public render() {
        const { error, isLoaded, projects} = this.state;
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
            if(this.props.fontSize === 16){
                return (
                    <Container>
                        <Col style={styles.box16} >
                            <ProjectButton changeHead={this.props.selectProject} theme = {this.props.theme} fontSize = {this.props.fontSize} userInfo={this.props.userInfo}/>
                            {projects.map((task) => {
                                return <SubTaskButton name={task.title} changeHead={this.props.selectProject} percentage={task.progress} key={task._id} taskHead={task._id} theme = {this.props.theme} fontSize={this.props.fontSize}></SubTaskButton>;
                            })}
                        </Col>
                    </Container>
                );

            } else if(this.props.fontSize === 24){
                return (
                    <Container>
                        <Col style={styles.box24} >
                            <ProjectButton changeHead={this.props.selectProject} theme = {this.props.theme} fontSize = {this.props.fontSize} userInfo={this.props.userInfo}/>
                            {projects.map((task) => {
                                return <SubTaskButton name={task.title} changeHead={this.props.selectProject} percentage={task.progress} key={task._id} taskHead={task._id} theme = {this.props.theme} fontSize={this.props.fontSize}></SubTaskButton>;
                            })}
                        </Col>
                    </Container>
                );

            } else if(this.props.fontSize === 32){
                return (
                    <Container>
                        <Col style={styles.box32} >
                            <ProjectButton changeHead={this.props.selectProject} theme = {this.props.theme} fontSize = {this.props.fontSize} userInfo={this.props.userInfo}/>
                            {projects.map((task) => {
                                return <SubTaskButton name={task.title} changeHead={this.props.selectProject} percentage={task.progress} key={task._id} taskHead={task._id} theme = {this.props.theme} fontSize={this.props.fontSize}></SubTaskButton>;
                            })}
                        </Col>
                    </Container>
                );

            } else {
                return (
                    <Container>
                        <Col style={styles.box40} >
                            <ProjectButton changeHead={this.props.selectProject} theme = {this.props.theme} fontSize = {this.props.fontSize} userInfo={this.props.userInfo}/>
                            {projects.map((task) => {
                                return <SubTaskButton name={task.title} changeHead={this.props.selectProject} percentage={task.progress} key={task._id} taskHead={task._id} theme = {this.props.theme} fontSize={this.props.fontSize}></SubTaskButton>;
                            })}
                        </Col>
                    </Container>
                );

            }
        }
    }

}
