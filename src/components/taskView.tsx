import * as React from 'react';
import styled from 'styled-components';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { TaskProgressBar } from './progressBar';
import { StatusDropdown } from './statusDropdown';
import { AssignedDropdown } from './assignedDropdown';
import { ShareUsers } from './shareUsers';
import { Task } from "./taskType";
import { UserHeaderHttpRequest } from './userHeaderHttpRequest';
import { UserInfo } from './userInfo';
import { RetryableFetch } from './retryableFetch';

const font16 = {
    font: {
        fontSize: 16
    },
    darkFont: {
        fontSize: 16,
        backgroundColor: "#232931",
        color: "#f8f9e8"
    },
    name: {
        fontSize: 32,
        maxHeight: 150,
        margin: 20,
        marginTop: 0,
        width: 590
    },
    darkName: {
        fontSize: 32,
        maxHeight: 150,
        margin: 20,
        marginTop: 0,
        width: 590,
        backgroundColor: "#232931",
        color: "#f8f9e8"
    },
    desc: {
        fontSize: 16,
        marginBottom: 10,
        maxHeight: 375
    },
    descDark: {
        fontSize: 16,
        marginBottom: 10,
        maxHeight: 375,
        backgroundColor: "#232931",
        color: "#f8f9e8"
    },
    descDarkBox: {
        fontSize: 16,
        marginBottom: 10,
        maxHeight: 375,
        backgroundColor: "#343a40",
        color: "#f8f9e8"
    },
    saveButton: {
        height: 75,
        width: 130,
        fontSize: 16
    },
    deleteButton: {
        margin: "auto",
        marginTop: 20,
        fontSize: 16,
        width: 130,
    },
    datePick: {
        fontSize: 16,
        margin: "auto",
        marginTop: 10
    },
    historyButton: {
        height: 112,
        minWidth: 100,
        fontSize: 16
    }

};

const font24 = {
    font: {
        fontSize: 24
    },
    darkFont: {
        fontSize: 24,
        backgroundColor: "#232931",
        color: "#f8f9e8"
    },
    name: {
        fontSize: 36,
        maxHeight: 150,
        margin: 20,
        marginTop: 10,
        width: 590
    },
    darkName: {
        fontSize: 36,
        maxHeight: 150,
        margin: 20,
        marginTop: 10,
        width: 590,
        backgroundColor: "#232931",
        color: "#f8f9e8"
    },
    desc: {
        fontSize: 24,
        marginBottom: 10,
        maxHeight: 250
    },
    descDark: {
        fontSize: 24,
        marginBottom: 10,
        maxHeight: 250,
        backgroundColor: "#232931",
        color: "#f8f9e8"
    },
    descDarkBox: {
        fontSize: 24,
        marginBottom: 10,
        maxHeight: 250,
        backgroundColor: "#343a40",
        color: "#f8f9e8"
    },
    saveButton: {
        height: 85,
        width: 145,
        fontSize: 24
    },
    deleteButton: {
        margin: "auto",
        marginTop: 30,
        width: 145,
        fontSize: 24
    },
    datePick: {
        fontSize: 24,
        margin: "auto",
        marginTop: 10
    },
    historyButton: {
        height: 150,
        minWidth: 100,
        fontSize: 24
    }

};

const font32 = {
    font: {
        fontSize: 32
    },
    darkFont: {
        fontSize: 32,
        backgroundColor: "#232931",
        color: "#f8f9e8"
    },
    name: {
        fontSize: 44,
        maxHeight: 150,
        margin: 20,
        marginTop: 10,
        width: 590
    },
    darkName: {
        fontSize: 44,
        maxHeight: 150,
        margin: 20,
        marginTop: 10,
        width: 590,
        backgroundColor: "#232931",
        color: "#f8f9e8"
    },
    desc: {
        fontSize: 32,
        marginBottom: 10,
        maxHeight: 250
    },
    descDark: {
        fontSize: 32,
        marginBottom: 10,
        maxHeight: 250,
        backgroundColor: "#232931",
        color: "#f8f9e8"
    },
    descDarkBox: {
        fontSize: 32,
        marginBottom: 10,
        maxHeight: 250,
        backgroundColor: "#343a40",
        color: "#f8f9e8"
    },
    saveButton: {
        height: 100,
        width: 160,
        fontSize: 32
    },
    deleteButton: {
        margin: "auto",
        marginTop: 30,
        fontSize: 32
    },
    datePick: {
        fontSize: 32,
        margin: "auto",
        marginTop: 10
    },
    historyButton: {
        height: 184,
        minWidth: 100,
        fontSize: 32
    }

};

const font40 = {
    font: {
        fontSize: 40
    },
    darkFont: {
        fontSize: 40,
        backgroundColor: "#232931",
        color: "#f8f9e8"
    },
    name: {
        fontSize: 48,
        maxHeight: 150,
        margin: 20,
        marginTop: 10,
        width: 590
    },
    darkName: {
        fontSize: 48,
        maxHeight: 150,
        margin: 20,
        marginTop: 10,
        width: 590,
        backgroundColor: "#232931",
        color: "#f8f9e8"
    },
    desc: {
        fontSize: 36,
        marginBottom: 10,
        maxHeight: 250
    },
    descDark: {
        fontSize: 36,
        marginBottom: 10,
        maxHeight: 140,
        backgroundColor: "#232931",
        color: "#f8f9e8"
    },
    descDarkBox: {
        fontSize: 36,
        marginBottom: 10,
        maxHeight: 140,
        backgroundColor: "#343a40",
        color: "#f8f9e8"
    },
    saveButton: {
        height: 100,
        width: 160,
        fontSize: 40
    },
    deleteButton: {
        margin: "auto",
        marginTop: 30,
        fontSize: 40
    },
    datePick: {
        fontSize: 36,
        margin: "auto",
        marginTop: 10
    },
    historyButton: {
        height: 184,
        minWidth: 100,
        fontSize: 40
    }

};

