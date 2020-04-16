import * as React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { UserInfo } from "./userInfo";
import { UserHeaderHttpRequest } from "./userHeaderHttpRequest";

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
}

export class NewSubTaskButton extends React.Component<INewSubTaskButtonProps> {

    constructor(props: INewSubTaskButtonProps) {
        super(props);

    }

    createNewSubTask = () => {

        // TODO
        // should be user from google oauth
        const newSubTask: INewTaskPost = { owner: this.props.userInfo.email, parentId: this.props.head, projectId: this.props.projectId, title: "New task", description: "", notes: "", assignedTo: null, status: "Active", progress: 0 };

        const request = new UserHeaderHttpRequest("/api/tasks", this.props.userInfo,  { 'Content-Type': 'application/json' });
        fetch(request,
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
        if(this.props.fontSize === 16){
            if(this.props.theme == "light") {
                return (
                    <Container fluid>
                        <Row>
                            <Button style={styles.button16} size="lg" variant="outline-primary" onClick={this.createNewSubTask}> + New Task </Button>
                        </Row>
                    </Container>
                );
            } else {
                return (
                    <Container fluid>
                        <Row>
                            <Button style={styles.button16} size="lg" variant="primary" onClick={this.createNewSubTask}> + New Task </Button>
                        </Row>
                    </Container>
                );
            }

        } else if(this.props.fontSize === 24){
            if(this.props.theme == "light") {
                return (
                    <Container fluid>
                        <Row>
                            <Button style={styles.button24} size="lg" variant="outline-primary" onClick={this.createNewSubTask}> + New Task </Button>
                        </Row>
                    </Container>
                );
            } else {
                return (
                    <Container fluid>
                        <Row>
                            <Button style={styles.button24} size="lg" variant="primary" onClick={this.createNewSubTask}> + New Task </Button>
                        </Row>
                    </Container>
                );
            }

        } else if(this.props.fontSize === 32){
            if(this.props.theme == "light") {
                return (
                    <Container fluid>
                        <Row>
                            <Button style={styles.button32} size="lg" variant="outline-primary" onClick={this.createNewSubTask}> + New Task </Button>
                        </Row>
                    </Container>
                );
            } else {
                return (
                    <Container fluid>
                        <Row>
                            <Button style={styles.button32} size="lg" variant="primary" onClick={this.createNewSubTask}> + New Task </Button>
                        </Row>
                    </Container>
                );
            }

        } else {
            if(this.props.theme == "light") {
                return (
                    <Container fluid>
                        <Row>
                            <Button style={styles.button40} size="lg" variant="outline-primary" onClick={this.createNewSubTask}> + New Task </Button>
                        </Row>
                    </Container>
                );
            } else {
                return (
                    <Container fluid>
                        <Row>
                            <Button style={styles.button40} size="lg" variant="primary" onClick={this.createNewSubTask}> + New Task </Button>
                        </Row>
                    </Container>
                );
            }

        }
    }
}
