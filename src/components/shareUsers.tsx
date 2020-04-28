import * as React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { UserInfo } from './userInfo';
import { UserHeaderHttpRequest } from './userHeaderHttpRequest';
import { RetryableFetch } from './retryableFetch';
import Col from 'react-bootstrap/Col';
import Overlay from 'react-bootstrap/Overlay';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

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
}

interface IShareUserProps {
    projectId: number;
    theme: string;
    fontSize: number;
    userInfo: UserInfo;
}

interface IShareUserState {
    isLoaded: boolean;
    error: boolean;
    owner: IUser;
    collaborators: IUser[];
    isOwner: boolean;
    target: any;
    showPopup: boolean;
}

export class ShareUsers extends React.Component<IShareUserProps, IShareUserState> {
    addEmail: string;
    handlePopup: ({ target }: { target: any; }) => void;

    constructor(props: IShareUserProps) {
        super(props);
        
        this.handlePopup = ({ target }) => {
			this.setState(s => ({ target, showPopup: !s.showPopup }));
        };
        
        this.state = {
            isLoaded: false,
            error: false,
            owner: null,
            collaborators: [],
            isOwner: false,
            showPopup: false,
            target: null
        };
    }

    public componentDidMount = () => {
        const request = new UserHeaderHttpRequest(`/api/projects/${this.props.projectId}`, this.props.userInfo);
        RetryableFetch.fetch_retry(request)
            .then(res => res.json())
            .then((result: IProject) => {
                    this.setState({ 
                        owner: new UserViewModel(result.owner),
                        collaborators: result.collaborators
                            .map((item) => {
                            return new UserViewModel(item);
                        }),
                        isLoaded: true, 
                        error: false,
                        isOwner: (result.owner === this.props.userInfo.email)
                    });
                },
                (error) => {
                    this.setState({ 
                        isLoaded: true, 
                        error: true});
                }
            );
    }

    public componentDidUpdate = (oldProps:IShareUserProps) => {
        if (oldProps.userInfo !== this.props.userInfo || oldProps.projectId !== this.props.projectId ) {
            const request = new UserHeaderHttpRequest(`/api/projects/${this.props.projectId}`, this.props.userInfo);
            RetryableFetch.fetch_retry(request)
                .then(res => res.json())
                .then((result: IProject) => {
                        this.setState({ 
                            owner: new UserViewModel(result.owner),
                            collaborators: result.collaborators
                                .map((item) => {
                                return new UserViewModel(item);
                            }),
                            isLoaded: true, 
                            error: false,
                            isOwner: (result.owner === this.props.userInfo.email)
                        });
                    },
                    (error) => {
                        this.setState({ 
                            isLoaded: true, 
                            error: true});
                    }
                );
        }
    }

