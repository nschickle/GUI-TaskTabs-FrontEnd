import * as React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const font16 = {
    owner: {
        fontSize: 16,
        width: 110,
        borderLeft: "none"
    },
    ownerDark: {
        fontSize: 16,
        width: 110,
        borderLeft: "none",
        backgroundColor: "#343a40",
        color: "#f8f9e8",
        borderColor: "#f8f9e8"
    },
    sharedW: {
        fontSize: 16,
        borderStyle: "none",
        margin: "auto"
    },
    sharedWDark: {
        fontSize: 16,
        borderStyle: "none",
        margin: "auto",
        backgroundColor: "#343a40",
        color: "#f8f9e8"
    },
    user: {
        fontSize: 16,
        width: 110
    },
    box: {
        minWidth: 100,
        padding: 0,
        margin: 0
    },
    darkBox: {
        minWidth: 100,
        padding: 0,
        margin: 0,
        backgroundColor: "#343a40",
        color: "#f8f9e8"
    }
};

const font24 = {
    owner: {
        fontSize: 24,
        width: 110,
        borderLeft: "none"
    },
    ownerDark: {
        fontSize: 24,
        width: 110,
        borderLeft: "none",
        backgroundColor: "#343a40",
        color: "#f8f9e8",
        borderColor: "#f8f9e8"
    },
    sharedW: {
        fontSize: 24,
        borderStyle: "none",
        margin: "auto"
    },
    sharedWDark: {
        fontSize: 24,
        borderStyle: "none",
        margin: "auto",
        backgroundColor: "#343a40",
        color: "#f8f9e8"
    },
    user: {
        fontSize: 24,
        width: 110
    },
    box: {
        minWidth: 100,
        padding: 0,
        margin: 0
    },
    darkBox: {
        minWidth: 100,
        padding: 0,
        margin: 0,
        backgroundColor: "#343a40",
        color: "#f8f9e8"
    }
};

const font32 = {
    owner: {
        fontSize: 32,
        width: 150,
        borderLeft: "none"
    },
    ownerDark: {
        fontSize: 32,
        width: 150,
        borderLeft: "none",
        backgroundColor: "#343a40",
        color: "#f8f9e8",
        borderColor: "#f8f9e8"
    },
    sharedW: {
        fontSize: 32,
        borderStyle: "none",
        margin: "auto"
    },
    sharedWDark: {
        fontSize: 32,
        borderStyle: "none",
        margin: "auto",
        backgroundColor: "#343a40",
        color: "#f8f9e8"
    },
    user: {
        fontSize: 32,
        width: 150
    },
    box: {
        minWidth: 100,
        padding: 0,
        margin: 0
    },
    darkBox: {
        minWidth: 100,
        padding: 0,
        margin: 0,
        backgroundColor: "#343a40",
        color: "#f8f9e8"
    }
};

const font40 = {
    owner: {
        fontSize: 32,
        width: 150,
        borderLeft: "none"
    },
    ownerDark: {
        fontSize: 32,
        width: 150,
        borderLeft: "none",
        backgroundColor: "#343a40",
        color: "#f8f9e8",
        borderColor: "#f8f9e8"
    },
    sharedW: {
        fontSize: 32,
        borderStyle: "none",
        margin: "auto"
    },
    sharedWDark: {
        fontSize: 32,
        borderStyle: "none",
        margin: "auto",
        backgroundColor: "#343a40",
        color: "#f8f9e8"
    },
    user: {
        fontSize: 32,
        width: 150
    },
    box: {
        minWidth: 100,
        padding: 0,
        margin: 0
    },
    darkBox: {
        minWidth: 100,
        padding: 0,
        margin: 0,
        backgroundColor: "#343a40",
        color: "#f8f9e8"
    }
};

interface User {
    id: number;
    name: string;
}

interface ShareUserProps {
    owner: User;
    sharedUsers: User[];
    theme: string;
    fontSize: number;
}

