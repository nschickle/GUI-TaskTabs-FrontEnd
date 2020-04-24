import * as React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import { UserInfo } from "./userInfo";
import { SignInButton } from "./signInButton";


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
        marginTop: 10,
        margin: "auto"
    },
    centerCols: {
        margin: "auto"
    },
    gButton: {
        borderStyle: "none"
    },
    img: {

        margin: 20
    }
};

interface MainLandProps {
    showProjectLanding: () => any;
}

export class MainLanding extends React.Component<MainLandProps, { error: any, isLoaded: boolean, showProjectLanding: () => any}> {
    private userInfo = new UserInfo(null, null);
    constructor(props: MainLandProps) {
        super(props);

        this.state = {
            error: null,
            isLoaded: false,
            showProjectLanding: props.showProjectLanding
        };
    }

    render() {
        return(
            <Container fluid style={styles.pageContainer}>
                <Row style={styles.titleIntroduction}>
                    <Col style={styles.logo}>
                        <img
                            src={require("../img/logo.png")}
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
                            <SignInButton theme={"light"} fontSize={16} userInfo={this.userInfo}>
                            </SignInButton> 
                    </Col>
                </Row>
                <Row style={styles.welcomeText}>
                    <p style={styles.welcomeText}>Welcome, to TaskTabs!</p>
                </Row>
                <Row style={styles.infoText}>
                    <Col sm={5}>
                        <p style={styles.infoText}>TaskTabs is a project managements system to improve productivity in both personal and professional projects. 
                        Create you project and add tasks in a few clicks to instantly start tracking your progress. Start now by signing into your Google account!</p>
                    </Col>
                    <Col sm={7}>
                    </Col>
                    </Row>
            </Container>
        );
    }
};