const styles = {
    container: {
        paddingLeft: 10,
        paddingRight: 10,
        minWidth: 650,
    },
    row: {
        minWidth: 300
    },
    sharedTab: {
        borderColor: "gray",
        borderStyle: "solid",
        borderRight: "none",
        borderWidth: 1,
        borderRadius: 5,
        padding: 0,
        margin: "auto",
        marginRight: 0,
        marginLeft: 0
    },
    sharedTabDark: {
        borderColor: "gray",
        borderStyle: "solid",
        borderRight: "none",
        borderWidth: 1,
        borderRadius: 5,
        padding: 0,
        margin: "auto",
        marginRight: 0,
        marginLeft: 0,
        backgroundColor: "#343a40",
        color: "#f8f9e8"
    }
}

const LabelText16 = styled.div`
    font-size: 15px;
    text-align: center;
    margin: auto;
    margin-bottom: 5px;
    width: 250px;
`;

const LabelText24 = styled.div`
    font-size: 24px;
    text-align: center;
    margin: auto;
    margin-bottom: 5px;
    width: 250px;
`;

const LabelText32 = styled.div`
    font-size: 32px;
    text-align: center;
    margin: auto;
    margin-bottom: 5px;
    width: 250px;
`;

const LabelText40 = styled.div`
    font-size: 36px;
    text-align: center;
    margin: auto;
    margin-bottom: 5px;
    width: 250px;
`;

interface Options {
    id: number;
    value: string;
    label: string;
};

interface User {
    id: number;
    name: string;
};

interface TaskViewProps {
    taskID: number;
    changeHead: (newHead: number) => any;
    parentId: number;
    projectId: number;
    name: string;
    completion: number;
    description: string;
    dueDate: Date;
    status: string;
    assignee: number;
    owner: User;
    sharedUsers: User[];
    theme: string;
    fontSize: number;
    userInfo: UserInfo;
    hideProjectPage: any;
    refreshPage: () => any;
};

interface TaskViewState {
    width: number;
    height: number;
    dueDate: Date;
    description: string;
    taskStatus: string;
    assignee: number;
    error: any;
    isLoaded: boolean;
    subTasks: Task[];
    name: string;
    completion: number;
    hasChanged: boolean;
    wasDeleteRequested: boolean;
};


// TaskView is intended to be the center view for all tasks, substasks and project heads.
export class TaskView extends React.Component<TaskViewProps, TaskViewState>{
    name: string;
    description: string;
    displayedName: string;
    today: Date;
    daysLeft: number;
    displayedDaysLeft: string;
    status: string;
    statusOptions: Options[];
    assignedOptions: Options[];
    owner: User;
    sharedUsers: User[];
    saveText: string;
    deleteButtonText = "Delete";
    hasChanged = false;
    error: any;
    subTasks: Task[];
    oldStatus: string;

    constructor(props: TaskViewProps) {
        super(props);
        this.displayedName = this.name;

        this.today = new Date();
        this.displayedDaysLeft = "0 Days Left!";
        this.saveText = "Save";

        this.status = props.status;
        this.statusOptions = [
            { id: 0, value: 'active', label: 'Active' },
            { id: 1, value: 'inactive', label: 'Inactive' },
            { id: 2, value: 'complete', label: 'Complete' },
        ];

        this.owner = props.owner;
        this.sharedUsers = props.sharedUsers;

        this.state = {
            width: 0, height: 0, dueDate: this.props.dueDate, description: this.props.description, taskStatus: this.props.status, assignee: this.props.assignee, error: null, isLoaded: false,
            subTasks: [], name: this.props.name, completion: this.props.completion, hasChanged: false, wasDeleteRequested: false, 
        };

        this.makeSubTaskQuery(5);
    }

    componentDidUpdate(oldProps: TaskViewProps) {
        const { name, description, dueDate, assignee, status, taskID, completion } = this.props;
        if (oldProps.dueDate !== dueDate) {
            this.setState({ dueDate: dueDate })
        }
        if (oldProps.name !== name) {
            this.setState({ name: name, wasDeleteRequested: false })
        }
        if (oldProps.description !== description) {
            this.setState({ description: description })
        }
        if (oldProps.assignee !== assignee) {
            this.setState({ assignee: assignee })
        }
        if (oldProps.status !== status) {
            this.setState({ taskStatus: status })
        }
        if (oldProps.taskID !== taskID) {
            this.makeSubTaskQuery(5);
            this.setState({ wasDeleteRequested: false })
            this.deleteButtonText = "Delete";
        }
        if (oldProps.completion !== completion) {
            this.setState({ completion: completion })
        }
    }

    handleChange = (date: Date) => {
        this.setState({ dueDate: date });
        this.calculateDaysLeft(date);
        this.setState({ hasChanged: true });
        this.setState({ wasDeleteRequested: false })
        this.deleteButtonText = "Delete";
    };

