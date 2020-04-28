import * as React from "react";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

import { GoogleLogout } from 'react-google-login';
import ApplicationConfig from './applicationConfig';

import * as Logo from "../img/logo.png";


const font16 = {
    size: {
        fontSize: 16,
        height: 60,
        borderColor: "gray",
        borderStyle: "solid",
        borderRadius: 10,
        borderTop: "none"
    },
    button: {
        fontSize: 16,
        height: 50,
        borderStyle: "none"
    },
    dropdown: {
        fontSize: 16,
        borderStyle: "none"
    },
    accountDrop: {
        fontSize: 16,
        width: 175,
        margin: "auto"
    },
    fontSize: {
        fontSize: 16
    },
    buffer: {
        marginRight: 25
    }
};

const font24 = {
    size: {
        fontSize: 24,
        height: 75,
        borderColor: "gray",
        borderStyle: "solid",
        borderRadius: 10,
        borderTop: "none"
    },
    button: {
        fontSize: 24,
        height: 50,
        borderStyle: "none"
    },
    dropdown: {
        fontSize: 24,
        borderStyle: "none"
    },
    accountDrop: {
        fontSize: 24,
        width: 240,
        margin: "auto"
    },
    fontSize: {
        fontSize: 24
    },
    buffer: {
        marginRight: 25
    }
};

const font32 = {
    size: {
        fontSize: 32,
        height: 75,
        borderColor: "gray",
        borderStyle: "solid",
        borderRadius: 10,
        borderTop: "none"
    },
    button: {
        fontSize: 32,
        height: 60,
        borderStyle: "none"
    },
    dropdown: {
        fontSize: 32,
        borderStyle: "none"
    },
    accountDrop: {
        fontSize: 32,
        width: 315,
        margin: "auto"
    },
    fontSize: {
        fontSize: 32
    },
    buffer: {
        marginRight: 75
    }
};

const font40 = {
    size: {
        fontSize: 36,
        height: 80,
        borderColor: "gray",
        borderStyle: "solid",
        borderRadius: 10,
        borderTop: "none"
    },
    button: {
        fontSize: 36,
        height: 80,
        borderStyle: "none"
    },
    dropdown: {
        fontSize: 36,
        borderStyle: "none"
    },
    accountDrop: {
        fontSize: 36,
        width: 375,
        margin: "auto"
    },
    fontSize: {
        fontSize: 36
    },
    buffer: {
        marginRight: 100
    }
}

const styles = {
    gButton: {
        borderStyle: "none"
    },
    img: {
        margin: 20
    }
}

interface INavBarProps {
    hideProjectPage: () => any;
    changeToDarkTheme: () => any;
    changeToLightTheme: () => any;
    changeToCourier: () => any;
    changeToVerdana: () => any;
    font: string;
    theme: string;
    changeToSize16: () => any;
    changeToSize24: () => any;
    changeToSize32: () => any;
    changeToSize40: () => any;
    fontSize: number;
    owner: string;
    setLoggedOut: () => void;
}

interface NavBarState {
    hideProjectPage: () => any;
    changeToDarkTheme: () => any;
    changeToLightTheme: () => any;
    changeToCourier: () => any;
    changeToVerdana: () => any;
    font: string;
    theme: string;
    changeToSize16: () => any;
    changeToSize24: () => any;
    changeToSize32: () => any;
    changeToSize40: () => any;
    fontSize: number;
}

export class NavBar extends React.Component<INavBarProps, NavBarState> {

    constructor(props: INavBarProps) {
        super(props);

        this.state = {
            hideProjectPage: props.hideProjectPage,
            changeToDarkTheme: props.changeToDarkTheme,
            changeToLightTheme: props.changeToLightTheme,
            theme: props.theme,
            changeToCourier: props.changeToCourier,
            changeToVerdana: props.changeToVerdana,
            font: props.font,
            changeToSize16: props.changeToSize16,
            changeToSize24: props.changeToSize24,
            changeToSize32: props.changeToSize32,
            changeToSize40: props.changeToSize40,
            fontSize: props.fontSize,
        };
    }

    getProjectLanding = () => {
        this.state.hideProjectPage();
    }

    logout = () => {
        this.props.setLoggedOut();
    }

    checkTheme = () => {
        if (this.state.theme == "dark") {
            this.state.changeToLightTheme();
            this.setState({ theme: "light" });
        } else {
            this.state.changeToDarkTheme();
            this.setState({ theme: "dark" });
        }
    }

    checkFont = () => {
        if (this.state.font == "verdana") {
            this.state.changeToCourier();
            this.setState({ font: "courier" });
        } else {
            this.state.changeToVerdana();
            this.setState({ font: "verdana" });
        }
    }

    change16 = () => {
        this.state.changeToSize16();
        this.setState({ fontSize: 16 });
    }

    change24 = () => {
        this.state.changeToSize24();
        this.setState({ fontSize: 24 });
    }

    change32 = () => {
        this.state.changeToSize32();
        this.setState({ fontSize: 32 });
    }

    change40 = () => {
        this.state.changeToSize40();
        this.setState({ fontSize: 40 });
    }

