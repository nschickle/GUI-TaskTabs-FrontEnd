import * as React from "react";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';

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

const testOwner: IUser = { id: 0, name: "Super Steve" };

interface IUser {
  id: number;
  name: string;
}

interface INavBarProps {
    showProjectPage: any;
}

interface NavBarState {
    showProjectPage: any;
}

export class NavBar extends React.Component<INavBarProps, NavBarState> {
    owner: IUser;

    constructor(props: INavBarProps) {
        super(props);

        this.owner = testOwner;

        this.state = {showProjectPage: props.showProjectPage};
    }

    getProjectLanding = () => {
        this.state.showProjectPage(false);
    }

    public render() {
        return(
            <Container fluid>
                <Navbar bg="light" variant="light" style={styles.size}>
                    <Navbar.Brand>TaskTabs</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav>
                            <Button
                                onClick={this.getProjectLanding}
                                variant="outline-secondary"
                                style={styles.button}>
                                Home</Button>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav>
                            <Dropdown>
                                <Dropdown.Toggle
                                    variant="outline-secondary"
                                    style={styles.button}
                                    id="accountDropdown">
                                    {this.owner.name}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item> Account </Dropdown.Item>
                                    <Dropdown.Item> Settings </Dropdown.Item>
                                    <Dropdown.Item> Log Out </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        );
    }
}
