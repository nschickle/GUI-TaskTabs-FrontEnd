import * as React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Task } from "./taskType";
import { SubTaskButton } from './subTaskButton';
import { NewSubTaskButton } from "./newSubTaskButton";
import { UserHeaderHttpRequest } from './userHeaderHttpRequest';
import { UserInfo } from './userInfo';

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
    head: number;
    changeHead: (newHead: number) => any;
    projectId: number;
    userInfo: UserInfo;
}

// This creates the entire right-hand column of project page. It handles the button that creates a new task,
// and hands down a single element of a subtask array to create subtask buttons one by one.
export class SubTaskColumn extends React.Component<SubTaskColumnProps, { error: any, isLoaded: boolean, subTasks: Task[] }>{
    head: number;
    constructor(props: SubTaskColumnProps) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            subTasks: []
        };

        this.head = this.props.head;
    }

    componentDidMount() {
        this.head = this.props.head;
        this.makeSubTaskQuery(5);
    }

    componentDidUpdate() {
        if (this.props.head !== this.head) {
            this.head = this.props.head;
            this.setState({ isLoaded: false });
            this.makeSubTaskQuery(5);
        }
    }

    // This will attempt to fetch from the database a given number of times.
    // This is needed because if the head was recently inserted, the fetch will
    // likely return null as the database will not have caught up yet.
    makeSubTaskQuery = (numTries: number) => {
        if (numTries == 0) {
            this.setState({
                isLoaded: false,
                error: true
            });
        } else {
            const request = new UserHeaderHttpRequest(`/api/subtasks/${this.props.head}`, this.props.userInfo);
            fetch(request)
                .then(res => res.json())
                .then(
                    (result) => {
                        if (result) {
                            this.setState({
                                isLoaded: true,
                                subTasks: result,
                            });
                        } else {
                            this.makeSubTaskQuery(numTries - 1);
                        }
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
                            <NewSubTaskButton head={this.props.head} changeHead={this.props.changeHead} userInfo={this.props.userInfo} projectId={this.props.projectId}/>
                        </Row>
                        <Row noGutters={true}>
                            {subTasks.map((task) => {
                                return <SubTaskButton name={task.title} percentage={task.progress} key={task._id} changeHead={this.props.changeHead} taskHead={task._id} ></SubTaskButton>;
                            })}
                        </Row>
                    </Col>
                </Container>
            );
        }
    }
};
