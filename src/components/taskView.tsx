import * as React from 'react';
import styled from 'styled-components';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Badge from 'react-bootstrap/Badge';

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
        height: 56,
        minWidth: 100,
        fontSize: 16
    },
    statButton: {
        height: 56,
        minWidth: 100,
        fontSize: 16
    },
    badge: {
        fontSize: 12
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
        height: 75,
        minWidth: 100,
        fontSize: 24
    },
    statButton: {
        height: 75,
        minWidth: 100,
        fontSize: 24
    },
    badge: {
        fontSize: 16
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
        height: 90,
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
        height: 92,
        minWidth: 100,
        fontSize: 32
    },
    statButton: {
        height: 92,
        minWidth: 100,
        fontSize: 32
    },
    badge: {
        fontSize: 16
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
        height: 90,
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
        height: 92,
        minWidth: 100,
        fontSize: 40
    },
    statButton: {
        height: 92,
        minWidth: 100,
        fontSize: 40
    },
    badge: {
        fontSize: 24
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

interface LabelTextProps {
    fontSize: number;
}

const LabelText = styled.div`
    font-size: ${(props: LabelTextProps) => props.fontSize}px;
    text-align: center;
    margin: auto;
    margin-bottom: 5px;
    width: 250px;
`;

interface ButtonVariantProps {
    variant: "link" | "light" | "outline-success" | "success" | "primary" | "secondary" | "danger" | "warning" | "info" | "dark" | "outline-primary" | "outline-secondary" | "outline-danger" | "outline-warning" | "outline-info" | "outline-dark" | "outline-light";
}

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
    changeHead: () => any;
    parentId: number;
    projectId: number;
    name: string;
    completion: number;
    description: string;
    dueDate: Date;
    status: string;
    assignedTo: string;
    owner: User;
    sharedUsers: User[];
    theme: string;
    fontSize: number;
    userInfo: UserInfo;
    hideProjectPage: any;
    refreshPage: () => any;
    showStatTab: () => any;
    showHistoryTab: () => any;
};