    // handleStatusChange and handleAssignedChange COULD be made arrow functions on their own,
    // BUT they need to be passed as props to statusDropdown.tsx and assignedDropdown.tsx respectively in
    // order to change both the value in their respective dropdowns AND in TaskView here
    handleStatusChange(e: React.ChangeEvent<HTMLSelectElement>) {
        this.oldStatus = this.state.taskStatus;
        this.setState({ taskStatus: e.target.value });
        this.setState({ hasChanged: true });
        this.setState({ wasDeleteRequested: false })
        this.deleteButtonText = "Delete";
    }

    handleAssignedChange(e: React.ChangeEvent<HTMLSelectElement>) {
        this.setState({ assignee: Number(e.target.value) });
        this.setState({ hasChanged: true });
        this.setState({ wasDeleteRequested: false })
        this.deleteButtonText = "Delete";
    }

    // If the title is too long, we should shorten it to fit the space we have.
    displayName = () => {
        let displayedName = this.props.name;
        if (displayedName.length > 13) {
            displayedName = displayedName.substring(0, 13);
            displayedName += "...";
        }
        return displayedName;
    }

    // Calculates the difference between the current date and the due date
    calculateDaysLeft = (dueDate: Date) => {
        let today = new Date();
        const dueMonth = dueDate.getMonth() + 1;
        const dueYear = dueDate.getFullYear();
        const dueDay = dueDate.getDate();
        const todayMonth = today.getMonth() + 1;
        const todayYear = today.getFullYear();
        const todayDay = today.getDate();
        const divide = 1000 * 60 * 60 * 24;

        this.daysLeft = Math.floor((Date.UTC(dueYear, dueMonth, dueDay) - Date.UTC(todayYear, todayMonth, todayDay)) / divide);
    }