    public render() {
        let navBar;
        const theme = this.state.theme;
        const font = this.state.font;
        const fontSize = this.state.fontSize;

        let style;
        if (this.state.fontSize === 16) {
            style = font16;
        } else if (this.state.fontSize === 24) {
            style = font24;
        } else if (this.state.fontSize === 32) {
            style = font32;
        } else {
            style = font40;
        }
        if (this.state.theme === "light") {
            navBar = <Container fluid>
                <Navbar bg="light" variant="light" style={style.size}>
                    <img
                        src={Logo}
                        width="50"
                        height="50"
                        className="d-inline-block"
                        style={styles.img}
                        alt="TaskTabs Logo" />
                    <Navbar.Brand style={style.fontSize}>
                        TaskTabs
                        </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav>
                            <Button
                                onClick={this.getProjectLanding}
                                variant="outline-dark"
                                style={style.button}>
                                Home
                                </Button>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end" >
                        <Nav style={style.buffer}>
                            <Dropdown>
                                <Dropdown.Toggle
                                    variant="outline-dark"
                                    style={style.button}
                                    id="accountDropdown">
                                    {this.props.owner}
                                </Dropdown.Toggle>
                                <Dropdown.Menu
                                    style={style.accountDrop}>
                                    <Button
                                        variant="outline-dark"
                                        style={style.dropdown}>
                                        Account
                                        </Button>
                                    <Button
                                        variant="outline-dark"
                                        style={style.dropdown}
                                        onClick={this.checkTheme}>
                                        Theme: {theme}
                                    </Button>
                                    <Button
                                        variant="outline-dark"
                                        style={style.dropdown}
                                        onClick={this.checkFont}>
                                        Font: {font}
                                    </Button>
                                    <Dropdown as={ButtonGroup} drop="down">
                                        <Button
                                            variant="outline-dark"
                                            style={style.dropdown}>
                                            Font Size: {fontSize}
                                        </Button>
                                        <Dropdown.Toggle
                                            split
                                            variant="outline-dark"
                                            id="dropdown-split-basic"
                                            style={style.dropdown} />
                                        <Dropdown.Menu style={style.fontSize}>
                                            <Button
                                                variant="outline-dark"
                                                style={style.dropdown}
                                                onClick={this.change16}>
                                                16
                                                </Button>
                                            <Button
                                                variant="outline-dark"
                                                style={style.dropdown}
                                                onClick={this.change24}>
                                                24
                                                </Button>
                                            <Button
                                                variant="outline-dark"
                                                style={style.dropdown}
                                                onClick={this.change32}>
                                                32
                                                </Button>
                                            <Button
                                                variant="outline-dark"
                                                style={style.dropdown}
                                                onClick={this.change40}>
                                                40
                                                </Button>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                        <Nav>
                            <GoogleLogout
                                clientId={ApplicationConfig.googleAuth.clientID}
                                buttonText="Logout"
                                onLogoutSuccess={this.logout}
                                onFailure={this.logout}
                            />
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>;
        } else {
            navBar = <Container fluid>
                <Navbar bg="dark" variant="dark" style={style.size}>
                    <img
                        src={Logo}
                        width="50"
                        height="50"
                        className="d-inline-block"
                        style={styles.img}
                        alt="TaskTabs Logo" />
                    <Navbar.Brand style={style.fontSize}>TaskTabs</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav>
                            <Button
                                onClick={this.getProjectLanding}
                                variant="outline-light"
                                style={style.button}>
                                Home</Button>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav style={style.buffer}>
                            <Dropdown>
                                <Dropdown.Toggle
                                    variant="outline-light"
                                    style={style.button}
                                    id="accountDropdown">
                                    {this.props.owner}
                                </Dropdown.Toggle>
                                <Dropdown.Menu
                                    style={style.accountDrop}>
                                    <Button
                                        variant="outline-dark"
                                        style={style.dropdown}>
                                        Account
                                        </Button>
                                    <Button
                                        variant="outline-dark"
                                        style={style.dropdown}
                                        onClick={this.checkTheme}>
                                        Theme: {theme}
                                    </Button>
                                    <Button
                                        variant="outline-dark"
                                        style={style.dropdown}
                                        onClick={this.checkFont}>
                                        Font: {font}
                                    </Button>
                                    <Dropdown as={ButtonGroup} drop="right">
                                        <Button
                                            variant="outline-dark"
                                            style={style.dropdown}>
                                            Font Size: {fontSize}
                                        </Button>
                                        <Dropdown.Toggle
                                            split
                                            variant="outline-dark"
                                            id="dropdown-split-basic"
                                            style={style.dropdown} />
                                        <Dropdown.Menu style={style.fontSize}>
                                            <Button
                                                variant="outline-dark"
                                                style={style.dropdown}
                                                onClick={this.change16}>
                                                16
                                                </Button>
                                            <Button
                                                variant="outline-dark"
                                                style={style.dropdown}
                                                onClick={this.change24}>
                                                24
                                                </Button>
                                            <Button
                                                variant="outline-dark"
                                                style={style.dropdown}
                                                onClick={this.change32}>
                                                32
                                                </Button>
                                            <Button
                                                variant="outline-dark"
                                                style={style.dropdown}
                                                onClick={this.change40}>
                                                40
                                                </Button>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav>
                        <Nav>
                            <GoogleLogout
                                clientId={ApplicationConfig.googleAuth.clientID}
                                buttonText="Logout"
                                onLogoutSuccess={this.logout}
                                onFailure={this.logout}
                            />
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>;
        }
        return (
            navBar
        );
    }
}
