import * as React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Task } from "./taskType";
import { SubTaskButton } from './subTaskButton';
import { NewSubTaskButton } from "./newSubTaskButton";
import { UserHeaderHttpRequest } from './userHeaderHttpRequest';
import { UserInfo } from './userInfo';
import { RetryableFetch } from './retryableFetch';

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

interface SubTaskColumnProps {
    head: number;
    changeHead: (newHead: number) => any;
    theme: string;
    fontSize: number;
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
            RetryableFetch.fetch_retry(request)
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
            if(this.props.fontSize === 16) {
                return (
                    <Container>
                        <Col style={styles.box16}>
                            <Row noGutters={true}>
                                <NewSubTaskButton head={this.props.head} changeHead={this.props.changeHead} theme = {this.props.theme} fontSize={this.props.fontSize}  userInfo={this.props.userInfo} projectId={this.props.projectId}/>
                            </Row>
                            <Row noGutters={true}>
                                {subTasks.map((task) => {
                                    return <SubTaskButton name={task.title} percentage={task.progress} key={task._id} changeHead={this.props.changeHead} taskHead={task._id} theme = {this.props.theme} fontSize = {this.props.fontSize}></SubTaskButton>;
                                })}
                            </Row>
                        </Col>
                    </Container>
                );
            } else if(this.props.fontSize === 40) {
                return (
                    <Container>
                        <Col style={styles.box40}>
                            <Row noGutters={true}>
                                <NewSubTaskButton head={this.props.head} changeHead={this.props.changeHead} theme = {this.props.theme} fontSize={this.props.fontSize}  userInfo={this.props.userInfo} projectId={this.props.projectId}/>
                            </Row>
                            <Row noGutters={true}>
                                {subTasks.map((task) => {
                                    return <SubTaskButton name={task.title} percentage={task.progress} key={task._id} changeHead={this.props.changeHead} taskHead={task._id} theme = {this.props.theme} fontSize = {this.props.fontSize}></SubTaskButton>;
                                })}
                            </Row>
                        </Col>
                    </Container>
                );
            } else {
                return (
                    <Container>
                        <Col style={styles.box}>
                            <Row noGutters={true}>
                                <NewSubTaskButton head={this.props.head} changeHead={this.props.changeHead} theme = {this.props.theme} fontSize={this.props.fontSize}  userInfo={this.props.userInfo} projectId={this.props.projectId}/>
                            </Row>
                            <Row noGutters={true}>
                                {subTasks.map((task) => {
                                    return <SubTaskButton name={task.title} percentage={task.progress} key={task._id} changeHead={this.props.changeHead} taskHead={task._id} theme = {this.props.theme} fontSize = {this.props.fontSize}></SubTaskButton>;
                                })}
                            </Row>
                        </Col>
                    </Container>
                );
            }
        }
    }
};
