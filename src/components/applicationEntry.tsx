import * as React from "react";
import { MainPage } from "./mainPage";
import { MainLanding } from "./mainLanding";
import { UserInfo } from "./userInfo";

// TODO:
// Make it so choosing a project on the landing changes it on project page

interface AppEntryPageState {
    isLoggedIn: boolean;
    userInfo: UserInfo;
}

export class AppEntryPage extends React.Component<{}, AppEntryPageState> {

    constructor(props: Readonly<{}>) {
        super(props);

      this.state = {
        isLoggedIn: false,
        userInfo: null,
      };
    }

    collectLoginInfo = (isLoggedIn: boolean, userInfo:UserInfo) => {
        this.setState({ isLoggedIn, userInfo});
    }


    render() {
        if (this.state.isLoggedIn) {
            return <MainPage signedIn={true} projectPageUp={false} theme="light" font="verdana" fontSize = {16} viewPage="loading"/>;
        } else {
            return <MainLanding reportLoginInfo ={this.collectLoginInfo}/>;
        }
    }
}
