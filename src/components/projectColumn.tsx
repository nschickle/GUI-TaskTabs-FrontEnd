import * as React from "react";

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import { ProjectButton } from "./newProjectButton";
import { SubTaskButton } from "./subTaskButton";
import { SubTask } from "./subtaskType";
import { UserInfo } from "./userInfo";
import { UserHeaderHttpRequest } from "./userHeaderHttpRequest";

const styles = {
    box: {
        paddingRight: 0,
        paddingLeft: 0,
        margin: 0,
        borderStyle: "solid",
        borderColor: "gray",
        height: window.innerHeight - 75,
        minWidth: 250
    }
};

interface ProjectColumnProps {
    head: number;
    changeHead: (newHead: number) => any;
    userInfo: UserInfo;
}

export class ProjectColumn extends React.Component<ProjectColumnProps, { error: any, isLoaded: boolean, projects: SubTask[] }> {
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

        const { error, isLoaded, projects } = this.state;
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
            return (
                <Container>
                    <Col style={styles.box} >
                        <ProjectButton changeHead={this.props.changeHead} userInfo={this.props.userInfo} />
                        {projects.map((task) => {
                            return <SubTaskButton name={task.title} percentage={task.progress} key={task._id} changeHead={this.props.changeHead} taskHead={task._id}></SubTaskButton>;
                        })}
                    </Col>
                </Container>
            );
        }
    }
}