interface TaskViewState {
    width: number;
    height: number;
    dueDate: Date;
    description: string;
    taskStatus: string;
    assignedTo: string;
    error: any;
    isLoaded: boolean;
    subTasks: Task[];
    name: string;
    completion: number;
    hasChanged: boolean;
    wasDeleteRequested: boolean;
    showStatTab: () => any;
    showHistoryTab: () => any;
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
            width: 0, height: 0, dueDate: this.props.dueDate, description: this.props.description, taskStatus: this.props.status, assignedTo: this.props.assignedTo, error: null, isLoaded: false,
            subTasks: [], name: this.props.name, completion: this.props.completion, hasChanged: false, wasDeleteRequested: false, showHistoryTab: props.showHistoryTab, showStatTab: props.showStatTab
        };

        this.makeSubTaskQuery(5);
    }

    componentDidUpdate(oldProps: TaskViewProps) {
        const { name, description, dueDate, assignedTo: assignee, status, taskID, completion } = this.props;
        if (oldProps.dueDate !== dueDate) {
            this.setState({ dueDate: dueDate })
        }
        if (oldProps.name !== name) {
            this.setState({ name: name, wasDeleteRequested: false })
        }
        if (oldProps.description !== description) {
            this.setState({ description: description })
        }
        if (oldProps.assignedTo !== assignee) {
            this.setState({ assignedTo: assignee })
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

    handleAssignedChange(newAssign: string) {
        this.setState({ assignedTo: newAssign });
        this.setState({ hasChanged: true });
        this.setState({ wasDeleteRequested: false })
        this.deleteButtonText = "Delete";
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
                return "Due Tomorrow!";
            }
            else if(this.daysLeft === 0) {
                return "Due Today!"
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
        } else if (this.state.taskStatus == "active" || this.state.taskStatus == "inactive") {
            let valid = true;
            for (let i = 0; i < this.state.subTasks.length; i++) {
                if (this.state.subTasks[i].status !== "active" || this.state.subTasks[i].status !== "inactive") {
                    valid = false;
                }
            }
            if (!valid) {
                alert("WARNING: Can not set status to active or inactive while there are completed subtasks! Reverting status to previous state and saving other changes...");
                this.setState({ taskStatus: this.oldStatus });
            } else {
                completion = 0;
                this.setState({ completion: 0 });
            }
        }
        // TODO
        // should be user from google oauth
        const updatedTask = { owner: this.owner, parentId: this.props.parentId, projectId: this.props.projectId, title: this.state.name, status: this.state.taskStatus, assignedTo: this.state.assignedTo, progress: completion, deadline: this.state.dueDate, description: this.state.description };

        const request = new UserHeaderHttpRequest(`/api/tasks/${this.props.taskID}`, this.props.userInfo, { "Content-Type": "application/json" });
        RetryableFetch.fetch_retry(request,
            {
                method: 'PUT',
                mode: 'cors',
                body: JSON.stringify(updatedTask)
            }).then((response) => response.json())
            .then(async () => {
                await this.props.refreshPage();
                this.setState({ hasChanged: false });
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    // First process if it's the first time delete has been requested or not - gives user opportunity to "back out"
    // Upon confirming with a second click, the task is deleted and the parent task becomes the new displayed task
    // If there is no listed parent task, then it was a project head task. In this case, user is taken back to the
    // project selection page
    deleteTask = () => {
        if (this.state.wasDeleteRequested) {
            const request = new UserHeaderHttpRequest(`/api/tasks/${this.props.taskID}`, this.props.userInfo, { "Content-Type": "application/json" });
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
                        this.props.changeHead();
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
        let SaveButton: ButtonVariantProps["variant"];
        let DeleteButton: ButtonVariantProps["variant"];
        let StatsButton: ButtonVariantProps["variant"];
        let HistoryButton: ButtonVariantProps["variant"];
        let rows;
        let columns;
        let style;
        let formLabelColumns:any;
        let formGroupColumns:any;
        let sharedTabCol1: any;
        let sharedTabCol2: any;

        // We can calculate the date only if state is populated
        if (!!(this.state.dueDate)) {
            this.calculateDaysLeft(this.state.dueDate);
        }
        if (this.props.fontSize === 16) {
            style = font16;
            rows = "13";
            columns = "100";
            formLabelColumns = "2";
            formGroupColumns = "10";
            sharedTabCol1 = "10";
            sharedTabCol2 = "2";
        } else if (this.props.fontSize === 24) {
            style = font24;
            rows = "5";
            columns = "60";
            formLabelColumns = "2";
            formGroupColumns = "10";
            sharedTabCol1 = "9";
            sharedTabCol2 = "3";
        } else if (this.props.fontSize === 32) {
            style = font32;
            rows = "2";
            columns = "60";
            formLabelColumns = "3";
            formGroupColumns = "9";
            sharedTabCol1 = "9";
            sharedTabCol2 = "3";
        } else {
            style = font40;
            rows = "1";
            columns = "60";
            formLabelColumns = "3";
            formGroupColumns = "9";
            sharedTabCol1 = "8";
            sharedTabCol2 = "4";
        }

        let descFormStyle;
        let descBoxStyle;
        let titleStyle;
        if (this.props.theme === "light") {
            SaveButton = "outline-success";
            DeleteButton = "outline-danger";
            StatsButton = "outline-info";
            HistoryButton = "outline-info";
            descFormStyle = style.desc;
            descBoxStyle = style.desc;
            titleStyle = style.name;
        } else {
            SaveButton = "success";
            DeleteButton = "danger";
            StatsButton = "info";
            HistoryButton = "info";
            descFormStyle = style.descDark;
            descBoxStyle = style.descDarkBox;
            titleStyle = style.darkName;
        }

        const daysLeftString = this.daysLeftCheck();

        let savedStatusMessage;
        if(this.state.hasChanged){
            savedStatusMessage = <Badge style={style.badge}> Unsaved Changes </Badge>;
        } else {
            savedStatusMessage = <Badge/>;
        }



        return (
            <Container style={styles.container}>
                <Row style={styles.row} noGutters={true}>
                    <Col xs="2" >
                        <Row><Button
                            variant={SaveButton}
                            size='lg'
                            block
                            style={style.saveButton}
                            onClick={this.updateTask}
                            disabled={!this.state.hasChanged}
                        >
                            {this.saveText}
                        </Button></Row>
                        <Row> {savedStatusMessage} </Row>
                    </Col>
                    <Col xs="8">
                        <Form.Control
                            onChange={(event: any) => {
                                let fieldVal = event.target.value;
                                this.setState({ name: fieldVal });
                                this.setState({ hasChanged: true });
                                this.setState({ wasDeleteRequested: false })
                                this.deleteButtonText = "Delete";
                            }}
                            style={titleStyle}
                            value={this.state.name}
                        />
                    </Col>
                    <Col xs="2">
                        <Button
                            variant={DeleteButton}
                            size='lg'
                            block
                            style={style.deleteButton}
                            onClick={this.deleteTask}
                        >
                            {this.deleteButtonText}
                        </Button>
                    </Col>
                </Row>
                <Row noGutters={true}>
                    <TaskProgressBar percentage={this.state.completion} theme={this.props.theme} fontSize={this.props.fontSize} />
                </Row>
                <Row noGutters={true}>
                    <Form style={style.datePick}>
                        <Form.Group as={Row} noGutters={true}>
                            <Form.Label column xs="4">Due Date: </Form.Label>
                            <Col xs="8">
                                <Form.Text style={style.font}>
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
                    <LabelText fontSize={this.props.fontSize}> {daysLeftString} </LabelText>
                </Row>
                <Row>
                    <Col xs="5"> <StatusDropdown taskStatus={this.state.taskStatus} statusList={this.statusOptions} theme={this.props.theme} handleChange={this.handleStatusChange.bind(this)} fontSize={this.props.fontSize} /> </Col>
                    <Col xs="7"><AssignedDropdown
                        projectId={this.props.projectId}
                        theme={this.props.theme}
                        handleChange={this.handleAssignedChange.bind(this)}
                        fontSize={this.props.fontSize}
                        userInfo={this.props.userInfo}/>
                    </Col>
                </Row>
                <Row noGutters={true}>
                    <Form style={descFormStyle}>
                        <Form.Group as={Row} noGutters={true}>
                            <Form.Label column xs={formLabelColumns}> Description: </Form.Label>
                            <Col xs={formGroupColumns}>
                                <Form.Control
                                    as="textarea"
                                    rows={rows}
                                    cols={columns}
                                    onChange={(event: any) => {
                                        let fieldVal = event.target.value;
                                        this.setState({ description: fieldVal });
                                        this.setState({ hasChanged: true });
                                        this.setState({ wasDeleteRequested: false })
                                        this.deleteButtonText = "Delete";
                                    }}
                                    style={descBoxStyle}
                                    value={this.state.description}
                                />
                            </Col>
                        </Form.Group>
                    </Form>
                </Row>
                <Row noGutters={true}>
                    <Col xs={sharedTabCol1} style={styles.sharedTab}> <ShareUsers owner={this.owner} sharedUsers={this.sharedUsers} theme={this.props.theme} fontSize={this.props.fontSize} /> </Col>
                    <Col xs={sharedTabCol2}>
                        <Row noGutters={true}>
                            <Button
                                variant={HistoryButton}
                                size="lg"
                                block
                                style={style.historyButton}
                                onClick={this.props.showHistoryTab}>
                                History
                                    </Button>
                        </Row>
                        <Row noGutters={true}>
                            <Button
                                variant={StatsButton}
                                size="lg"
                                block
                                style={style.statButton}
                                onClick={this.props.showStatTab}>
                                Statistics
                                    </Button>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
};
