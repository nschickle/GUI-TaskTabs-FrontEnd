import * as React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { NavBar } from './navBar';
import { ProjectPage } from './projectPage';
import { ProjectLanding } from './projLanding';
import { MainLanding } from './mainLanding'
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
    signedIn: boolean;
    projectPageUp: boolean;
    theme: string;
    font: string;
    fontSize: number;
    viewPage: string;
}

// TODO:
// Make it so choosing a project on the landing changes it on project page
export class MainPage extends React.Component<MainPageProps, { projectPageUp: boolean, projectID: number, theme: string, font: string, fontSize: number, viewPage: string, signedIn: boolean }>{
    private userInfo = new UserInfo("test@test.com", "test");


    constructor(props: MainPageProps) {
        super(props);

      this.state = {
        signedIn: props.signedIn,
        projectPageUp: props.projectPageUp,
        projectID: null,
        theme: props.theme,
        font: props.font,
        fontSize: props.fontSize,
        viewPage: props.viewPage
      };
    }

    showProjectPage = (projectID: number) => {
        this.setState({ signedIn: true})
        this.setState({ projectPageUp: true });
        this.setState({ projectID: projectID });
    }

    // Currently makes projectID null because it's state can't be guarentee
    hideProjectPage = () => {
        this.setState({ projectPageUp: false });
        this.setState({ projectID: null });
    }

    showProjectLanding = () => {
        this.setState({ 
            signedIn: true,
            projectPageUp: false,
            projectID: null });
    }

    getWebsiteLanding = () => {
        this.setState({ signedIn: false });
    }

    changeToDarkTheme = () => {
        this.setState({theme: "dark"});
    }

    changeToLightTheme = () => {
        this.setState({theme: "light"});
    }

    changeToVerdana = () => {
        this.setState({font: "verdana"});
    }

    changeToCourier = () => {
        this.setState({font: "courier"});
    }

    changeToSize16 = () => {
        this.setState({fontSize: 16});
    }

    changeToSize24 = () => {
        this.setState({fontSize: 24});
    }

    changeToSize32 = () => {
        this.setState({fontSize: 32});
    }

    changeToSize40 = () => {
        this.setState({fontSize: 40});
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
        const signedIn = this.state.signedIn;
        const theme = this.state.theme;
        const font = this.state.font;
        const fontSize = this.state.fontSize;

        let style;
        if(font === "verdana"){
            if(theme === "dark"){
                style = fonts.darkVerdana;
            } else {
                style = fonts.verdana;
            }
        } else {
            if(theme === "dark"){
                style = fonts.darkCourier;
            } else {
                style = fonts.courier;
            }
        }

        let showPage;
        if(signedIn){
            if(projectPageUp) {
                showPage = <Container fluid style={style}>
                    <Row>
                        <NavBar
                            hideProjectPage = {this.hideProjectPage}
                            changeToDarkTheme = {this.changeToDarkTheme}
                            changeToLightTheme = {this.changeToLightTheme}
                            theme = {theme}
                            changeToCourier = {this.changeToCourier}
                            changeToVerdana = {this.changeToVerdana}
                            font = {font}
                            changeToSize16 = {this.changeToSize16}
                            changeToSize24 = {this.changeToSize24}
                            changeToSize32 = {this.changeToSize32}
                            changeToSize40 = {this.changeToSize40}
                            fontSize = {fontSize}
                            getWebsiteLanding = {this.getWebsiteLanding}/>
                    </Row>
                    <Row>
                        <ProjectPage projectID={this.state.projectID} theme = {theme} fontSize={fontSize} userInfo={this.userInfo} hideProjectPage={this.hideProjectPage} viewPage = {this.state.viewPage} showLoading={this.showLoading} showStatTab={this.showStatTab} showHistoryTab={this.showHistoryTab} showTaskView={this.showTaskView}/>
                    </Row>
                </Container>;
            } else {
                showPage = <Container fluid style={style}>
                    <Row>
                        <NavBar
                            hideProjectPage = {this.hideProjectPage}
                            changeToDarkTheme = {this.changeToDarkTheme}
                            changeToLightTheme = {this.changeToLightTheme}
                            theme = {theme}
                            changeToCourier = {this.changeToCourier}
                            changeToVerdana = {this.changeToVerdana}
                            font = {font}
                            changeToSize16 = {this.changeToSize16}
                            changeToSize24 = {this.changeToSize24}
                            changeToSize32 = {this.changeToSize32}
                            changeToSize40 = {this.changeToSize40}
                            fontSize = {fontSize}
                            getWebsiteLanding = {this.getWebsiteLanding}/>
                    </Row>
                    <Row>
                        <ProjectLanding showProjectPage = {this.showProjectPage} theme={theme}  fontSize={fontSize} userInfo={this.userInfo} showLoading={this.showLoading}/>
                    </Row>
                </Container>;
            }
        } else {
            showPage =
            <Container fluid style={fonts.verdana}>
                <Row>
                    <MainLanding showProjectLanding = {this.showProjectLanding} userInfo={this.userInfo}/>
                </Row>
            </Container>;
        }
        return (
            showPage
        )
    }
}
