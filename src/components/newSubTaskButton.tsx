import * as React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { UserInfo } from "./userInfo";
import { UserHeaderHttpRequest } from "./userHeaderHttpRequest";

const styles = {
    button: {
        width: window.innerWidth,
        height: 100,
        fontSize: 32
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
        return (
            <Container fluid>
                <Row>
                    <Button style={styles.button} size="lg" variant="outline-primary" onClick={this.createNewSubTask}> + New Task </Button>
                </Row>
            </Container>
        );
    }
}
