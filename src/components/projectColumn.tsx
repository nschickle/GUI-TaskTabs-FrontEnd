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
    task: SubTask;
    changeHead: (newHead: SubTask) => any;
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
                    <SubTaskButton name={this.props.task.name} percentage={this.props.task.percentage}
                        key={this.props.task.id} changeHead={this.props.changeHead}
                        taskHead={this.props.task}></SubTaskButton>
                </Col>
            </Container>
        );
    }
}
