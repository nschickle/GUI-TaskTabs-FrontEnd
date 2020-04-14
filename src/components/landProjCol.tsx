import * as React from "react";

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

import { ProjectButton } from "./newProjectButton";
import { SubTaskButton } from "./subTaskButton";
import { SubTask } from "./subtaskType";
import { UserHeaderHttpRequest } from "./userHeaderHttpRequest";
import { UserInfo } from "./userInfo";

const styles = {
    box: {
        paddingRight: 0,
        paddingLeft: 0,
        margin: 0,
        borderStyle: "solid",
        borderColor: "gray",
        height: window.innerHeight-350,
        minWidth: 250
    }
};

interface LandProjectColumnProps {
    selectProject: (projectID: number) => any;
    userInfo: UserInfo;
}

export class LandProjectColumn extends React.Component<LandProjectColumnProps, {error: any, isLoaded: boolean, projects: SubTask[]}> {

    constructor(props: LandProjectColumnProps) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            projects: [],
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
                        <ProjectButton changeHead={this.props.selectProject} userInfo={this.props.userInfo}/>
                        {projects.map((task) => {
                            return <SubTaskButton name={task.title} changeHead={this.props.selectProject} percentage={task.progress} key={task._id} taskHead={task._id}></SubTaskButton>;
                        })}
                    </Col>
                </Container>
            );
        }
    }

}
