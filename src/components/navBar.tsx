import * as React from "react";

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Logo from "../img/logo.png"

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
}

const styles = {
    gButton: {
        borderStyle: "none"
    },
    img: {

        margin: 20
    }
}

const testOwner: IUser = { id: 0, name: "Super Steve" };

interface IUser {
    id: number;
    name: string;
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
    getWebsiteLanding: () => any;
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
    getWebsiteLanding: () => any;
}

export class NavBar extends React.Component<INavBarProps, NavBarState> {
    owner: IUser;

    constructor(props: INavBarProps) {
        super(props);

        this.owner = testOwner;

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
            getWebsiteLanding: props.getWebsiteLanding
            };
    }

    getProjectLanding = () => {
        this.state.hideProjectPage();
    }

    getWebsiteLanding = () => {
        this.state.getWebsiteLanding();
    }

    checkTheme = () => {
        if(this.state.theme == "dark"){
            this.state.changeToLightTheme();
            this.setState({theme: "light"});
        } else {
            this.state.changeToDarkTheme();
            this.setState({theme: "dark"});
        }
    }

    checkFont = () => {
        if(this.state.font == "verdana"){
            this.state.changeToCourier();
            this.setState({font: "courier"});
        } else {
            this.state.changeToVerdana();
            this.setState({font: "verdana"});
        }
    }

    change16 = () => {
        this.state.changeToSize16();
        this.setState({fontSize: 16});
    }

    change24 = () => {
        this.state.changeToSize24();
        this.setState({fontSize: 24});
    }

    change32 = () => {
        this.state.changeToSize32();
        this.setState({fontSize: 32});
    }

    change40 = () => {
        this.state.changeToSize40();
        this.setState({fontSize: 40});
    }

    public render() {
        let navBar;
        const theme = this.state.theme;
        const font = this.state.font;
        const fontSize = this.state.fontSize;

        if (this.state.fontSize === 16) {
            if (this.state.theme === "light") {
                navBar = <Container fluid>
                    <Navbar bg="light" variant="light" style={font16.size}>
                    <img
                        src={Logo}
                        width="50"
                        height="50"
                        className="d-inline-block"
                        style={styles.img}
                        alt="TaskTabs Logo"/>
                        <Navbar.Brand style={font16.fontSize}>
                            TaskTabs
                        </Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse>
                            <Nav>
                                <Button
                                    onClick={this.getProjectLanding}
                                    variant="outline-dark"
                                    style={font16.button}>
                                    Home
                                </Button>
                                <Button
                                    onClick={this.getWebsiteLanding}
                                    variant="outline-dark"
                                    style={font16.button}>
                                    About
                                </Button>
                            </Nav>
                        </Navbar.Collapse>
                        <Navbar.Collapse className="justify-content-end">
                            <Nav>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        variant="outline-dark"
                                        style={font16.button}
                                        id="accountDropdown">
                                        {this.owner.name}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu
                                        style={font16.accountDrop}>
                                        <Button
                                            variant="outline-dark"
                                            style={font16.dropdown}>
                                            Account
                                        </Button>
                                        <Button
                                            variant = "outline-dark"
                                            style={font16.dropdown}
                                            onClick = {this.checkTheme}>
                                            Theme: {theme}
                                        </Button>
                                        <Button
                                            variant = "outline-dark"
                                            style={font16.dropdown}
                                            onClick = {this.checkFont}>
                                            Font: {font}
                                        </Button>
                                        <Dropdown as={ButtonGroup} drop = "right">
                                            <Button
                                                variant="outline-dark"
                                                style={font16.dropdown}>
                                                Font Size: {fontSize}
                                            </Button>
                                            <Dropdown.Toggle
                                                split
                                                variant="outline-dark"
                                                id="dropdown-split-basic"
                                                style={font16.dropdown}/>
                                            <Dropdown.Menu style={font16.fontSize}>
                                                <Button
                                                    variant="outline-dark"
                                                    style={font16.dropdown}
                                                    onClick = {this.change16}>
                                                    16
                                                </Button>
                                                <Button
                                                    variant="outline-dark"
                                                    style={font16.dropdown}
                                                    onClick = {this.change24}>
                                                    24
                                                </Button>
                                                <Button
                                                    variant="outline-dark"
                                                    style={font16.dropdown}
                                                    onClick = {this.change32}>
                                                    32
                                                </Button>
                                                <Button
                                                    variant="outline-dark"
                                                    style={font16.dropdown}
                                                    onClick = {this.change40}>
                                                    40
                                                </Button>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <Button
                                            variant="outline-dark"
                                            style={font16.dropdown}>
                                            Log Out
                                        </Button>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav>
                            <Nav>
                                <Button
                                    className="g-signin2"
                                    data-onsuccess="onSignIn"
                                    data-height="48"
                                    data-width="162"
                                    data-borderStyle="none"
                                    variant="outline-dark"
                                    style = {styles.gButton}>
                                    Google
                                </Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>;
            } else {
                navBar = <Container fluid>
                    <Navbar bg="dark" variant="dark" style={font16.size}>
                    <img
                        src={Logo}
                        width="50"
                        height="50"
                        className="d-inline-block"
                        style={styles.img}
                        alt="TaskTabs Logo"/>
                        <Navbar.Brand style={font16.fontSize}>TaskTabs</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse>
                            <Nav>
                                <Button
                                    onClick={this.getProjectLanding}
                                    variant="outline-light"
                                    style={font16.button}>
                                    Home</Button>
                            </Nav>
                        </Navbar.Collapse>
                        <Navbar.Collapse className="justify-content-end">
                            <Nav>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        variant="outline-light"
                                        style={font16.button}
                                        id="accountDropdown">
                                        {this.owner.name}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu
                                        style={font16.accountDrop}>
                                        <Button
                                            variant="outline-dark"
                                            style={font16.dropdown}>
                                            Account
                                        </Button>
                                        <Button
                                            variant = "outline-dark"
                                            style={font16.dropdown}
                                            onClick = {this.checkTheme}>
                                            Theme: {theme}
                                        </Button>
                                        <Button
                                            variant = "outline-dark"
                                            style={font16.dropdown}
                                            onClick = {this.checkFont}>
                                            Font: {font}
                                        </Button>
                                        <Dropdown as={ButtonGroup} drop = "right">
                                            <Button
                                                variant="outline-dark"
                                                style={font16.dropdown}>
                                                Font Size: {fontSize}
                                            </Button>
                                            <Dropdown.Toggle
                                                split
                                                variant="outline-dark"
                                                id="dropdown-split-basic"
                                                style={font16.dropdown}/>
                                            <Dropdown.Menu style={font16.fontSize}>
                                                <Button
                                                    variant="outline-dark"
                                                    style={font16.dropdown}
                                                    onClick = {this.change16}>
                                                    16
                                                </Button>
                                                <Button
                                                    variant="outline-dark"
                                                    style={font16.dropdown}
                                                    onClick = {this.change24}>
                                                    24
                                                </Button>
                                                <Button
                                                    variant="outline-dark"
                                                    style={font16.dropdown}
                                                    onClick = {this.change32}>
                                                    32
                                                </Button>
                                                <Button
                                                    variant="outline-dark"
                                                    style={font16.dropdown}
                                                    onClick = {this.change40}>
                                                    40
                                                </Button>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <Button
                                            variant="outline-dark"
                                            style={font16.dropdown}>
                                            Log Out
                                        </Button>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav>
                            <Nav>
                                <Button
                                    className="g-signin2"
                                    data-onsuccess="onSignIn"
                                    data-height="48"
                                    data-width="162"
                                    data-borderStyle="none"
                                    variant="outline-light"
                                    style = {styles.gButton}>
                                    Google
                                </Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>;
            }

        } else if (this.state.fontSize === 24) {
            if (this.state.theme === "light") {
                navBar = <Container fluid>
                    <Navbar bg="light" variant="light" style={font24.size}>
                    <img
                        src={Logo}
                        width="65"
                        height="65"
                        className="d-inline-block"
                        style={styles.img}
                        alt="TaskTabs Logo"/>
                        <Navbar.Brand style={font24.fontSize}>TaskTabs</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse>
                            <Nav>
                                <Button
                                    onClick={this.getProjectLanding}
                                    variant="outline-dark"
                                    style={font24.button}>
                                    Home</Button>
                            </Nav>
                        </Navbar.Collapse>
                        <Navbar.Collapse className="justify-content-end">
                            <Nav>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        variant="outline-dark"
                                        style={font24.button}
                                        id="accountDropdown">
                                        {this.owner.name}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu
                                        style={font24.accountDrop}>
                                        <Button
                                            variant="outline-dark"
                                            style={font24.dropdown}>
                                            Account
                                        </Button>
                                        <Button
                                            variant = "outline-dark"
                                            style={font24.dropdown}
                                            onClick = {this.checkTheme}>
                                            Theme: {theme}
                                        </Button>
                                        <Button
                                            variant = "outline-dark"
                                            style={font24.dropdown}
                                            onClick = {this.checkFont}>
                                            Font: {font}
                                        </Button>
                                        <Dropdown as={ButtonGroup} drop = "right">
                                            <Button
                                                variant="outline-dark"
                                                style={font24.dropdown}>
                                                Font Size: {fontSize}
                                            </Button>
                                            <Dropdown.Toggle
                                                split
                                                variant="outline-dark"
                                                id="dropdown-split-basic"
                                                style={font24.dropdown}/>
                                            <Dropdown.Menu style={font24.fontSize}>
                                                <Button
                                                    variant="outline-dark"
                                                    style={font24.dropdown}
                                                    onClick = {this.change16}>
                                                    16
                                                </Button>
                                                <Button
                                                    variant="outline-dark"
                                                    style={font24.dropdown}
                                                    onClick = {this.change24}>
                                                    24
                                                </Button>
                                                <Button
                                                    variant="outline-dark"
                                                    style={font24.dropdown}
                                                    onClick = {this.change32}>
                                                    32
                                                </Button>
                                                <Button
                                                    variant="outline-dark"
                                                    style={font24.dropdown}
                                                    onClick = {this.change40}>
                                                    40
                                                </Button>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <Button
                                            variant="outline-dark"
                                            style={font24.dropdown}>
                                            Log Out
                                        </Button>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav>
                            <Nav>
                                <Button
                                    className="g-signin2"
                                    data-onsuccess="onSignIn"
                                    data-height="48"
                                    data-width="162"
                                    data-borderStyle="none"
                                    variant="outline-dark"
                                    style = {styles.gButton}>
                                    Google
                                </Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>;
            } else {
                navBar = <Container fluid>
                    <Navbar bg="dark" variant="dark" style={font24.size}>
                    <img
                        src={Logo}
                        width="65"
                        height="65"
                        className="d-inline-block"
                        style={styles.img}
                        alt="TaskTabs Logo"/>
                        <Navbar.Brand style={font24.fontSize}>TaskTabs</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse>
                            <Nav>
                                <Button
                                    onClick={this.getProjectLanding}
                                    variant="outline-light"
                                    style={font24.button}>
                                    Home</Button>
                            </Nav>
                        </Navbar.Collapse>
                        <Navbar.Collapse className="justify-content-end">
                            <Nav>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        variant="outline-light"
                                        style={font24.button}
                                        id="accountDropdown">
                                        {this.owner.name}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu
                                        style={font24.accountDrop}>
                                        <Button
                                            variant="outline-dark"
                                            style={font24.dropdown}>
                                            Account
                                        </Button>
                                        <Button
                                            variant = "outline-dark"
                                            style={font24.dropdown}
                                            onClick = {this.checkTheme}>
                                            Theme: {theme}
                                        </Button>
                                        <Button
                                            variant = "outline-dark"
                                            style={font24.dropdown}
                                            onClick = {this.checkFont}>
                                            Font: {font}
                                        </Button>
                                        <Dropdown as={ButtonGroup} drop = "right">
                                            <Button
                                                variant="outline-dark"
                                                style={font24.dropdown}>
                                                Font Size: {fontSize}
                                            </Button>
                                            <Dropdown.Toggle
                                                split
                                                variant="outline-dark"
                                                id="dropdown-split-basic"
                                                style={font24.dropdown}/>
                                            <Dropdown.Menu style={font24.fontSize}>
                                                <Button
                                                    variant="outline-dark"
                                                    style={font24.dropdown}
                                                    onClick = {this.change16}>
                                                    16
                                                </Button>
                                                <Button
                                                    variant="outline-dark"
                                                    style={font24.dropdown}
                                                    onClick = {this.change24}>
                                                    24
                                                </Button>
                                                <Button
                                                    variant="outline-dark"
                                                    style={font24.dropdown}
                                                    onClick = {this.change32}>
                                                    32
                                                </Button>
                                                <Button
                                                    variant="outline-dark"
                                                    style={font24.dropdown}
                                                    onClick = {this.change40}>
                                                    40
                                                </Button>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <Button
                                            variant="outline-dark"
                                            style={font24.dropdown}>
                                            Log Out
                                        </Button>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav>
                            <Nav>
                                <Button
                                    className="g-signin2"
                                    data-onsuccess="onSignIn"
                                    data-height="48"
                                    data-width="162"
                                    data-borderStyle="none"
                                    variant="outline-light"
                                    style = {styles.gButton}>
                                    Google
                                </Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>;
            }

        } else if (this.state.fontSize === 32) {
            if (this.state.theme === "light") {
                navBar = <Container fluid>
                    <Navbar bg="light" variant="light" style={font32.size}>
                    <img
                        src={Logo}
                        width="65"
                        height="65"
                        className="d-inline-block"
                        style={styles.img}
                        alt="TaskTabs Logo"/>
                        <Navbar.Brand style={font32.fontSize}>TaskTabs</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse>
                            <Nav>
                                <Button
                                    onClick={this.getProjectLanding}
                                    variant="outline-dark"
                                    style={font32.button}>
                                    Home</Button>
                            </Nav>
                        </Navbar.Collapse>
                        <Navbar.Collapse className="justify-content-end">
                            <Nav>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        variant="outline-dark"
                                        style={font32.button}
                                        id="accountDropdown">
                                        {this.owner.name}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu
                                        style={font32.accountDrop}>
                                        <Button
                                            variant="outline-dark"
                                            style={font32.dropdown}>
                                            Account
                                        </Button>
                                        <Button
                                            variant = "outline-dark"
                                            style={font32.dropdown}
                                            onClick = {this.checkTheme}>
                                            Theme: {theme}
                                        </Button>
                                        <Button
                                            variant = "outline-dark"
                                            style={font32.dropdown}
                                            onClick = {this.checkFont}>
                                            Font: {font}
                                        </Button>
                                        <Dropdown as={ButtonGroup} drop = "right">
                                            <Button
                                                variant="outline-dark"
                                                style={font32.dropdown}>
                                                Font Size: {fontSize}
                                            </Button>
                                            <Dropdown.Toggle
                                                split
                                                variant="outline-dark"
                                                id="dropdown-split-basic"
                                                style={font32.dropdown}/>
                                            <Dropdown.Menu style={font32.fontSize}>
                                                <Button
                                                    variant="outline-dark"
                                                    style={font32.dropdown}
                                                    onClick = {this.change16}>
                                                    16
                                                </Button>
                                                <Button
                                                    variant="outline-dark"
                                                    style={font32.dropdown}
                                                    onClick = {this.change24}>
                                                    24
                                                </Button>
                                                <Button
                                                    variant="outline-dark"
                                                    style={font32.dropdown}
                                                    onClick = {this.change32}>
                                                    32
                                                </Button>
                                                <Button
                                                    variant="outline-dark"
                                                    style={font32.dropdown}
                                                    onClick = {this.change40}>
                                                    40
                                                </Button>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <Button
                                            variant="outline-dark"
                                            style={font32.dropdown}>
                                            Log Out
                                        </Button>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav>
                            <Nav>
                                <Button
                                    className="g-signin2"
                                    data-onsuccess="onSignIn"
                                    data-height="48"
                                    data-width="162"
                                    data-borderStyle="none"
                                    variant="outline-dark"
                                    style = {styles.gButton}>
                                    Google
                                </Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>;
            } else {
                navBar = <Container fluid>
                    <Navbar bg="dark" variant="dark" style={font32.size}>
                    <img
                        src={Logo}
                        width="65"
                        height="65"
                        className="d-inline-block"
                        style={styles.img}
                        alt="TaskTabs Logo"/>
                        <Navbar.Brand style={font32.fontSize}>TaskTabs</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse>
                            <Nav>
                                <Button
                                    onClick={this.getProjectLanding}
                                    variant="outline-light"
                                    style={font32.button}>
                                    Home</Button>
                            </Nav>
                        </Navbar.Collapse>
                        <Navbar.Collapse className="justify-content-end">
                            <Nav>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        variant="outline-light"
                                        style={font32.button}
                                        id="accountDropdown">
                                        {this.owner.name}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu
                                        style={font32.accountDrop}>
                                        <Button
                                            variant="outline-dark"
                                            style={font32.dropdown}>
                                            Account
                                        </Button>
                                        <Button
                                            variant = "outline-dark"
                                            style={font32.dropdown}
                                            onClick = {this.checkTheme}>
                                            Theme: {theme}
                                        </Button>
                                        <Button
                                            variant = "outline-dark"
                                            style={font32.dropdown}
                                            onClick = {this.checkFont}>
                                            Font: {font}
                                        </Button>
                                        <Dropdown as={ButtonGroup} drop = "right">
                                            <Button
                                                variant="outline-dark"
                                                style={font32.dropdown}>
                                                Font Size: {fontSize}
                                            </Button>
                                            <Dropdown.Toggle
                                                split
                                                variant="outline-dark"
                                                id="dropdown-split-basic"
                                                style={font32.dropdown}/>
                                            <Dropdown.Menu style={font32.fontSize}>
                                                <Button
                                                    variant="outline-dark"
                                                    style={font32.dropdown}
                                                    onClick = {this.change16}>
                                                    16
                                                </Button>
                                                <Button
                                                    variant="outline-dark"
                                                    style={font32.dropdown}
                                                    onClick = {this.change24}>
                                                    24
                                                </Button>
                                                <Button
                                                    variant="outline-dark"
                                                    style={font32.dropdown}
                                                    onClick = {this.change32}>
                                                    32
                                                </Button>
                                                <Button
                                                    variant="outline-dark"
                                                    style={font32.dropdown}
                                                    onClick = {this.change40}>
                                                    40
                                                </Button>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <Button
                                            variant="outline-dark"
                                            style={font32.dropdown}>
                                            Log Out
                                        </Button>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav>
                            <Nav>
                                <Button
                                    className="g-signin2"
                                    data-onsuccess="onSignIn"
                                    data-height="48"
                                    data-width="162"
                                    data-borderStyle="none"
                                    variant="outline-light"
                                    style = {styles.gButton}>
                                    Google
                                </Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>;
            }

        } else {
            if (this.state.theme === "light") {
                navBar = <Container fluid>
                    <Navbar bg="light" variant="light" style={font40.size}>
                    <img
                        src={Logo}
                        width="70"
                        height="70"
                        className="d-inline-block"
                        style={styles.img}
                        alt="TaskTabs Logo"/>
                        <Navbar.Brand style={font40.fontSize}>TaskTabs</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse>
                            <Nav>
                                <Button
                                    onClick={this.getProjectLanding}
                                    variant="outline-dark"
                                    style={font40.button}>
                                    Home</Button>
                            </Nav>
                        </Navbar.Collapse>
                        <Navbar.Collapse className="justify-content-end">
                            <Nav>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        variant="outline-dark"
                                        style={font40.button}
                                        id="accountDropdown">
                                        {this.owner.name}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu
                                        style={font40.accountDrop}>
                                        <Button
                                            variant="outline-dark"
                                            style={font40.dropdown}>
                                            Account
                                        </Button>
                                        <Button
                                            variant = "outline-dark"
                                            style={font40.dropdown}
                                            onClick = {this.checkTheme}>
                                            Theme: {theme}
                                        </Button>
                                        <Button
                                            variant = "outline-dark"
                                            style={font40.dropdown}
                                            onClick = {this.checkFont}>
                                            Font: {font}
                                        </Button>
                                        <Dropdown as={ButtonGroup} drop = "right">
                                            <Button
                                                variant="outline-dark"
                                                style={font40.dropdown}>
                                                Font Size: {fontSize}
                                            </Button>
                                            <Dropdown.Toggle
                                                split
                                                variant="outline-dark"
                                                id="dropdown-split-basic"
                                                style={font40.dropdown}/>
                                            <Dropdown.Menu style={font40.fontSize}>
                                                <Button
                                                    variant="outline-dark"
                                                    style={font40.dropdown}
                                                    onClick = {this.change16}>
                                                    16
                                                </Button>
                                                <Button
                                                    variant="outline-dark"
                                                    style={font40.dropdown}
                                                    onClick = {this.change24}>
                                                    24
                                                </Button>
                                                <Button
                                                    variant="outline-dark"
                                                    style={font40.dropdown}
                                                    onClick = {this.change32}>
                                                    32
                                                </Button>
                                                <Button
                                                    variant="outline-dark"
                                                    style={font40.dropdown}
                                                    onClick = {this.change40}>
                                                    40
                                                </Button>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <Button
                                            variant="outline-dark"
                                            style={font40.dropdown}>
                                            Log Out
                                        </Button>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav>
                            <Nav>
                                <Button
                                    className="g-signin2"
                                    data-onsuccess="onSignIn"
                                    data-height="48"
                                    data-width="162"
                                    data-borderStyle="none"
                                    variant="outline-dark"
                                    style = {styles.gButton}>
                                    Google
                                </Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>;
            } else {
                navBar = <Container fluid>
                    <Navbar bg="dark" variant="dark" style={font40.size}>
                    <img
                        src={Logo}
                        width="70"
                        height="70"
                        className="d-inline-block"
                        style={styles.img}
                        alt="TaskTabs Logo"/>
                        <Navbar.Brand style={font40.fontSize}>TaskTabs</Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse>
                            <Nav>
                                <Button
                                    onClick={this.getProjectLanding}
                                    variant="outline-light"
                                    style={font40.button}>
                                    Home</Button>
                            </Nav>
                        </Navbar.Collapse>
                        <Navbar.Collapse className="justify-content-end">
                            <Nav>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        variant="outline-light"
                                        style={font40.button}
                                        id="accountDropdown">
                                        {this.owner.name}
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu
                                        style={font40.accountDrop}>
                                        <Button
                                            variant="outline-dark"
                                            style={font40.dropdown}>
                                            Account
                                        </Button>
                                        <Button
                                            variant = "outline-dark"
                                            style={font40.dropdown}
                                            onClick = {this.checkTheme}>
                                            Theme: {theme}
                                        </Button>
                                        <Button
                                            variant = "outline-dark"
                                            style={font40.dropdown}
                                            onClick = {this.checkFont}>
                                            Font: {font}
                                        </Button>
                                        <Dropdown as={ButtonGroup} drop = "right">
                                            <Button
                                                variant="outline-dark"
                                                style={font40.dropdown}>
                                                Font Size: {fontSize}
                                            </Button>
                                            <Dropdown.Toggle
                                                split
                                                variant="outline-dark"
                                                id="dropdown-split-basic"
                                                style={font40.dropdown}/>
                                            <Dropdown.Menu style={font40.fontSize}>
                                                <Button
                                                    variant="outline-dark"
                                                    style={font40.dropdown}
                                                    onClick = {this.change16}>
                                                    16
                                                </Button>
                                                <Button
                                                    variant="outline-dark"
                                                    style={font40.dropdown}
                                                    onClick = {this.change24}>
                                                    24
                                                </Button>
                                                <Button
                                                    variant="outline-dark"
                                                    style={font40.dropdown}
                                                    onClick = {this.change32}>
                                                    32
                                                </Button>
                                                <Button
                                                    variant="outline-dark"
                                                    style={font40.dropdown}
                                                    onClick = {this.change40}>
                                                    40
                                                </Button>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                        <Button
                                            variant="outline-dark"
                                            style={font40.dropdown}>
                                            Log Out
                                        </Button>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Nav>
                            <Nav>
                                <Button
                                    className="g-signin2"
                                    data-onsuccess="onSignIn"
                                    data-height="48"
                                    data-width="162"
                                    data-borderStyle="none"
                                    variant="outline-light"
                                    style = {styles.gButton}>
                                    Google
                                </Button>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>;
            }

        }
        return(
            navBar
        );
    }
}