export class ShareUsers extends React.Component<ShareUserProps> {
    owner: User;
    sharedUsers: User[];

    constructor(props: ShareUserProps) {
        super(props);
        this.owner = props.owner;
        this.sharedUsers = props.sharedUsers;
    }

    render() {
        const sharedArray = this.sharedUsers.map((item) => {
            if(this.props.fontSize == 16){
                if(this.props.theme === "light"){
                    return (
                        <Button key={item.id} style={font16.user} variant="outline-dark">{item.name}</Button>
                    )
                } else {
                    return (
                        <Button key={item.id} style={font16.user} variant="outline-light">{item.name}</Button>
                    )
                }
            } else if(this.props.fontSize == 24) {
                if(this.props.theme === "light"){
                    return (
                        <Button key={item.id} style={font24.user} variant="outline-dark">{item.name}</Button>
                    )
                } else {
                    return (
                        <Button key={item.id} style={font24.user} variant="outline-light">{item.name}</Button>
                    )
                }
            } else if(this.props.fontSize == 32) {
                if(this.props.theme === "light"){
                    return (
                        <Button key={item.id} style={font32.user} variant="outline-dark">{item.name}</Button>
                    )
                } else {
                    return (
                        <Button key={item.id} style={font32.user} variant="outline-light">{item.name}</Button>
                    )
                }
            } else {
                if(this.props.theme === "light"){
                    return (
                        <Button key={item.id} style={font40.user} variant="outline-dark">{item.name}</Button>
                    )
                } else {
                    return (
                        <Button key={item.id} style={font40.user} variant="outline-light">{item.name}</Button>
                    )
                }
            }


        });

        if(this.props.theme === "light"){
            if(this.props.fontSize == 16) {
                return (
                    <Container style={font16.box}>
                        <Row noGutters={true}>
                            <ListGroup horizontal>
                                <ListGroup>
                                    <ListGroup.Item style={font16.owner}>Owner</ListGroup.Item>
                                    <Button style={font16.owner} variant="outline-dark">{this.owner.name}</Button>
                                </ListGroup>
                                <ListGroup>
                                    <ListGroup.Item style={font16.sharedW}>Shared with</ListGroup.Item>
                                    <ListGroup horizontal>
                                        <ButtonGroup>
                                            {sharedArray}
                                        </ButtonGroup>
                                    </ListGroup>
                                </ListGroup>
                            </ListGroup>
                        </Row>
                    </Container>
                );
            } else if(this.props.fontSize == 24) {
                return (
                    <Container style={font24.box}>
                        <Row noGutters={true}>
                            <ListGroup horizontal>
                                <ListGroup>
                                    <ListGroup.Item style={font24.owner}>Owner</ListGroup.Item>
                                    <Button style={font24.owner} variant="outline-dark">{this.owner.name}</Button>
                                </ListGroup>
                                <ListGroup>
                                    <ListGroup.Item style={font24.sharedW}>Shared with</ListGroup.Item>
                                    <ListGroup horizontal>
                                        <ButtonGroup>
                                            {sharedArray}
                                        </ButtonGroup>
                                    </ListGroup>
                                </ListGroup>
                            </ListGroup>
                        </Row>
                    </Container>
                );
            } else if(this.props.fontSize == 32) {
                return (
                    <Container style={font32.box}>
                        <Row noGutters={true}>
                            <ListGroup horizontal>
                                <ListGroup>
                                    <ListGroup.Item style={font32.owner}>Owner</ListGroup.Item>
                                    <Button style={font32.owner} variant="outline-dark">{this.owner.name}</Button>
                                </ListGroup>
                                <ListGroup>
                                    <ListGroup.Item style={font32.sharedW}>Shared with</ListGroup.Item>
                                    <ListGroup horizontal>
                                        <ButtonGroup>
                                            {sharedArray}
                                        </ButtonGroup>
                                    </ListGroup>
                                </ListGroup>
                            </ListGroup>
                        </Row>
                    </Container>
                );
            } else {
                return (
                    <Container style={font40.box}>
                        <Row noGutters={true}>
                            <ListGroup horizontal>
                                <ListGroup>
                                    <ListGroup.Item style={font40.owner}>Owner</ListGroup.Item>
                                    <Button style={font40.owner} variant="outline-dark">{this.owner.name}</Button>
                                </ListGroup>
                                <ListGroup>
                                    <ListGroup.Item style={font40.sharedW}>Shared with</ListGroup.Item>
                                    <ListGroup horizontal>
                                        <ButtonGroup>
                                            {sharedArray}
                                        </ButtonGroup>
                                    </ListGroup>
                                </ListGroup>
                            </ListGroup>
                        </Row>
                    </Container>
                );
            }
        } else {
            if(this.props.fontSize == 16){
                return (
                    <Container style={font16.darkBox}>
                        <Row noGutters={true}>
                            <ListGroup horizontal>
                                <ListGroup>
                                    <ListGroup.Item style={font16.ownerDark}>Owner</ListGroup.Item>
                                    <Button style={font16.owner} variant="outline-light">{this.owner.name}</Button>
                                </ListGroup>
                                <ListGroup>
                                    <ListGroup.Item style={font16.sharedWDark}>Shared with</ListGroup.Item>
                                    <ListGroup horizontal>
                                        <ButtonGroup>
                                            {sharedArray}
                                        </ButtonGroup>
                                    </ListGroup>
                                </ListGroup>
                            </ListGroup>
                        </Row>
                    </Container>
                );
            } else if(this.props.fontSize == 24){
                return (
                    <Container style={font24.darkBox}>
                        <Row noGutters={true}>
                            <ListGroup horizontal>
                                <ListGroup>
                                    <ListGroup.Item style={font24.ownerDark}>Owner</ListGroup.Item>
                                    <Button style={font24.owner} variant="outline-light">{this.owner.name}</Button>
                                </ListGroup>
                                <ListGroup>
                                    <ListGroup.Item style={font24.sharedWDark}>Shared with</ListGroup.Item>
                                    <ListGroup horizontal>
                                        <ButtonGroup>
                                            {sharedArray}
                                        </ButtonGroup>
                                    </ListGroup>
                                </ListGroup>
                            </ListGroup>
                        </Row>
                    </Container>
                );
            } else if(this.props.fontSize == 32){
                return (
                    <Container style={font32.darkBox}>
                        <Row noGutters={true}>
                            <ListGroup horizontal>
                                <ListGroup>
                                    <ListGroup.Item style={font32.ownerDark}>Owner</ListGroup.Item>
                                    <Button style={font32.owner} variant="outline-light">{this.owner.name}</Button>
                                </ListGroup>
                                <ListGroup>
                                    <ListGroup.Item style={font32.sharedWDark}>Shared with</ListGroup.Item>
                                    <ListGroup horizontal>
                                        <ButtonGroup>
                                            {sharedArray}
                                        </ButtonGroup>
                                    </ListGroup>
                                </ListGroup>
                            </ListGroup>
                        </Row>
                    </Container>
                );
            } else {
                return (
                    <Container style={font40.darkBox}>
                        <Row noGutters={true}>
                            <ListGroup horizontal>
                                <ListGroup>
                                    <ListGroup.Item style={font40.ownerDark}>Owner</ListGroup.Item>
                                    <Button style={font40.owner} variant="outline-light">{this.owner.name}</Button>
                                </ListGroup>
                                <ListGroup>
                                    <ListGroup.Item style={font40.sharedWDark}>Shared with</ListGroup.Item>
                                    <ListGroup horizontal>
                                        <ButtonGroup>
                                            {sharedArray}
                                        </ButtonGroup>
                                    </ListGroup>
                                </ListGroup>
                            </ListGroup>
                        </Row>
                    </Container>
                );
            }

        }
    }
}
