import * as React from "react";

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const light = {
    font16: {
        fontSize: 12
    },
    font24: {
        fontSize: 20
    },
    font32: {
        fontSize: 28
    },
    font40: {
        fontSize: 36
    }
};

const dark = {
    font16: {
        fontSize: 12,
        backgroundColor: "#343a40",
        color: "#f8f9e8"
    },
    font24: {
        fontSize: 20,
        backgroundColor: "#343a40",
        color: "#f8f9e8"
    },
    font32: {
        fontSize: 28,
        backgroundColor: "#343a40",
        color: "#f8f9e8"
    },
    font40: {
        fontSize: 36,
        backgroundColor: "#343a40",
        color: "#f8f9e8"
    },
    label16: {
        fontSize: 12,
        backgroundColor: "#232931",
        color: "#f8f9e8"
    },
    label24: {
        fontSize: 20,
        backgroundColor: "#232931",
        color: "#f8f9e8"
    },
    label32: {
        fontSize: 28,
        backgroundColor: "#232931",
        color: "#f8f9e8"
    },
    label40: {
        fontSize: 36,
        backgroundColor: "#232931",
        color: "#f8f9e8"
    }
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
    theme: string;
    fontSize: number;
}

export class AssignedDropdown extends React.Component<IAssignedDropdownProps, IAssignedState> {
    private options: IUser[];
    private owner: IUser;

    constructor(props: IAssignedDropdownProps) {
        super(props);
        this.state = { assignedState: props.assignedState };

        this.options = props.sharedUsers;
        this.owner = props.owner;
    }

    componentDidUpdate(newProps: IAssignedDropdownProps) {
        const { assignedState } = this.props;
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
        if(this.props.theme === "light") {
            if(this.props.fontSize === 16){
                return(
                    <Form>
                        <Form.Group as={Row} controlId="assigneeDropdown">
                            <Form.Label column sm="5" style={light.font16}>Assigned To:</Form.Label>
                            <Col sm="7">
                                <Form.Control
                                    as="select"
                                    onChange={(event: any) => {
                                        this.setState({assignedState: Number(event.target.value) });
                                    this.props.handleChange(event);
                                }}
                                    defaultValue={assignedState}
                                    size="lg"
                                    style={light.font16}
                                >
                                    <option value={this.owner.id}>{this.owner.name}</option>
                                    {arrayOp}
                                </Form.Control>
                            </Col>
                        </Form.Group>
                    </Form>
                );

            } else if(this.props.fontSize === 24){
                return(
                    <Form>
                        <Form.Group as={Row} controlId="assigneeDropdown">
                            <Form.Label column sm="5" style={light.font24}>Assigned To:</Form.Label>
                            <Col sm="7">
                                <Form.Control
                                    as="select"
                                    onChange={(event: any) => {
                                        this.setState({assignedState: Number(event.target.value) });
                                    this.props.handleChange(event);
                                }}
                                    defaultValue={assignedState}
                                    size="lg"
                                    style={light.font24}
                                >
                                    <option value={this.owner.id}>{this.owner.name}</option>
                                    {arrayOp}
                                </Form.Control>
                            </Col>
                        </Form.Group>
                    </Form>
                );

            } else if(this.props.fontSize === 32) {
                return(
                    <Form>
                        <Form.Group as={Row} controlId="assigneeDropdown">
                            <Form.Label column sm="7" style={light.font32}>Assigned To:</Form.Label>
                            <Col sm="5">
                                <Form.Control
                                    as="select"
                                    onChange={(event: any) => {
                                        this.setState({assignedState: Number(event.target.value) });
                                    this.props.handleChange(event);
                                }}
                                    defaultValue={assignedState}
                                    size="lg"
                                    style={light.font32}
                                >
                                    <option value={this.owner.id}>{this.owner.name}</option>
                                    {arrayOp}
                                </Form.Control>
                            </Col>
                        </Form.Group>
                    </Form>
                );

            } else {
                return(
                    <Form>
                        <Form.Group as={Row} controlId="assigneeDropdown">
                            <Form.Label column sm="7" style={light.font40}>Assigned To:</Form.Label>
                            <Col sm="5">
                                <Form.Control
                                    as="select"
                                    onChange={(event: any) => {
                                        this.setState({assignedState: Number(event.target.value) });
                                    this.props.handleChange(event);
                                }}
                                    defaultValue={assignedState}
                                    size="lg"
                                    style={light.font40}
                                >
                                    <option value={this.owner.id}>{this.owner.name}</option>
                                    {arrayOp}
                                </Form.Control>
                            </Col>
                        </Form.Group>
                    </Form>
                );
            }

        } else {
            if(this.props.fontSize === 16){
                return(
                    <Form>
                        <Form.Group as={Row} controlId="assigneeDropdown">
                            <Form.Label column sm="5" style={dark.label16}>Assigned To:</Form.Label>
                            <Col sm="7">
                                <Form.Control
                                    as="select"
                                    onChange={(event: any) => {
                                        this.setState({assignedState: Number(event.target.value) });
                                    this.props.handleChange(event);
                                }}
                                    defaultValue={assignedState}
                                    size="lg"
                                    style={dark.font16}
                                >
                                    <option value={this.owner.id}>{this.owner.name}</option>
                                    {arrayOp}
                                </Form.Control>
                            </Col>
                        </Form.Group>
                    </Form>
                );

            } else if(this.props.fontSize === 24){
                return(
                    <Form>
                        <Form.Group as={Row} controlId="assigneeDropdown">
                            <Form.Label column sm="5" style={dark.label24}>Assigned To:</Form.Label>
                            <Col sm="7">
                                <Form.Control
                                    as="select"
                                    onChange={(event: any) => {
                                        this.setState({assignedState: Number(event.target.value) });
                                    this.props.handleChange(event);
                                }}
                                    defaultValue={assignedState}
                                    size="lg"
                                    style={dark.font24}
                                >
                                    <option value={this.owner.id}>{this.owner.name}</option>
                                    {arrayOp}
                                </Form.Control>
                            </Col>
                        </Form.Group>
                    </Form>
                );

            } else if(this.props.fontSize === 32) {
                return(
                    <Form>
                        <Form.Group as={Row} controlId="assigneeDropdown">
                            <Form.Label column sm="5" style={dark.label32}>Assigned To:</Form.Label>
                            <Col sm="7">
                                <Form.Control
                                    as="select"
                                    onChange={(event: any) => {
                                        this.setState({assignedState: Number(event.target.value) });
                                    this.props.handleChange(event);
                                }}
                                    defaultValue={assignedState}
                                    size="lg"
                                    style={dark.font32}
                                >
                                    <option value={this.owner.id}>{this.owner.name}</option>
                                    {arrayOp}
                                </Form.Control>
                            </Col>
                        </Form.Group>
                    </Form>
                );

            } else {
                return(
                    <Form>
                        <Form.Group as={Row} controlId="assigneeDropdown">
                            <Form.Label column sm="7" style={dark.label40}>Assigned To:</Form.Label>
                            <Col sm="5">
                                <Form.Control
                                    as="select"
                                    onChange={(event: any) => {
                                        this.setState({assignedState: Number(event.target.value) });
                                    this.props.handleChange(event);
                                }}
                                    defaultValue={assignedState}
                                    size="lg"
                                    style={dark.font40}
                                >
                                    <option value={this.owner.id}>{this.owner.name}</option>
                                    {arrayOp}
                                </Form.Control>
                            </Col>
                        </Form.Group>
                    </Form>
                );
            }
        }
    }
}
