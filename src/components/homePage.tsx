import * as React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { NavBar } from './navBar';
import { ProjectPage } from './projectPage';
import { ProjectLanding } from './projLanding';
import { UserInfo } from "./userInfo";

const fonts = {
    verdana: {
        height: window.innerHeight,
        fontFamily: "Verdana"
    },
    courier: {
        height: window.innerHeight,
        fontFamily: "Courier"
    },
    darkCourier: {
        height: window.innerHeight,
        fontFamily: "Courier",
        backgroundColor: "#232931",
        color: "#f8f9e8"
    },
    darkVerdana: {
        height: window.innerHeight,
        fontFamily: "Verdana",
        backgroundColor: "#232931",
        color: "#f8f9e8"
    }
};

interface MainPageProps {
    projectPageUp: boolean;
    theme: string;
    font: string;
    fontSize: number;
    viewPage: string;
    userInfo: UserInfo;
    setLoggedOut: () => void;
}

export class HomePage extends React.Component<MainPageProps, { projectPageUp: boolean, projectID: number, theme: string, font: string, fontSize: number, viewPage: string }>{

    constructor(props: MainPageProps) {
        super(props);

        this.state = {
            projectPageUp: props.projectPageUp,
            projectID: null,
            theme: props.theme,
            font: props.font,
            fontSize: props.fontSize,
            viewPage: props.viewPage
        };
    }

    showProjectPage = (projectID: number) => {
        this.setState({ projectPageUp: true });
        this.setState({ projectID: projectID });
    }

    // Currently makes projectID null because it's state can't be guarentee
    hideProjectPage = () => {
        this.setState({ projectPageUp: false });
        this.setState({ projectID: null });
    }

    changeToDarkTheme = () => {
        this.setState({ theme: "dark" });
    }

    changeToLightTheme = () => {
        this.setState({ theme: "light" });
    }

    changeToVerdana = () => {
        this.setState({ font: "verdana" });
    }

    changeToCourier = () => {
        this.setState({ font: "courier" });
    }

    changeToSize16 = () => {
        this.setState({ fontSize: 16 });
    }

    changeToSize24 = () => {
        this.setState({ fontSize: 24 });
    }

    changeToSize32 = () => {
        this.setState({ fontSize: 32 });
    }

    changeToSize40 = () => {
        this.setState({ fontSize: 40 });
    }

    showHistoryTab = () => {
        this.setState({ viewPage: "historyTab" });
    }

    showStatTab = () => {
        this.setState({ viewPage: "statTab" });
    }

    showTaskView = () => {
        this.setState({ viewPage: "taskView" });
    }

    showLoading = () => {
        this.setState({ viewPage: "loading" });
    }

    render() {
        const projectPageUp = this.state.projectPageUp;
        const theme = this.state.theme;
        const font = this.state.font;
        const fontSize = this.state.fontSize;

        let style;
        if (font === "verdana") {
            if (theme === "dark") {
                style = fonts.darkVerdana;
            } else {
                style = fonts.verdana;
            }
        } else {
            if (theme === "dark") {
                style = fonts.darkCourier;
            } else {
                style = fonts.courier;
            }
        }

        let showPage;
        if (projectPageUp) {
            showPage = <Container fluid style={style}>
                <Row>
                    <NavBar
                        hideProjectPage={this.hideProjectPage}
                        changeToDarkTheme={this.changeToDarkTheme}
                        changeToLightTheme={this.changeToLightTheme}
                        theme={theme}
                        changeToCourier={this.changeToCourier}
                        changeToVerdana={this.changeToVerdana}
                        font={font}
                        changeToSize16={this.changeToSize16}
                        changeToSize24={this.changeToSize24}
                        changeToSize32={this.changeToSize32}
                        changeToSize40={this.changeToSize40}
                        fontSize={fontSize}
                        owner={this.props.userInfo.name}
                        setLoggedOut={this.props.setLoggedOut}
                    />
                </Row>
                <Row>
                    <ProjectPage projectID={this.state.projectID} theme={theme} fontSize={fontSize} userInfo={this.props.userInfo} hideProjectPage={this.hideProjectPage} viewPage={this.state.viewPage} showLoading={this.showLoading} showStatTab={this.showStatTab} showHistoryTab={this.showHistoryTab} showTaskView={this.showTaskView} />
                </Row>
            </Container>;
        } else {
            showPage = <Container fluid style={style}>
                <Row>
                    <NavBar
                        hideProjectPage={this.hideProjectPage}
                        changeToDarkTheme={this.changeToDarkTheme}
                        changeToLightTheme={this.changeToLightTheme}
                        theme={theme}
                        changeToCourier={this.changeToCourier}
                        changeToVerdana={this.changeToVerdana}
                        font={font}
                        changeToSize16={this.changeToSize16}
                        changeToSize24={this.changeToSize24}
                        changeToSize32={this.changeToSize32}
                        changeToSize40={this.changeToSize40}
                        fontSize={fontSize}
                        owner={this.props.userInfo.name}
                        setLoggedOut={this.props.setLoggedOut}
                        />
                </Row>
                <Row>
                    <ProjectLanding owner={this.props.userInfo.name} showProjectPage={this.showProjectPage} theme={theme} fontSize={fontSize} userInfo={this.props.userInfo} showLoading={this.showLoading} />
                </Row>
            </Container>;
        }
        return (
            showPage
        )
    }
}
