import * as React from "react";
import GoogleLogin from 'react-google-login';
import { UserInfo } from "./userInfo";
import Container from "react-bootstrap/Container";
import { ApplicationConfig } from './applicationConfig';
const styles = {
    button: {
        margin: "auto",
        width: 220,
        height: 50,
        fontSize: 16
    }
};

interface SignInButtonProps {
    launchApp: (user: UserInfo) => any;
}

export class SignInButton extends React.Component<SignInButtonProps, {}> {
    owner: UserInfo;
    constructor(props: SignInButtonProps) {
        super(props);

    }

    responseGoogle = (response: any) => {
        if (response.Tt) {
            let user: UserInfo = { name: response.Tt.Bd, email: response.Tt.Du }
            this.props.launchApp(user);
        }
    }

    public render() {
        return (
            <Container style={styles.button}>
                <GoogleLogin
                    clientId={ApplicationConfig.googleAuth.clientID}
                    buttonText="Sign In With Google"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </Container>
        );

    }
}