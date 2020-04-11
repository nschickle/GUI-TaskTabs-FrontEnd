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
import { TaskTags } from './taskTags';
import { ShareUsers } from './shareUsers';
import ApplicationConfig from './applicationConfig';

const styles = {
    font: {
        fontSize: 32
    },
    desc: {
        fontSize: 24,
        marginTop: 10,
        marginBottom: 10,
        maxHeight: 150
    },
    container: {
        paddingLeft: 0,
        paddingRight: 0,
        minWidth: 650
    },
    row: {
        paddingTop: 50,
        minWidth: 300
    },
    saveButton: {
        height: 100,
        width: 160,
        fontSize: 32
    },
    deleteButton: {
        marginTop: 50,
        fontSize: 32
    },
    datePick: {
        fontSize: 32,
        margin: "auto",
        marginTop: 10
    },
    sharedTab: {
        bottom: 0,
        left: 0,
        borderColor: "gray",
        borderStyle: "solid",
        padding: 0
    },
    historyButton: {
        height: 150,
        width: 160,
        fontSize: 32
    }
}

const Title = styled.div`
    font-size: 72px;
    margin-left: 50px;
    text-align: center;
    min-width: 200px;
`;

const LabelText = styled.div`
    font-size: 32px;
    text-align: center;
    margin: auto;
    margin-bottom: 15px;
    width: 175px;
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
    name: string;
    completion: number;
    description: string;
    dueDate: Date;
    status: string;
    assignee: number;
    owner: User;
    sharedUsers: User[];
};

// TaskView is intended to be the center view for all tasks, substasks and project heads.
export class TaskView extends React.Component<TaskViewProps>{
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


    state = { width: 0, height: 0, dueDate: this.props.dueDate, description: this.props.description, taskStatus: this.props.status, assignedState: this.props.assignee };


    constructor(props: TaskViewProps) {
        super(props);
        this.displayedName = this.name;
		//this.description = this.props.description;

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

        this.state = { width: 0, height: 0, dueDate: this.props.dueDate, description: this.props.description, taskStatus: this.props.status, assignedState: this.props.assignee };
    }

    componentDidUpdate(newProps: TaskViewProps) {
        const { dueDate } = this.props;
        if (newProps.dueDate !== dueDate) {
            this.setState({
                dueDate: dueDate
            })
        }
    }

    handleChange = (date: Date) => {
        this.setState({
            dueDate: date
        });
        this.calculateDaysLeft(date);
    };
	
	handleDescChange(event: any){
		//this.description = event.currentTarget.value;
		let fieldVal = event.target.value;
		this.setState({
			description: fieldVal
		});
		//this.state.description = fieldVal;
	};
	
	handleStatusChange(e: React.ChangeEvent<HTMLSelectElement>) {
        this.setState({taskStatus: e.target.value});
    }
	
	handleAssignedChange(e: React.ChangeEvent<HTMLSelectElement>) {
        this.setState({assignedState: e.target.value});
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
	
	// Update Subtask in the database based on information in the current task
	updateTask = () => {
		console.log(this.state.assignedState);
        // TODO 
        // should be user from google oauth
        const updatedTask = {owner: this.owner, title: this.name, status: this.state.taskStatus, assignedTo: this.state.assignedState, progress: this.props.completion, deadline: this.state.dueDate, description: this.state.description};
        fetch(`${ApplicationConfig.api.staging.baseUrl}/api/tasks/${this.props.taskID}`,
        {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(updatedTask)
        }).then((response) => response.json())
            .then((data) => {
                // This will refresh the page with the new task as the current head.
                //this.props.changeHead(data._id);
          })
          .catch((error) => {
            console.error('Error:', error);
          });
		//this.saveText = "Saved!";
		//setTimeout(function(){ this.saveText = "Save" }, 3000);
		alert("Saved!");
    }
	
    // TODO
    // When the database is integrated, we need to implement the onChange here so that
    // the new text is saved in some way and inserted into the database.
    // <DescText value={description} onChange={e => null} />
    render() {
        // We can calculate the date only if state is populated
        if(!!(this.state.dueDate)) {
            this.calculateDaysLeft(this.state.dueDate);
        }
        const daysLeftString = this.daysLeftCheck();
        const name = this.displayName();
        const description = this.props.description;
        return (
            <Container style={styles.container}>
                <Row style={styles.row} noGutters={true}>
                    <Col md="2" >
                        <Button
                            variant="outline-success"
                            size='lg'
                            block
                            style={styles.saveButton}
							onClick={this.updateTask}
                        >
						{this.saveText}
                        </Button>
                    </Col>
                    <Col md="8"> <Title>{name}</Title> </Col>
                    <Col md="2">
                        <Button
                            variant="outline-danger"
                            size='lg'
                            block
                            style={styles.deleteButton}
                        >
                            Delete
                        </Button>
                    </Col>
                </Row>
                <Row noGutters={true}>
                    <TaskProgressBar percentage={this.props.completion} />
                </Row>
                <Row noGutters={true}>
                    <Form style={styles.datePick}>
                        <Form.Group as={Row} noGutters={true}>
                            <Form.Label column sm="4">Due Date: </Form.Label>
                            <Col sm="8">
                                <Form.Text style={styles.font}>
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
                    <LabelText> {daysLeftString} </LabelText>
                </Row>
                <Row>
                    <Col md="5"> <StatusDropdown taskStatus={this.status} statusList={this.statusOptions} handleChange={this.handleStatusChange.bind(this)}/> </Col>
                    <Col md="7"><AssignedDropdown assignedState={this.props.assignee} sharedUsers={this.sharedUsers} owner={this.owner} handleChange={this.handleAssignedChange.bind(this)}/> </Col>
                </Row>
                <Row noGutters={true}>
                    <Form style={styles.desc}>
                        <Form.Group as={Row} noGutters={true}>
                            <Form.Label column sm="2"> Description: </Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    as="textarea"
                                    rows="3"
                                    cols="55"
                                    defaultValue={description}
                                    onChange={this.handleDescChange.bind(this)}
                                    style={styles.desc}
                                />
                            </Col>
                        </Form.Group>
                    </Form>
                </Row>
                <Row noGutters={true}>
                    <Col md="9" style={styles.sharedTab}> <ShareUsers owner={this.owner} sharedUsers={this.sharedUsers} /> </Col>
                    <Col md="2">
                        <Button
                            variant="outline-info"
                            size="lg"
                            block
                            style={styles.historyButton}>
                            History
                        </Button>
                    </Col>
                </Row>
            </Container>
        );
    }
};
