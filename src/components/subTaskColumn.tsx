import * as React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

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
    showLoading: () => any;
}

// This creates the entire right-hand column of project page. It handles the button that creates a new task,
// and hands down a single element of a subtask array to create subtask buttons one by one.
export class SubTaskColumn extends React.Component<SubTaskColumnProps, { error: any, isLoaded: boolean, subTasks: Task[]}>{
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
        this.makeSubTaskQuery();
    }

    componentDidUpdate() {
        if (this.props.head !== this.head) {
            this.head = this.props.head;
            this.setState({ isLoaded: false });
            this.makeSubTaskQuery();
        }
    }

    // This will attempt to fetch from the database a given number of times.
    // This is needed because if the head was recently inserted, the fetch will
    // likely return null as the database will not have caught up yet.
    makeSubTaskQuery = () => {
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

    render() {
        const { error, isLoaded, subTasks } = this.state;

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
                        <NewSubTaskButton isLoaded={isLoaded} head={this.props.head} changeHead={this.props.changeHead} theme={this.props.theme} fontSize={this.props.fontSize} userInfo={this.props.userInfo} projectId={this.props.projectId} showLoading={this.props.showLoading}/>
                    </Col>
                </Container>
            );
        } else {
            return (
                <Container>
                    <Col style={style}>
                        <Row noGutters={true}>
                            <NewSubTaskButton isLoaded={isLoaded} head={this.props.head} changeHead={this.props.changeHead} theme={this.props.theme} fontSize={this.props.fontSize} userInfo={this.props.userInfo} projectId={this.props.projectId} showLoading={this.props.showLoading}/>
                        </Row>
                        <Row noGutters={true}>
                            {subTasks.map((task) => {
                                return <SubTaskButton name={task.title} percentage={task.progress} key={task._id} changeHead={this.props.changeHead} taskHead={task._id} theme={this.props.theme} fontSize={this.props.fontSize} showLoading={this.props.showLoading}></SubTaskButton>;
                            })}
                        </Row>
                    </Col>
                </Container>
            );
        }
    }
};
