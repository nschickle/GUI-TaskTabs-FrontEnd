import * as React from "react";

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

import { ProjectButton } from "./newProjectButton";
import { SubTaskButton } from "./subTaskButton";
import { Task } from "./taskType";
import { UserInfo } from "./userInfo";
import { UserHeaderHttpRequest } from "./userHeaderHttpRequest";
import { RetryableFetch } from "./retryableFetch";

const styles = {
    box: {
        paddingRight: 0,
        paddingLeft: 0,
        margin: 0,
        borderStyle: "solid",
        borderColor: "#15617c",
        height: window.innerHeight - 175,
        minWidth: 250,
        overflow: "auto",
        borderRadius: 5,
        borderWidth: 1
    },
    box16: {
        paddingRight: 0,
        paddingLeft: 0,
        margin: 0,
        borderStyle: "solid",
        borderColor: "#15617c",
        height: window.innerHeight - 135,
        minWidth: 250,
        overflow: "auto",
        borderRadius: 5,
        borderWidth: 1
    },
    box40: {
        paddingRight: 0,
        paddingLeft: 0,
        margin: 0,
        borderStyle: "solid",
        borderColor: "#15617c",
        height: window.innerHeight - 210,
        minWidth: 250,
        overflow: "auto",
        borderRadius: 5,
        borderWidth: 1
    }
};

interface ProjectColumnProps {
    head: number;
    changeHead: (newHead: number) => any;
    theme: string;
    fontSize: number;
    userInfo: UserInfo;
    showLoading: () => any;
}

export class ProjectColumn extends React.Component<ProjectColumnProps, { error: any, isLoaded: boolean, projects: Task[] }> {
    head: number;

    constructor(props: ProjectColumnProps) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            projects: [],
        };

        this.head = this.props.head;
    }

    componentDidMount() {
        this.head = this.props.head;
        this.getProjects();
    }

    componentDidUpdate() {
        if (this.props.head !== this.head) {
            this.head = this.props.head;
            this.setState({ isLoaded: false });
            this.getProjects();
        }
    }

    // If/when the project list needs to be updated to reflect a database
    // change, a componentDidUpdate() function will need to be added so that
    // the query can be re-run
    getProjects = () => {
        const request = new UserHeaderHttpRequest("/api/projects", this.props.userInfo);
        RetryableFetch.fetch_retry(request)
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

        const { error, isLoaded, projects } = this.state;

        let style;
        if (this.props.fontSize == 16) {
            style = styles.box16;
        } else if (this.props.fontSize == 24) {
            style = styles.box;
        } else if (this.props.fontSize == 32) {
            style = styles.box;
        } else {
            style = styles.box40;
        }
        if (error) {
            return (
                <Container>
                    <Col style={style} >
                        <Alert variant="danger">
                            <Alert.Heading>We've Experienced an Error</Alert.Heading>
                            <p> We could not establish a connection with our database. We apologise for the inconvenience. Please try again later.</p>
                        </Alert>
                    </Col>
            </Container>
            );
        } else if (!isLoaded) {
            return (
                <Container>
                    <Col style={style} >
                        <ProjectButton isLoaded={isLoaded} changeHead={this.props.changeHead} theme={this.props.theme} fontSize={this.props.fontSize} userInfo={this.props.userInfo} showLoading={this.props.showLoading}/>
                    </Col>
                </Container>
            );
        } else {
            return (
                <Container>
                    <Col style={style} >
                        <ProjectButton isLoaded={isLoaded} changeHead={this.props.changeHead} theme={this.props.theme} fontSize={this.props.fontSize} userInfo={this.props.userInfo} showLoading={this.props.showLoading}/>
                        {projects.map((task) => {
                            return <SubTaskButton name={task.title} percentage={task.progress} key={task._id} changeHead={this.props.changeHead} taskHead={task._id} theme={this.props.theme} fontSize={this.props.fontSize} showLoading={this.props.showLoading}></SubTaskButton>;
                        })}
                    </Col>
                </Container>
            );
        }
    }
}