    // Checks how many days are left and changes message accordingly
    daysLeftCheck = () => {
        // !! checks if something is not null
        // So !!! checks if something is null
        if (!!!this.state.dueDate) {
            return null;
        }
        else if (this.daysLeft >= 0) {
            if (this.daysLeft === 1) {
                return this.daysLeft + " Day Left!";
            }
            else {
                return this.daysLeft + " Days Left!";
            }
        }
        else {
            if (this.daysLeft === -1) {
                return Math.abs(this.daysLeft) + " Day Late!";
            }
            else {
                return Math.abs(this.daysLeft) + " Days Late!";
            }
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
            const request = new UserHeaderHttpRequest(`/api/subtasks/${this.props.taskID}`, this.props.userInfo);
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

    // Update Subtask in the database based on information in the current task
    updateTask = () => {
        let completion = this.state.completion;
        if (this.state.taskStatus == "complete") {

            let valid = true;
            for (let i = 0; i < this.state.subTasks.length; i++) {
                if (this.state.subTasks[i].status !== "complete") {
                    valid = false;
                }
            }
            if (!valid) {
                alert("WARNING: Can not set status to complete while there are uncompleted subtasks! Reverting status to previous state and saving other changes...");
                this.setState({ taskStatus: this.oldStatus });
            } else {
                completion = 100;
                this.setState({ completion: 100 });
            }
        }
        // TODO
        // should be user from google oauth
        const updatedTask = { owner: this.owner, parentId: this.props.parentId, projectId: this.props.projectId, title: this.state.name, status: this.state.taskStatus, assignedTo: this.state.assignee, progress: completion, deadline: this.state.dueDate, description: this.state.description };

        const request = new UserHeaderHttpRequest(`/api/tasks/${this.props.taskID}`, this.props.userInfo, { "Content-Type" : "application/json" });
        fetch(request,
            {
                method: 'PUT',
                mode: 'cors',
                body: JSON.stringify(updatedTask)
            }).then((response) => response.json())
            .then((data) => {
                this.props.refreshPage();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        this.setState({ hasChanged: false });
    }
    
    // First process if it's the first time delete has been requested or not - gives user opportunity to "back out"
    // Upon confirming with a second click, the task is deleted and the parent task becomes the new displayed task
    // If there is no listed parent task, then it was a project head task. In this case, user is taken back to the
    // project selection page
    deleteTask = () => {
        console.log("running...");
        if (this.state.wasDeleteRequested) {
            const request = new UserHeaderHttpRequest(`/api/tasks/${this.props.taskID}`, this.props.userInfo, { "Content-Type" : "application/json" });
            RetryableFetch.fetch_retry(request,
            {
                method: 'DELETE',
                mode: 'cors'
            }).then((response) => response.json())
            .then((data) => {
                // if parentId is "null", then it must be a project head task
                // there is no "parent" task for a project head, so to avoid conflict, the user is
                // taken back to the project landing, same as hitting the "Home" button in nav bar
                if (this.props.parentId == null) {
                    this.props.hideProjectPage();
                } else {
                    this.props.changeHead(this.props.parentId);
                    this.deleteButtonText = "Delete";
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        } else {
            this.deleteButtonText = "DELETE";
        }
        this.setState({ wasDeleteRequested: !this.state.wasDeleteRequested })
    }

    render() {
        // We can calculate the date only if state is populated
        if (!!(this.state.dueDate)) {
            this.calculateDaysLeft(this.state.dueDate);
        }
        const daysLeftString = this.daysLeftCheck();

        if (this.props.fontSize === 16) {
            if (this.props.theme === "light") {
                return (
                    <Container style={styles.container}>
                        <Row style={styles.row} noGutters={true}>
                            <Col xs="2" >
                                <Button
                                    variant="outline-success"
                                    size='lg'
                                    block
                                    style={font16.saveButton}
                                    onClick={this.updateTask}
                                    disabled={!this.state.hasChanged}
                                >
                                    {this.saveText}
                                </Button>
                            </Col>
                            <Col xs="8">
                                <Form.Control
                                    onChange={(event: any) => {
                                        let fieldVal = event.target.value;
                                        this.setState({ description: fieldVal });
                                        this.setState({ hasChanged: true });
                                        this.setState({ wasDeleteRequested: false })
                                        this.deleteButtonText = "Delete";
                                    }}
                                    style={font16.name}
                                    value={this.state.name}
                                />
                            </Col>
                            <Col xs="2">
                                <Button
                                    variant="outline-danger"
                                    size='lg'
                                    block
                                    style={font16.deleteButton}
                                >
                                    {this.deleteButtonText}
                                        </Button>
                            </Col>
                        </Row>
                        <Row noGutters={true}>
                            <TaskProgressBar percentage={this.state.completion} theme={this.props.theme} fontSize={this.props.fontSize} />
                        </Row>
                        <Row noGutters={true}>
                            <Form style={font16.datePick}>
                                <Form.Group as={Row} noGutters={true}>
                                    <Form.Label column xs="4">Due Date: </Form.Label>
                                    <Col xs="8">
                                        <Form.Text style={font16.font}>
                                            <DatePicker
                                                selected={this.state.dueDate}
                                                onChange={this.handleChange}
                                            />
                                        </Form.Text>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Row>
                        <Row noGutters={true}>
                            <LabelText16> {daysLeftString} </LabelText16>
                        </Row>
                        <Row>
                            <Col xs="5"> <StatusDropdown taskStatus={this.state.taskStatus} statusList={this.statusOptions} theme={this.props.theme} handleChange={this.handleStatusChange.bind(this)} fontSize={this.props.fontSize} /> </Col>
                            <Col xs="7"><AssignedDropdown assignedState={this.state.assignee} sharedUsers={this.sharedUsers} owner={this.owner} theme={this.props.theme} handleChange={this.handleAssignedChange.bind(this)} fontSize={this.props.fontSize} /> </Col>
                        </Row>
                        <Row noGutters={true}>
                            <Form style={font16.desc}>
                                <Form.Group as={Row} noGutters={true}>
                                    <Form.Label column xs="2"> Description: </Form.Label>
                                    <Col xs="10">
                                        <Form.Control
                                            as="textarea"
                                            rows="13"
                                            cols="100"
                                            onChange={(event: any) => {
                                                let fieldVal = event.target.value;
                                                this.setState({ description: fieldVal });
                                                this.setState({ hasChanged: true });
                                                this.setState({ wasDeleteRequested: false })
                                                this.deleteButtonText = "Delete";
                                            }}
                                            style={font16.desc}
                                            value={this.state.description}
                                        />
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Row>
                        <Row noGutters={true}>
                            <Col xs="10" style={styles.sharedTab}> <ShareUsers owner={this.owner} sharedUsers={this.sharedUsers} theme={this.props.theme} fontSize={this.props.fontSize} /> </Col>
                            <Col xs="2">
                                <Button
                                    variant="outline-info"
                                    size="lg"
                                    block
                                    style={font16.historyButton}>
                                    History
                                        </Button>
                            </Col>
                        </Row>
                    </Container>
                );
            } else {
                return (
                    <Container style={styles.container}>
                        <Row style={styles.row} noGutters={true}>
                            <Col xs="2" >
                                <Button
                                    variant="success"
                                    size='lg'
                                    block
                                    style={font16.saveButton}
                                    onClick={this.updateTask}
                                    disabled={!this.state.hasChanged}
                                >
                                    {this.saveText}
                                </Button>
                            </Col>
                            <Col xs="8">
                                <Form.Control
                                    onChange={(event: any) => {
                                        let fieldVal = event.target.value;
                                        this.setState({ description: fieldVal });
                                        this.setState({ hasChanged: true });
                                        this.setState({ wasDeleteRequested: false })
                                        this.deleteButtonText = "Delete";
                                    }}
                                    style={font16.darkName}
                                    value={this.state.name}
                                />
                            </Col>
                            <Col xs="2">
                                <Button
                                    variant="danger"
                                    size='lg'
                                    block
                                    style={font16.deleteButton}
                                >
                                    {this.deleteButtonText}
                                        </Button>
                            </Col>
                        </Row>
                        <Row noGutters={true}>
                            <TaskProgressBar percentage={this.state.completion} theme={this.props.theme} fontSize={this.props.fontSize} />
                        </Row>
                        <Row noGutters={true}>
                            <Form style={font16.datePick}>
                                <Form.Group as={Row} noGutters={true}>
                                    <Form.Label column xs="4">Due Date: </Form.Label>
                                    <Col xs="8">
                                        <Form.Text style={font16.darkFont}>
                                            <DatePicker
                                                selected={this.state.dueDate}
                                                onChange={this.handleChange}
                                            />
                                        </Form.Text>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Row>
                        <Row noGutters={true}>
                            <LabelText16> {daysLeftString} </LabelText16>
                        </Row>
                        <Row>
                            <Col xs="5"> <StatusDropdown taskStatus={this.props.status} statusList={this.statusOptions} theme={this.props.theme} handleChange={this.handleStatusChange.bind(this)} fontSize={this.props.fontSize} /> </Col>
                            <Col xs="7"><AssignedDropdown assignedState={this.props.assignee} sharedUsers={this.sharedUsers} owner={this.owner} theme={this.props.theme} handleChange={this.handleAssignedChange.bind(this)} fontSize={this.props.fontSize} /> </Col>
                        </Row>
                        <Row noGutters={true}>
                            <Form style={font16.descDark}>
                                <Form.Group as={Row} noGutters={true}>
                                    <Form.Label column xs="2"> Description: </Form.Label>
                                    <Col xs="10">
                                        <Form.Control
                                            as="textarea"
                                            rows="13"
                                            cols="100"
                                            value={this.state.description}
                                            style={font16.descDarkBox}
                                            onChange={(event: any) => {
                                                let fieldVal = event.target.value;
                                                this.setState({ description: fieldVal });
                                                this.setState({ hasChanged: true });
                                            }}
                                        />
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Row>
                        <Row noGutters={true}>
                            <Col xs="10" style={styles.sharedTabDark}> <ShareUsers owner={this.owner} sharedUsers={this.sharedUsers} theme={this.props.theme} fontSize={this.props.fontSize} /> </Col>
                            <Col xs="2">
                                <Button
                                    variant="info"
                                    size="lg"
                                    block
                                    style={font16.historyButton}>
                                    History
                                        </Button>
                            </Col>
                        </Row>
                    </Container>
                );
            }
        } else if (this.props.fontSize === 24) {
            if (this.props.theme === "light") {
                return (
                    <Container style={styles.container}>
                        <Row style={styles.row} noGutters={true}>
                            <Col xs="2" >
                                <Button
                                    variant="outline-success"
                                    size='lg'
                                    block
                                    style={font24.saveButton}
                                    onClick={this.updateTask}
                                    disabled={!this.state.hasChanged}
                                >
                                    {this.saveText}
                                </Button>
                            </Col>
                            <Col xs="8">
                                <Form.Control
                                    onChange={(event: any) => {
                                        let fieldVal = event.target.value;
                                        this.setState({ description: fieldVal });
                                        this.setState({ hasChanged: true });
                                        this.setState({ wasDeleteRequested: false })
                                        this.deleteButtonText = "Delete";
                                    }}
                                    style={font24.name}
                                    value={this.state.name}
                                />
                            </Col>
                            <Col xs="2">
                                <Button
                                    variant="outline-danger"
                                    size='lg'
                                    block
                                    style={font24.deleteButton}
                                >
                                    {this.deleteButtonText}
                                        </Button>
                            </Col>
                        </Row>
                        <Row noGutters={true}>
                            <TaskProgressBar percentage={this.state.completion} theme={this.props.theme} fontSize={this.props.fontSize} />
                        </Row>
                        <Row noGutters={true}>
                            <Form style={font24.datePick}>
                                <Form.Group as={Row} noGutters={true}>
                                    <Form.Label column xs="4">Due Date: </Form.Label>
                                    <Col xs="8">
                                        <Form.Text style={font24.font}>
                                            <DatePicker
                                                selected={this.state.dueDate}
                                                onChange={this.handleChange}
                                            />
                                        </Form.Text>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Row>
                        <Row noGutters={true}>
                            <LabelText24> {daysLeftString} </LabelText24>
                        </Row>
                        <Row>
                            <Col xs="5"> <StatusDropdown taskStatus={this.props.status} statusList={this.statusOptions} theme={this.props.theme} handleChange={this.handleStatusChange.bind(this)} fontSize={this.props.fontSize} /> </Col>
                            <Col xs="7"><AssignedDropdown assignedState={this.props.assignee} sharedUsers={this.sharedUsers} owner={this.owner} theme={this.props.theme} handleChange={this.handleAssignedChange.bind(this)} fontSize={this.props.fontSize} /> </Col>
                        </Row>
                        <Row noGutters={true}>
                            <Form style={font24.desc}>
                                <Form.Group as={Row} noGutters={true}>
                                    <Form.Label column xs="2"> Description: </Form.Label>
                                    <Col xs="10">
                                        <Form.Control
                                            as="textarea"
                                            rows="5"
                                            cols="60"
                                            onChange={(event: any) => {
                                                let fieldVal = event.target.value;
                                                this.setState({name: fieldVal});
                                                this.setState({hasChanged: true});
                                                this.setState({ wasDeleteRequested: false })
                                                this.deleteButtonText = "Delete";
                                            }}
                                            style={font24.desc}
                                            value={this.state.description}
                                        />
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Row>
                        <Row noGutters={true}>
                            <Col xs="10" style={styles.sharedTab}> <ShareUsers owner={this.owner} sharedUsers={this.sharedUsers} theme={this.props.theme} fontSize={this.props.fontSize} /> </Col>
                            <Col xs="2">
                                <Button
                                    variant="outline-info"
                                    size="lg"
                                    block
                                    style={font24.historyButton}>
                                    History
                                        </Button>
                            </Col>
                        </Row>
                    </Container>
                );
            } else {
                return (
                    <Container style={styles.container}>
                        <Row style={styles.row} noGutters={true}>
                            <Col xs="2" >
                                <Button
                                    variant="success"
                                    size='lg'
                                    block
                                    style={font24.saveButton}
                                    onClick={this.updateTask}
                                    disabled={!this.state.hasChanged}
                                >
                                    {this.saveText}
                                </Button>
                            </Col>
                            <Col xs="8">
                                <Form.Control
                                    onChange={(event: any) => {
                                        let fieldVal = event.target.value;
                                        this.setState({ description: fieldVal });
                                        this.setState({ hasChanged: true });
                                        this.setState({ wasDeleteRequested: false })
                                        this.deleteButtonText = "Delete";
                                    }}
                                    style={font24.darkName}
                                    value={this.state.name}
                                />
                            </Col>
                            <Col xs="2">
                                <Button
                                    variant="danger"
                                    size='lg'
                                    block
                                    style={font24.deleteButton}
                                >
                                    {this.deleteButtonText}
                                        </Button>
                            </Col>
                        </Row>
                        <Row noGutters={true}>
                            <TaskProgressBar percentage={this.state.completion} theme={this.props.theme} fontSize={this.props.fontSize} />
                        </Row>
                        <Row noGutters={true}>
                            <Form style={font24.datePick}>
                                <Form.Group as={Row} noGutters={true}>
                                    <Form.Label column xs="4">Due Date: </Form.Label>
                                    <Col xs="8">
                                        <Form.Text style={font24.darkFont}>
                                            <DatePicker
                                                selected={this.state.dueDate}
                                                onChange={this.handleChange}
                                            />
                                        </Form.Text>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Row>
                        <Row noGutters={true}>
                            <LabelText24> {daysLeftString} </LabelText24>
                        </Row>
                        <Row>
                            <Col xs="5"> <StatusDropdown taskStatus={this.props.status} statusList={this.statusOptions} theme={this.props.theme} handleChange={this.handleStatusChange.bind(this)} fontSize={this.props.fontSize} /> </Col>
                            <Col xs="7"><AssignedDropdown assignedState={this.props.assignee} sharedUsers={this.sharedUsers} owner={this.owner} theme={this.props.theme} handleChange={this.handleAssignedChange.bind(this)} fontSize={this.props.fontSize} /> </Col>
                        </Row>
                        <Row noGutters={true}>
                            <Form style={font24.descDark}>
                                <Form.Group as={Row} noGutters={true}>
                                    <Form.Label column xs="2"> Description: </Form.Label>
                                    <Col xs="10">
                                        <Form.Control
                                            as="textarea"
                                            rows="5"
                                            cols="60"
                                            value={this.state.description}
                                            style={font24.descDarkBox}
                                            onChange={(event: any) => {
                                                let fieldVal = event.target.value;
                                                this.setState({name: fieldVal});
                                                this.setState({hasChanged: true});
                                                this.setState({ wasDeleteRequested: false })
                                                this.deleteButtonText = "Delete";
                                            }}
                                        />
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Row>
                        <Row noGutters={true}>
                            <Col xs="10" style={styles.sharedTabDark}> <ShareUsers owner={this.owner} sharedUsers={this.sharedUsers} theme={this.props.theme} fontSize={this.props.fontSize} /> </Col>
                            <Col xs="2">
                                <Button
                                    variant="info"
                                    size="lg"
                                    block
                                    style={font24.historyButton}>
                                    History
                                        </Button>
                            </Col>
                        </Row>
                    </Container>
                );
            }
        } else if (this.props.fontSize === 32) {
            if (this.props.theme === "light") {
                return (
                    <Container style={styles.container}>
                        <Row style={styles.row} noGutters={true}>
                            <Col xs="2" >
                                <Button
                                    variant="outline-success"
                                    size='lg'
                                    block
                                    style={font32.saveButton}
                                    onClick={this.updateTask}
                                    disabled={!this.state.hasChanged}
                                >
                                    {this.saveText}
                                </Button>
                            </Col>
                            <Col xs="8">
                                <Form.Control
                                    onChange={(event: any) => {
                                        let fieldVal = event.target.value;
                                        this.setState({ description: fieldVal });
                                        this.setState({ hasChanged: true });
                                        this.setState({ wasDeleteRequested: false })
                                        this.deleteButtonText = "Delete";
                                    }}
                                    style={font32.name}
                                    value={this.state.name}
                                />
                            </Col>
                            <Col xs="2">
                                <Button
                                    variant="outline-danger"
                                    size='lg'
                                    block
                                    style={font32.deleteButton}
                                    onClick={this.deleteTask}
                                >
                                    Delete
                                        </Button>
                            </Col>
                        </Row>
                        <Row noGutters={true}>
                            <TaskProgressBar percentage={this.state.completion} theme={this.props.theme} fontSize={this.props.fontSize} />
                        </Row>
                        <Row noGutters={true}>
                            <Form style={font32.datePick}>
                                <Form.Group as={Row} noGutters={true}>
                                    <Form.Label column xs="4">Due Date: </Form.Label>
                                    <Col xs="8">
                                        <Form.Text style={font32.font}>
                                            <DatePicker
                                                selected={this.state.dueDate}
                                                onChange={this.handleChange}
                                            />
                                        </Form.Text>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Row>
                        <Row noGutters={true}>
                            <LabelText32> {daysLeftString} </LabelText32>
                        </Row>
                        <Row>
                            <Col xs="5"> <StatusDropdown taskStatus={this.props.status} statusList={this.statusOptions} theme={this.props.theme} handleChange={this.handleStatusChange.bind(this)} fontSize={this.props.fontSize} /> </Col>
                            <Col xs="7"><AssignedDropdown assignedState={this.props.assignee} sharedUsers={this.sharedUsers} owner={this.owner} theme={this.props.theme} handleChange={this.handleAssignedChange.bind(this)} fontSize={this.props.fontSize} /> </Col>
                        </Row>
                        <Row noGutters={true}>
                            <Form style={font32.desc}>
                                <Form.Group as={Row} noGutters={true}>
                                    <Form.Label column xs="3"> Description: </Form.Label>
                                    <Col xs="9">
                                        <Form.Control
                                            as="textarea"
                                            rows="3"
                                            cols="60"
                                            onChange={(event: any) => {
                                                let fieldVal = event.target.value;
                                                this.setState({ description: fieldVal });
                                                this.setState({ hasChanged: true });
                                            }}
                                            style={font32.desc}
                                            value={this.state.description}
                                        />
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Row>
                        <Row noGutters={true}>
                            <Col xs="10" style={styles.sharedTab}> <ShareUsers owner={this.owner} sharedUsers={this.sharedUsers} theme={this.props.theme} fontSize={this.props.fontSize} /> </Col>
                            <Col xs="2">
                                <Button
                                    variant="outline-info"
                                    size="lg"
                                    block
                                    style={font32.historyButton}>
                                    History
                                        </Button>
                            </Col>
                        </Row>
                    </Container>
                );
            } else {
                return (
                    <Container style={styles.container}>
                        <Row style={styles.row} noGutters={true}>
                            <Col xs="2" >
                                <Button
                                    variant="success"
                                    size='lg'
                                    block
                                    style={font32.saveButton}
                                    onClick={this.updateTask}
                                    disabled={!this.state.hasChanged}
                                >
                                    {this.saveText}
                                </Button>
                            </Col>
                            <Col xs="8">
                                <Form.Control
                                    onChange={(event: any) => {
                                        let fieldVal = event.target.value;
                                        this.setState({ description: fieldVal });
                                        this.setState({ hasChanged: true });
                                        this.setState({ wasDeleteRequested: false })
                                        this.deleteButtonText = "Delete";
                                    }}
                                    style={font32.darkName}
                                    value={this.state.name}
                                />
                            </Col>
                            <Col xs="2">
                                <Button
                                    variant="danger"
                                    size='lg'
                                    block
                                    style={font32.deleteButton}
                                >
                                    {this.deleteButtonText}
                                        </Button>
                            </Col>
                        </Row>
                        <Row noGutters={true}>
                            <TaskProgressBar percentage={this.state.completion} theme={this.props.theme} fontSize={this.props.fontSize} />
                        </Row>
                        <Row noGutters={true}>
                            <Form style={font32.datePick}>
                                <Form.Group as={Row} noGutters={true}>
                                    <Form.Label column xs="4">Due Date: </Form.Label>
                                    <Col xs="8">
                                        <Form.Text style={font32.darkFont}>
                                            <DatePicker
                                                selected={this.state.dueDate}
                                                onChange={this.handleChange}
                                            />
                                        </Form.Text>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Row>
                        <Row noGutters={true}>
                            <LabelText32> {daysLeftString} </LabelText32>
                        </Row>
                        <Row>
                            <Col xs="5"> <StatusDropdown taskStatus={this.props.status} statusList={this.statusOptions} theme={this.props.theme} handleChange={this.handleStatusChange.bind(this)} fontSize={this.props.fontSize} /> </Col>
                            <Col xs="7"><AssignedDropdown assignedState={this.props.assignee} sharedUsers={this.sharedUsers} owner={this.owner} theme={this.props.theme} handleChange={this.handleAssignedChange.bind(this)} fontSize={this.props.fontSize} /> </Col>
                        </Row>
                        <Row noGutters={true}>
                            <Form style={font32.descDark}>
                                <Form.Group as={Row} noGutters={true}>
                                    <Form.Label column xs="3"> Description: </Form.Label>
                                    <Col xs="9">
                                        <Form.Control
                                            as="textarea"
                                            rows="3"
                                            cols="60"
                                            value={this.state.description}
                                            style={font32.descDarkBox}
                                            onChange={(event: any) => {
                                                let fieldVal = event.target.value;
                                                this.setState({ description: fieldVal });
                                                this.setState({ hasChanged: true });
                                            }}
                                        />
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Row>
                        <Row noGutters={true}>
                            <Col xs="10" style={styles.sharedTabDark}> <ShareUsers owner={this.owner} sharedUsers={this.sharedUsers} theme={this.props.theme} fontSize={this.props.fontSize} /> </Col>
                            <Col xs="2">
                                <Button
                                    variant="info"
                                    size="lg"
                                    block
                                    style={font32.historyButton}>
                                    History
                                        </Button>
                            </Col>
                        </Row>
                    </Container>
                );
            }
        } else {
            if (this.props.theme === "light") {
                return (
                    <Container style={styles.container}>
                        <Row style={styles.row} noGutters={true}>
                            <Col xs="2" >
                                <Button
                                    variant="outline-success"
                                    size='lg'
                                    block
                                    style={font40.saveButton}
                                    onClick={this.updateTask}
                                    disabled={!this.state.hasChanged}
                                >
                                    {this.saveText}
                                </Button>
                            </Col>
                            <Col xs="8">
                                <Form.Control
                                    onChange={(event: any) => {
                                        let fieldVal = event.target.value;
                                        this.setState({ description: fieldVal });
                                        this.setState({ hasChanged: true });
                                        this.setState({ wasDeleteRequested: false })
                                        this.deleteButtonText = "Delete";
                                    }}
                                    style={font40.name}
                                    value={this.state.name}
                                />
                            </Col>
                            <Col xs="2">
                                <Button
                                    variant="outline-danger"
                                    size='lg'
                                    block
                                    style={font40.deleteButton}
                                >
                                    {this.deleteButtonText}
                                        </Button>
                            </Col>
                        </Row>
                        <Row noGutters={true}>
                            <TaskProgressBar percentage={this.state.completion} theme={this.props.theme} fontSize={this.props.fontSize} />
                        </Row>
                        <Row noGutters={true}>
                            <Form style={font40.datePick}>
                                <Form.Group as={Row} noGutters={true}>
                                    <Form.Label column xs="4">Due Date: </Form.Label>
                                    <Col xs="8">
                                        <Form.Text style={font40.font}>
                                            <DatePicker
                                                selected={this.state.dueDate}
                                                onChange={this.handleChange}
                                            />
                                        </Form.Text>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Row>
                        <Row noGutters={true}>
                            <LabelText40> {daysLeftString} </LabelText40>
                        </Row>
                        <Row>
                            <Col xs="5"> <StatusDropdown taskStatus={this.props.status} statusList={this.statusOptions} theme={this.props.theme} handleChange={this.handleStatusChange.bind(this)} fontSize={this.props.fontSize} /> </Col>
                            <Col xs="7"><AssignedDropdown assignedState={this.props.assignee} sharedUsers={this.sharedUsers} owner={this.owner} theme={this.props.theme} handleChange={this.handleAssignedChange.bind(this)} fontSize={this.props.fontSize} /> </Col>
                        </Row>
                        <Row noGutters={true}>
                            <Form style={font40.desc}>
                                <Form.Group as={Row} noGutters={true}>
                                    <Form.Label column xs="3"> Description: </Form.Label>
                                    <Col xs="9">
                                        <Form.Control
                                            as="textarea"
                                            rows="2"
                                            cols="60"
                                            onChange={(event: any) => {
                                                let fieldVal = event.target.value;
                                                this.setState({name: fieldVal});
                                                this.setState({hasChanged: true});
                                                this.setState({ wasDeleteRequested: false })
                                                this.deleteButtonText = "Delete";
                                            }}
                                            style={font40.desc}
                                            value={this.state.description}
                                        />
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Row>
                        <Row noGutters={true}>
                            <Col xs="9" style={styles.sharedTab}> <ShareUsers owner={this.owner} sharedUsers={this.sharedUsers} theme={this.props.theme} fontSize={this.props.fontSize} /> </Col>
                            <Col xs="3">
                                <Button
                                    variant="outline-info"
                                    size="lg"
                                    block
                                    style={font40.historyButton}>
                                    History
                                        </Button>
                            </Col>
                        </Row>
                    </Container>
                );
            } else {
                return (
                    <Container style={styles.container}>
                        <Row style={styles.row} noGutters={true}>
                            <Col xs="2" >
                                <Button
                                    variant="success"
                                    size='lg'
                                    block
                                    style={font40.saveButton}
                                    onClick={this.updateTask}
                                    disabled={!this.state.hasChanged}
                                >
                                    {this.saveText}
                                </Button>
                            </Col>
                            <Col xs="8">
                                <Form.Control
                                    onChange={(event: any) => {
                                        let fieldVal = event.target.value;
                                        this.setState({ description: fieldVal });
                                        this.setState({ hasChanged: true });
                                        this.setState({ wasDeleteRequested: false })
                                        this.deleteButtonText = "Delete";
                                    }}
                                    style={font40.darkName}
                                    value={this.state.name}
                                />
                            </Col>
                            <Col xs="2">
                                <Button
                                    variant="danger"
                                    size='lg'
                                    block
                                    style={font40.deleteButton}
                                >
                                    Delete
                                        </Button>
                            </Col>
                        </Row>
                        <Row noGutters={true}>
                            <TaskProgressBar percentage={this.state.completion} theme={this.props.theme} fontSize={this.props.fontSize} />
                        </Row>
                        <Row noGutters={true}>
                            <Form style={font40.datePick}>
                                <Form.Group as={Row} noGutters={true}>
                                    <Form.Label column xs="4">Due Date: </Form.Label>
                                    <Col xs="8">
                                        <Form.Text style={font40.darkFont}>
                                            <DatePicker
                                                selected={this.state.dueDate}
                                                onChange={this.handleChange}
                                            />
                                        </Form.Text>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Row>
                        <Row noGutters={true}>
                            <LabelText40> {daysLeftString} </LabelText40>
                        </Row>
                        <Row>
                            <Col xs="5"> <StatusDropdown taskStatus={this.props.status} statusList={this.statusOptions} theme={this.props.theme} handleChange={this.handleStatusChange.bind(this)} fontSize={this.props.fontSize} /> </Col>
                            <Col xs="7"><AssignedDropdown assignedState={this.props.assignee} sharedUsers={this.sharedUsers} owner={this.owner} theme={this.props.theme} handleChange={this.handleAssignedChange.bind(this)} fontSize={this.props.fontSize} /> </Col>
                        </Row>
                        <Row noGutters={true}>
                            <Form style={font40.descDark}>
                                <Form.Group as={Row} noGutters={true}>
                                    <Form.Label column xs="3"> Description: </Form.Label>
                                    <Col xs="9">
                                        <Form.Control
                                            as="textarea"
                                            rows="2"
                                            cols="60"
                                            value={this.state.description}
                                            style={font40.descDarkBox}
                                            onChange={(event: any) => {
                                                let fieldVal = event.target.value;
                                                this.setState({ description: fieldVal });
                                                this.setState({ hasChanged: true });
                                            }}
                                        />
                                    </Col>
                                </Form.Group>
                            </Form>
                        </Row>
                        <Row noGutters={true}>
                            <Col xs="9" style={styles.sharedTabDark}> <ShareUsers owner={this.owner} sharedUsers={this.sharedUsers} theme={this.props.theme} fontSize={this.props.fontSize} /> </Col>
                            <Col xs="3">
                                <Button
                                    variant="info"
                                    size="lg"
                                    block
                                    style={font40.historyButton}>
                                    History
                                        </Button>
                            </Col>
                        </Row>
                    </Container>
                );
            }
        }
    }
};
