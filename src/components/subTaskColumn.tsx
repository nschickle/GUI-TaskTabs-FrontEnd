import * as React from 'react';
import styled from 'styled-components';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { SubTaskButton } from './subTaskButton';
import { SubTask } from './subtaskType';

const styles = {
    button: {
        width: window.innerWidth,
        height: 100,
        fontSize: 32
    },
    box: {
        paddingRight: 0,
        paddingLeft: 0,
        margin: 0,
        borderStyle: "solid",
        borderColor: "gray",
        height: window.innerHeight
    }
};

interface SubTaskColumnProps {
    subtasks: SubTask[];
    changeHead: (newHead: SubTask) => any;
}

// This creates the entire right-hand column of project page. It handles the button that creates a new task,
// and hands down a single element of a subtask array to create subtask buttons one by one.
export class SubTaskColumn extends React.Component<SubTaskColumnProps>{

    constructor(props: SubTaskColumnProps) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Col style={styles.box}>
                    <Row noGutters={true}>
                        <Button style={styles.button} size="lg" variant="outline-primary"> + New Task </Button>
                    </Row>
                    <Row noGutters={true}>
                        {this.props.subtasks.map((task) => {
                            return <SubTaskButton name={task.name} percentage={task.percentage} key={task.id} changeHead={this.props.changeHead} taskHead={task}></SubTaskButton>;
                        })}
                    </Row>
                </Col>
            </Container>
        );
    }
};