    public render() {

        //TODO: implement loading functionality
        if (!this.state.isLoaded){
            return <>Loading...</>;
        }
        else if (this.state.error){
            return <>Error...</>;
        }

        const collaborators = this.state.collaborators.map((item) => {
            return (
                <Container key={item.id} style={this.style().user}>{item.email}</Container>
            );
        });

        return (
            <Container style={this.style().box}>
                <Row noGutters={true}>
                    <Col xs={3} style={this.style().user}>Owner:<br/>{this.state.owner.email}</Col>
                    <Col xs={9}>
                        <Row xs={4} style={this.collaboratorsRowStyle()}>Collaborators:
                            <Button style={this.addButtonStyle()}
                                variant={(this.props.theme === "light") ? "outline-dark" : "outline-light"}
                               onClick={this.handlePopup}>+</Button>
                            <Overlay target={this.state.target} show={this.state.showPopup} placement="top">
                                <Container style={this.popupStyle()}>
                                    <Row xs={4}>
                                        <Col xs={{span:8, offset: 2}} style={this.popupColStyle()}>Add a collaborator:</Col>
                                    </Row>
                                    <Row xs={8}>
                                        <Col xs={{span:8, offset: 2}}><InputGroup className="mb-3">
                                            <FormControl onChange={this.updateEmailInput}
                                            placeholder="Email"
                                            aria-label="Email"/>
                                        </InputGroup></Col>
                                    </Row>
                                    <Row>
                                        <Col xs={{span:8, offset: 2}} style={this.popupColStyle()}>
                                            <Button onClick={this.handleOnAddCollaborator}>Submit</Button>
                                    </Col>
                                    </Row>
                                </Container>
                            </Overlay>
                        </Row>
                        <Row xs={8} style={{margin: "0"}}>
                            <ListGroup>
                                <ListGroup horizontal>
                                    <ButtonGroup>
                                        {collaborators}
                                    </ButtonGroup>
                                </ListGroup>
                            </ListGroup>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }

    private handleOnAddCollaborator = () => {
        const collaborators: String[] = this.state.collaborators.map(c => c.email);

        if (!collaborators.includes(this.addEmail)){

            collaborators.push(this.addEmail.toLowerCase());
            const newProject = { collaborators };
    
            const request = new UserHeaderHttpRequest(`/api/projects/${this.props.projectId}`, this.props.userInfo, { 'Content-Type': 'application/json' });
            RetryableFetch.fetch_retry(request,
                {
                    method: 'PUT',
                    mode: 'cors',
                    body: JSON.stringify(newProject)
                }).then((response) => response.json())
                .then((result: IProject) => {
                    // This will refresh the page with the new project as the current head.
                    this.setState({collaborators: result.collaborators
                        .map((item) => {
                    return new UserViewModel(item)}), showPopup: false});
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        }
    }

    private updateEmailInput = (change: any) => {
        this.addEmail = change.target.value;
    }

    private collaboratorsRowStyle = () => {
        return {
            margin: "0",
            padding: "5px",
            justifyContent: "space-between"
        };
    }

    private addButtonStyle = () => {
        const fontSize = this.props.fontSize;

        const THRESHHOLD_FONT_SIZE: number = 24;
        const SMALL_WIDTH: number = 32;
        const LARGE_WIDTH: number = 48;

        const calculatedSize = (fontSize <= THRESHHOLD_FONT_SIZE) ? SMALL_WIDTH : LARGE_WIDTH;

        return {
            fontSize,
            padding: 0,
            width: calculatedSize,
            maxWidth: calculatedSize,
            height: calculatedSize,
            maxHeight: calculatedSize,
            display: (this.state.isOwner) ? "inline-block" : "none"
        };
    }

    private popupStyle = () => {
        return {
            backgroundColor: "#ffffff",
            width: "25%",
            padding: "5px",
            border: "solid black 1px"
        }
    }

    private popupColStyle = () => {
        return {
            display: "flex",
            justifyContent: "center"
        };
    }

    private style = () => {
        const fontSize = this.props.fontSize;

        const THRESHHOLD_FONT_SIZE: number = 24;
        const SMALL_WIDTH: number = 150;
        const LARGE_WIDTH: number = 150;
        const MAX_WIDTH: number = 350;

        if (this.props.theme === "light"){
            return {
                user: {
                    display: "flex",
                    fontSize,
                    minwidth: (fontSize <= THRESHHOLD_FONT_SIZE) ? SMALL_WIDTH : LARGE_WIDTH,
                    maxWidth: MAX_WIDTH,
                    borderStyle: "solid",
                    borderWidth: "0 thin 0 0",
                    borderRadius: ".25rem 0 0 .25rem",
                    justifyContent: "center"
                },
                collaborators: {
                    fontSize,
                    borderStyle: "none",
                    margin: "auto"
                },
                box: {
                    minWidth: 100,
                    padding: 0,
                    margin: 0
                }
            };
        }
        else {
            return {
                user: {
                    display: "flex",
                    fontSize,
                    minwidth: (fontSize <= THRESHHOLD_FONT_SIZE) ? SMALL_WIDTH : LARGE_WIDTH,
                    maxWidth: MAX_WIDTH,
                    borderStyle: "solid",
                    borderWidth: "0 thin 0 0",
                    borderRadius: ".25rem 0 0 .25rem",
                    justifyContent: "center",
                    backgroundColor: "#343a40",
                    color: "#f8f9e8",
                    borderColor: "#f8f9e8"
                },
                collaborators: {
                    fontSize,
                    borderStyle: "none",
                    margin: "auto",
                    backgroundColor: "#343a40",
                    color: "#f8f9e8"
                },
                box: {
                    minWidth: 100,
                    padding: 0,
                    margin: 0,
                    backgroundColor: "#343a40",
                    color: "#f8f9e8"
                }
            };
        }
    };
}
