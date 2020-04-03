import * as React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import { SubTask } from "./subtaskType";
import { SubTaskButton } from './subTaskButton';
import ApplicationConfig from './applicationConfig';

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
        height: window.innerHeight - 75,
        minWidth: 200
    }
};

interface SubTaskColumnProps {
    head: number,
    changeHead: (newHead: number) => any
}

// This creates the entire right-hand column of project page. It handles the button that creates a new task,
// and hands down a single element of a subtask array to create subtask buttons one by one.
export class SubTaskColumn extends React.Component<SubTaskColumnProps, { error: any, isLoaded: boolean, subTasks: SubTask[]}>{
    head: number;
    constructor(props: SubTaskColumnProps) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            subTasks: [],
        };

        this.head = this.props.head;
    }

    componentDidMount() {
        this.head = this.props.head;
        this.getSubtasks();
    }

    componentDidUpdate() {
        if(this.props.head !== this.head) {
            this.head = this.props.head;
            this.getSubtasks();
        }
    }

    getSubtasks = () => {
        fetch(`${ApplicationConfig.api.staging.baseUrl}/api/subtasks/${this.props.head}`)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    subTasks: result,
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

    render() {
        const { error, isLoaded, subTasks } = this.state;
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
                    <Col style={styles.box}>
                        <Row noGutters={true}>
                            <Button style={styles.button} size="lg" variant="outline-primary"> + New Task </Button>
                        </Row>
                        <Row noGutters={true}>
                            {subTasks.map((task) => {
                                return <SubTaskButton name={task.title} percentage={task.progress} key={task._id} changeHead={this.props.changeHead} taskHead={task._id}></SubTaskButton>;
                            })}
                        </Row>
                    </Col>
                </Container>
            );
        }
    }
};
