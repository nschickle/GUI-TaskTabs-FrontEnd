import * as React from "react";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const styles = {
    size: {
        fontSize: 32,
        height: 55,
        borderColor: "gray",
        borderStyle: "solid"
    },
    button: {
        fontSize: 24,
        height: 50,
        borderStyle: "none"
    }
}

interface IUser {
  id: number;
  name: string;
}

interface INavBarProps {
    owner: IUser,
    handleStateChange: any
}

interface NavBarState {
    handleStateChange: any
}

export class NavBar extends React.Component<INavBarProps, NavBarState> {
    owner: IUser;

    constructor(props: INavBarProps) {
        super(props);

        this.owner = props.owner;

        this.state = {handleStateChange: props.handleStateChange};
    }

    getProjectLanding = () => {
        this.state.handleStateChange(false);
    }

    public render() {
        return(
            <Container fluid>
                <Navbar bg="light" variant="light" style={styles.size}>
                    <Navbar.Brand>TaskTabs</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav variant="pills">
                            <Button
                                onClick={this.getProjectLanding}
                                variant="outline-secondary"
                                style={styles.button}>
                                Home</Button>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav variant="pills">
                            <Button
                                variant="outline-secondary"
                                style={styles.button}>
                                Settings</Button>
                            <Button
                                variant="outline-secondary"
                                style={styles.button}>
                                {this.owner.name}</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        );
    }
}
