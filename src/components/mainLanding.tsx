import * as React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import { UserInfo } from "./userInfo";
import { SignInButton } from "./signInButton";
import * as Logo from "../img/logo.png";

const styles = {
    pageContainer: {
        margin: 0,
        padding:0,
        width: "match-parent"
    },
    titleIntroduction: {
        fontSize: 96,
        margin: "auto",
        backgroundColor: "#232931",
        color: "#f8f9e8"
    },
    welcomeText: {
        fontSize: 36,
        margin: "auto",
        padding: 10,
        backgroundColor: "#97d2f1",
        color: "#232931"
    },
    infoText: {
        fontSize: 24,
        padding: 10,
        margin: "auto",
        backgroundColor: "#97d2f1",
        color: "#232931"
    },
    logo: {
        marginLeft: 100
    },
    label: {
        fontSize: 24,
        margin: "auto",
    },
    center: {
        margin: "auto",
        marginTop: 75        
    },
    centerCols: {
        margin: "auto"
    },
    gButton: {
        borderStyle: "none"
    },
    imgProjectPage: {
        width: "inherit"
    },
    img: {
        margin: 20
    },
    bottomStyle: {
        paddingBottom: 100
    }
};

interface MainLandProps {
    reportLoginInfo: (isLoggedIn: boolean, userInfo:UserInfo) => any;
}

export class MainLanding extends React.Component<MainLandProps, {}> {
    constructor(props: MainLandProps) {
        super(props);
    }

    launchApp = (user:UserInfo) => {
        this.props.reportLoginInfo(true, user);
    }

    render() {
        return(
            <Container fluid style={styles.pageContainer}>
                <Row style={styles.titleIntroduction}>
                    <Col style={styles.logo}>
                        <img
                            src={Logo}
                            width="200"
                            height="200"
                            className="d-inline-block"
                            style={styles.img}
                            alt="TaskTabs Logo"/>
                    </Col>
                    <Col style={styles.label}>
                        <h1 className="text-center">
                            Start Increasing Your Project Productivity With TaskTabs!
                        </h1>
                    </Col>
                    <Col style={styles.centerCols}>
                        <SignInButton launchApp={this.launchApp}></SignInButton>
                    </Col>
                </Row>
                <Row style={styles.welcomeText}>
                    <p style={styles.welcomeText}>Welcome, to TaskTabs!</p>
                </Row>
                <Row style={styles.infoText}>
                    <Col sm={4} style={styles.bottomStyle}>
                        <Container style={styles.centerCols}>
                            <p style={styles.infoText}>TaskTabs is a project managements system to improve productivity in your projects:<br></br>
                                <ul>
                                    <li>
                                        Use for personal or professional projects
                                    </li>
                                    <li>
                                        Stay organized by planning your projects
                                    </li>
                                    <li>
                                        Create and navigate your tasks and projects in a few clicks
                                    </li>
                                    <li>
                                        Easy sign in with Google
                                    </li>
                                </ul>
                            </p>
                        </Container>
                    </Col>
                    <Col sm={8} >
                    <img
                        src={Logo}
                        className="d-inline-flex"
                        style={styles.imgProjectPage}
                        alt="TaskTabs Project Page"/>
                    </Col>
                    </Row>
            </Container>
        );
    }
};