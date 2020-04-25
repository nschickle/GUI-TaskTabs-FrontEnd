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
}

// TODO:
// Make it so choosing a project on the landing changes it on project page
export class MainPage extends React.Component<MainPageProps, { signedIn: boolean, projectPageUp: boolean, projectID: number, theme: string, font: string, fontSize: number }>{
    private userInfo = new UserInfo("test@test.com", "test");
    

    constructor(props: MainPageProps) {
        super(props);

      this.state = {
        signedIn: props.signedIn,
        projectPageUp: props.projectPageUp,
        projectID: null,
        theme: props.theme,
        font: props.font,
        fontSize: props.fontSize
      };
    }

    showProjectPage = (projectID: number) => {
        this.setState({ signedIn: true})
        this.setState({ projectPageUp: true });
        this.setState({ projectID: projectID });
    }

    // Currently makes projectID null because it's state can't be guarentee
    hideProjectPage = () => {
        this.setState({ signedIn: false });
        this.setState({ projectPageUp: false });
        this.setState({ projectID: null });
    }

    showProjectLanding = () => {
        this.setState({ signedIn: true });
        this.setState({ projectPageUp: false });
        this.setState({ projectID: null });
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

    render() {
        const projectPageUp = this.state.projectPageUp;
        const signedIn = this.state.signedIn;
        const theme = this.state.theme;
        const font = this.state.font;
        const fontSize = this.state.fontSize;
        let showPage;
        if (signedIn) {
            if (font === "verdana") {
                if (projectPageUp) {
                    if (theme == "dark") {
                        showPage = <Container fluid style={fonts.darkVerdana}>
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
                                    fontSize = {fontSize}/>
                            </Row>
                            <Row><ProjectPage projectID={this.state.projectID} theme = {theme} fontSize={fontSize} userInfo={this.userInfo} hideProjectPage={this.hideProjectPage} viewPage = "taskView"/></Row></Container>;
                    } else {
                        showPage = <Container fluid style={fonts.verdana}>
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
                                    fontSize = {fontSize}/>
                            </Row>
                            <Row><ProjectPage projectID={this.state.projectID} theme = {theme} fontSize={fontSize} userInfo={this.userInfo} hideProjectPage={this.hideProjectPage} viewPage = "taskView"/></Row></Container>;
                    }
                } else {
                    if (theme == "dark") {
                        showPage = <Container fluid style={fonts.darkVerdana}>
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
                                    fontSize = {fontSize}/>
                            </Row>
                            <Row>
                            <ProjectLanding showProjectPage = {this.showProjectPage} theme={theme}  fontSize={fontSize} userInfo={this.userInfo}/>
                            </Row></Container>;
                    } else {
                        showPage = <Container fluid style={fonts.verdana}>
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
                                    fontSize = {fontSize}/>
                            </Row>
                            <Row><ProjectPage projectID={this.state.projectID} theme = {theme} fontSize={fontSize} userInfo={this.userInfo} hideProjectPage={this.hideProjectPage} viewPage = "taskView"/></Row></Container>;
                    }
                }
            } else {
                    if (projectPageUp) {
                        if (theme == "dark") {
                            showPage = <Container fluid style={fonts.darkCourier}>
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
                                        fontSize = {fontSize}/>
                                </Row>
                                <Row><ProjectPage projectID={this.state.projectID} theme = {theme} fontSize={fontSize} userInfo={this.userInfo} hideProjectPage={this.hideProjectPage} viewPage = "taskView"/></Row></Container>;
                        } else {
                            showPage = <Container fluid style={fonts.courier}>
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
                                        fontSize = {fontSize}/>
                                </Row>
                                <Row><ProjectPage projectID={this.state.projectID} theme = {theme} fontSize={fontSize} userInfo={this.userInfo} hideProjectPage={this.hideProjectPage} viewPage = "taskView"/></Row></Container>;
                        }
                    } else {
                        if (theme == "dark") {
                            showPage = <Container fluid style={fonts.darkCourier}>
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
                                        fontSize = {fontSize}/>
                                </Row>
                                <Row>
                                <ProjectLanding showProjectPage = {this.showProjectPage} theme={theme} fontSize={fontSize} userInfo={this.userInfo}/>
                                </Row></Container>;
                        } else {
                            showPage = <Container fluid style={fonts.courier}>
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
                                        fontSize = {fontSize}/>
                                </Row>
                                <Row>
                                <ProjectLanding showProjectPage = {this.showProjectPage} theme={theme} fontSize={fontSize} userInfo={this.userInfo}/>
                                </Row></Container>;
                        }
                    }
            }
        }
        else {
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
