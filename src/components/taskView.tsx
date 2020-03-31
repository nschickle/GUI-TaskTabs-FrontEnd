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

const styles = {
    font: {
        fontSize: 32
    },
    desc: {
        fontSize: 24,
        marginTop: 10,
        marginBottom: 10,
        maxHeight: 225
    },
    container: {
        paddingLeft: 0,
        paddingRight: 0
    },
    row: {
        paddingTop:50
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
        margin: 0,
        borderColor: "gray",
        borderStyle: "solid",
        width: 750,
        padding: 0
    },
    historyButton: {
        marginTop: 0,
        height: 150,
        width: 160
    }
}

const Title = styled.div`
    font-size: 72px;
    margin-left: 50px;
    text-align: center;
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

interface Tag {
    tag: string;
    id: number;
}

interface TaskViewProps {
    name: string;
    completion: number;
    description: string;
    dueDate: Date;
    startDate: Date;
    status: string;
    assignee: string;
    tags: Tag[];
    owner: User;
    sharedUsers: User[];
};

// TaskView is intended to be the center view for all tasks, substasks and project heads.
export class TaskView extends React.Component<TaskViewProps>{
    name: string;
    displayedName: string;
    displayedDueDate: string;
    today: Date;
    daysLeft: number;
    displayedDaysLeft: string;
    displayedStartDate: string;
    status: string;
    statusOptions: Options[];
    assignedOptions: Options[];
    tags: Tag[];
    owner: User;
    sharedUsers: User[];

	state = {width: 0, height: 0, dueDate: this.props.dueDate};


    constructor(props: TaskViewProps) {
        super(props);
        this.displayedName = this.name;

        this.today = new Date();
        this.daysLeft = 0;
        this.displayedDaysLeft = "0 Days Left!";
        this.displayedDueDate = "1/1/1900";
        this.displayedStartDate = "1/1/1900";

        this.status = props.status;
        this.statusOptions = [
            { id: 0, value: 'active', label: 'Active' },
            { id: 1, value: 'inactive', label: 'Inactive' },
            { id: 2, value: 'complete', label: 'Complete' },
        ];

        this.owner = props.owner;
        this.sharedUsers = props.sharedUsers;

        this.tags = props.tags;

        this.state = { width: 0, height: 0, dueDate: this.props.dueDate};
    }

	handleChange = (date: Date) => {
		this.setState({
			dueDate: date
		});
		this.calculateDaysLeft();
	};

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
    calculateDaysLeft = () => {
        if (this.today !== this.state.dueDate) {
            const dueMonth = this.state.dueDate.getMonth() + 1;
            const dueYear = this.state.dueDate.getFullYear();
            const dueDay = this.state.dueDate.getDate();
            const todayMonth = this.today.getMonth() + 1;
            const todayYear = this.today.getFullYear();
            const todayDay = this.today.getDate();
            const divide = 1000 * 60 * 60 * 24;

            this.daysLeft = Math.floor((Date.UTC(dueYear, dueMonth, dueDay) - Date.UTC(todayYear, todayMonth, todayDay)) / divide);
        }
    }

    // Takes the due date and turns it into a string
    dueDateString = () => {
        const dueMonth = this.props.dueDate.getMonth() + 1;
        const dueYear = this.props.dueDate.getFullYear();
        const dueDay = this.props.dueDate.getDate();

        this.displayedDueDate = dueMonth + "/" + dueDay + "/" + dueYear;

    }

    // Takes the start date and turns it into a string
    startDateString = () => {
        const month = this.props.startDate.getMonth() + 1;
        const year = this.props.startDate.getFullYear();
        const day = this.props.startDate.getDate();

        this.displayedStartDate = month + "/" + day + "/" + year;
    }

    // Checks how many days are left and changes message accordingly
    daysLeftCheck = () => {
        if(this.daysLeft >= 0) {
            if(this.daysLeft === 1) {
                this.displayedDaysLeft = this.daysLeft + " Day Left!";
            }
            else {
                this.displayedDaysLeft = this.daysLeft + " Days Left!";
            }
        }
        else {
            if(this.daysLeft === -1) {
                this.displayedDaysLeft = Math.abs(this.daysLeft) + " Day Late!";
            }
            else {
                this.displayedDaysLeft = Math.abs(this.daysLeft) + " Days Late!";
            }
        }
    }

    // TODO
    // When the database is integrated, we need to implement the onChange here so that
    // the new text is saved in some way and inserted into the database.
    // <DescText value={description} onChange={e => null} />
    render() {
        this.calculateDaysLeft();
        this.dueDateString();
        this.startDateString();
        this.daysLeftCheck();
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
                        >
                            Save
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
                    <LabelText> {this.displayedDaysLeft} </LabelText>
                </Row>
                <Row>
                    <Col md="5"> <StatusDropdown taskStatus={this.status} statusList={this.statusOptions} /> </Col>
                    <Col md="7"><AssignedDropdown assignedState={this.props.assignee} sharedUsers={this.sharedUsers} owner={this.owner} /> </Col>
                </Row>
                <Row noGutters={true}>
                    <Form style={styles.desc}>
                        <Form.Group as={Row} noGutters={true}>
                            <Form.Label column sm="2"> Description: </Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    as="textarea"
                                    rows="4"
                                    cols="55"
                                    defaultValue={description}
                                    onChange={e => null}
                                    style={styles.desc}
                                />
                            </Col>
                        </Form.Group>
                    </Form>
                </Row>
                <Row noGutters={true}>
                    <Col md="10" style={styles.sharedTab}> <ShareUsers owner={this.owner} sharedUsers={this.sharedUsers} /> </Col>
                    <Col md="2">
                        <Button
                            variant = "outline-info"
                            size = "lg"
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
