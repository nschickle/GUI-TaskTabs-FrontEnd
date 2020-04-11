import * as React from 'react';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const font = {
    fontSize: 32
};

interface Options {
    id: number;
    value: string;
    label: string;
}

// Needed in order to do anything with changing the state
interface StatusState {
    taskStatus: any
}

interface StatusDropdownProps {
    taskStatus: string;
    statusList: Options[];
	handleChange: any;
}

export class StatusDropdown extends React.Component<StatusDropdownProps, StatusState> {
    options: Options[];

    constructor(props: StatusDropdownProps) {
        super(props);
        this.state = {taskStatus: props.taskStatus}
        this.options = props.statusList;

        //this.handleChange = this.handleChange.bind(this);
    }

    // Handles when the state is changed
    // Currently only changes the status
    // Will need to add warnings and change parent and children states as nessisary
	// MOVED TO TaskView.tsx TO ALLOW "PASSING UP" THE STATE
    /*handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
        this.setState({taskStatus: e.target.value});
    }*/

    render() {
        const taskStatus = this.state.taskStatus;

        // Maps through the array given and sets up the options
        const arrayOp = this.options.map((item, i) => {
            return (
                <option key={item.id} value={item.value}>{item.label}</option>
                )
        });

        return(
            <Form style={font}>
                <Form.Group as={Row} controlId="statusDropdown">
                    <Form.Label column sm="4">Status:</Form.Label>
                    <Col sm="8">
                        <Form.Control
                            as="select"
                            onChange={this.props.handleChange}
                            defaultValue={taskStatus}
                            size="lg"
                            style={font}
                        >
                            {arrayOp}
                        </Form.Control>
                    </Col>
                </Form.Group>
            </Form>
        )
    }
}
