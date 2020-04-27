import * as React from "react";

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { UserInfo } from "./userInfo";
import { UserHeaderHttpRequest } from "./userHeaderHttpRequest";
import { RetryableFetch } from "./retryableFetch";

interface IUser {
    id: string;
    email: string;
}

class UserViewModel implements IUser{
    id: string;
    email: string;

    constructor(email: string){
        this.id = email;
        this.email = email;
    }
}

interface IProject {
    _id: string;
    owner: string;
    collaborators: string[];
    assignedTo: string;
}

// Needed in order to do anything with changing the state
interface IAssignedState {
    isLoaded: boolean;
    error: boolean;
    assignedTo: IUser;
    collaborators: IUser[];
    selectIndex: number;
}

interface IAssignedDropdownProps {
    projectId: number;
    handleChange: any;
    theme: string;
    fontSize: number;
    userInfo: UserInfo;
}

export class AssignedDropdown extends React.Component<IAssignedDropdownProps, IAssignedState> {

    constructor(props: IAssignedDropdownProps) {
        super(props);
        this.state = {
            isLoaded: false,
            error: false,
            assignedTo: null,
            collaborators: [],
            selectIndex: -1
        };
    }

    public componentDidMount = () => {
        const request = new UserHeaderHttpRequest(`/api/projects`, this.props.userInfo);
        RetryableFetch.fetch_retry(request)
            .then(res => res.json())
            .then((result: IProject[]) => {
                    const proj: IProject = result.filter(p => p._id === this.props.projectId.toString())[0];
                    this.setState({
                        collaborators: proj.collaborators
                            .map((item) => {
                            return new UserViewModel(item);
                        }),
                        assignedTo: new UserViewModel(proj.assignedTo),
                        selectIndex: proj.collaborators.findIndex(c => c === proj.assignedTo),
                        isLoaded: true, 
                        error: false,
                    });
                },
                (error) => {
                    this.setState({ 
                        isLoaded: true, 
                        error: true});
                }
            );
    }

    public render() {

        //TODO: Implement loading mechanism
        if (!this.state.isLoaded){
            return <>Loading...</>;
        }
        else if (this.state.error){
            return <>Error...</>;
        }

        // Maps through the array given and sets up the options
        const collaboratorOptions = this.state.collaborators.map((item, i) => {
            return (
                <option key={item.id} value={i.toString()}>{item.email}</option>
            );
        });
        collaboratorOptions.unshift(<option key={""} value={"-1"}>Unassigned</option>);
        
        return(
            <Form>
                <Form.Group as={Row} controlId="assigneeDropdown">
                    <Form.Label column sm="5" style={this.style().label}>Assigned To:</Form.Label>
                    <Col sm="7">
                        <Form.Control
                            as="select"
                            value={this.state.selectIndex.toString() || "-1"}
                            onChange={(event: any) => {
                                const index = Number(event.target.value);

                                const email: string = (index >= 0)
                                    ? this.state.collaborators[index].email
                                    : null;

                                this.setState({
                                    assignedTo: new UserViewModel(email),
                                    selectIndex: index});
                                this.props.handleChange(email);
                            }}
                            size="lg"
                            style={this.style().formControl}>
                            {collaboratorOptions}
                        </Form.Control>
                    </Col>
                </Form.Group>
            </Form>
        );
    }

    private style(){
        const fontSize = this.props.fontSize;

        if (this.props.theme === "light") {
            return {
                formControl: {
                    fontSize
                },
                label: {
                    fontSize
                }
            }
        }
        else {
            return {
                formControl: {
                    fontSize,
                    backgroundColor: "#343a40",
                    color: "#f8f9e8"
                },
                label: {
                    fontSize,
                    backgroundColor: "#232931",
                    color: "#f8f9e8"
                }
            }
        }
    }
}
