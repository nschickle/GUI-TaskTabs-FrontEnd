import * as React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import { UserInfo } from "./userInfo";
import { UserHeaderHttpRequest } from "./userHeaderHttpRequest";
import { RetryableFetch } from "./retryableFetch";

const styles = {
    button16: {
        width: window.innerWidth,
        height: 50,
        fontSize: 16
    },
    button24: {
        width: window.innerWidth,
        height: 75,
        fontSize: 24
    },
    button32: {
        width: window.innerWidth,
        height: 100,
        fontSize: 32
    },
    button40: {
        width: window.innerWidth,
        height: 125,
        fontSize: 40
    }
};

interface INewTaskPost {
    owner: string;
    parentId: number;
    projectId: number;
    title: string;
    description: string;
    notes: string;
    assignedTo: number;
    status: string;
    progress: number;
}

interface INewSubTaskButtonProps {
    head: number;
    changeHead: (newHead: number) => any;
    theme: string;
    fontSize: number;
    projectId: number;
    userInfo: UserInfo;
    showLoading: () => any;
    isLoaded: boolean;
}

export class NewSubTaskButton extends React.Component<INewSubTaskButtonProps, { showLoading: () => any }> {

    constructor(props: INewSubTaskButtonProps) {
        super(props);

        this.state = {
            showLoading: props.showLoading
        }
    }

    createNewSubTask = () => {
        this.state.showLoading();

        // TODO
        // should be user from google oauth
        const newSubTask: INewTaskPost = { owner: this.props.userInfo.email, parentId: this.props.head, projectId: this.props.projectId, title: "New task", description: "", notes: "", assignedTo: null, status: "Active", progress: 0 };

        const request = new UserHeaderHttpRequest("/api/tasks", this.props.userInfo, { 'Content-Type': 'application/json' });
        RetryableFetch.fetch_retry(request,
            {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(newSubTask)
            }).then((response) => response.json())
            .then((data) => {
                // This will refresh the page with the new task as the current head.
                this.props.changeHead(data._id);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    public render() {

        let style;
        if (this.props.fontSize == 16) {
            style = styles.button16;
        } else if (this.props.fontSize == 24) {
            style = styles.button24;
        } else if (this.props.fontSize == 32) {
            style = styles.button32;
        } else {
            style = styles.button40;
        }

        if (!this.props.isLoaded) {
            if (this.props.theme === "light") {
                return (
                    <Container fluid>
                        <Row>
                            <Button style={style} size="lg" variant="outline-primary" disabled>
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                            </Button>
                        </Row>
                    </Container>
                );
            } else {
                return (
                    <Container fluid>
                        <Row>
                            <Button style={style} size="lg" variant="primary" disabled>
                                <Spinner
                                    as="span"
                                    animation="border"
                                    size="sm"
                                    role="status"
                                    aria-hidden="true"
                                />
                            </Button>
                        </Row>
                    </Container>
                );
            }
        }
        
        if (this.props.theme == "light") {
            return (
                <Container fluid>
                    <Row>
                        <Button style={style} size="lg" variant="outline-primary" onClick={this.createNewSubTask}> + New Task </Button>
                    </Row>
                </Container>
            );
        } else {
            return (
                <Container fluid>
                    <Row>
                        <Button style={style} size="lg" variant="primary" onClick={this.createNewSubTask}> + New Task </Button>
                    </Row>
                </Container>
            );
        }

    }
}
