import * as React from "react";

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const font = {
    fontSize: 32
};

interface IUser {
    id: number;
    name: string;
}

// Needed in order to do anything with changing the state
interface IAssignedState {
    assignedState: number;
}

interface IAssignedDropdownProps {
    assignedState: number;
    sharedUsers: IUser[];
    owner: IUser;
	handleChange: any;
}

export class AssignedDropdown extends React.Component<IAssignedDropdownProps, IAssignedState> {
    private options: IUser[];
    private owner: IUser;

    constructor(props: IAssignedDropdownProps) {
        super(props);
        this.state = {assignedState: props.assignedState};

        this.options = props.sharedUsers;
        this.owner = props.owner;
		
		this.handleChange = this.handleChange.bind(this);
    }
	
	componentDidUpdate(newProps: IAssignedDropdownProps) {
        const {assignedState} = this.props;
        if (newProps.assignedState !== assignedState) {
            this.setState({
                assignedState: assignedState
            })
        }
    }

    public render() {
        const assignedState = this.state.assignedState;

        // Maps through the array given and sets up the options
        const arrayOp = this.options.map((item) => {
            return (
                <option key={item.id} value={item.id}>{item.name}</option>
                );
        });

        return(
            <Form>
                <Form.Group as={Row} controlId="assigneeDropdown">
                    <Form.Label column sm="5" style={font}>Assigned To:</Form.Label>
                    <Col sm="7">
                        <Form.Control
                            as="select"
                            onChange={this.handleChange}
                            value={this.state.assignedState}
                            size="lg"
                            style={font}
                        >
                            <option value={this.owner.id}>{this.owner.name}</option>
                            {arrayOp}
                        </Form.Control>
                    </Col>
                </Form.Group>
            </Form>
        );
    }

    // Handles when state is changed
	// MOVED TO TaskView.tsx TO ALLOW "PASSING UP" THE STATE
    private handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        this.setState({assignedState: Number(e.target.value)});
		this.props.handleChange(e);
    }
}
