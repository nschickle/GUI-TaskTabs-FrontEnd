import * as React from "react";

import { ProjectButton } from "./newProjectButton";
import { SubTaskButton } from "./subTaskButton";
import { SubTask } from "./subtaskType";

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

const styles = {
    box: {
        paddingRight: 0,
        paddingLeft: 0,
        margin: 0,
        borderStyle: "solid",
        borderColor: "gray",
        height: window.innerHeight,
        minWidth: 250
    }
};

interface IProjectColumnProps {
    projects: SubTask[],
    head: number,
    changeHead: (newHead: number) => any,
}

export class ProjectColumn extends React.Component<IProjectColumnProps> {

    constructor(props: IProjectColumnProps) {
        super(props);

    }

    public render() {

        return (
            <Container>
                <Col style={styles.box} >
                    <ProjectButton />
                    {this.props.projects.map((task) => {
                         return <SubTaskButton name={task.title} percentage={task.progress} key={task._id} changeHead={this.props.changeHead} taskHead={this.props.head}></SubTaskButton>;
                    })}
                </Col>
            </Container>
        );
    }
}
