import * as React from "react";
import GoogleLogin from 'react-google-login';
import { UserInfo } from "./userInfo";
import Container from "react-bootstrap/Container";

const styles = {
    button: {
        margin: "auto",
        width: 220,
        height: 50,
        fontSize: 16
    }
};


const testOwner: UserInfo = { name: null, email: null };


const responseGoogle = (response: any) => {
    console.log(response);
    console.log(response.profileObj.name);
    testOwner.name = response.profileObj.name;
    testOwner.email = response.profileObj.email;
}

interface SignInButtonProps {
    userInfo: UserInfo;
    launchApp: () => any;
}

export class SignInButton extends React.Component<SignInButtonProps, {launchApp: () => any}> {
    owner: UserInfo;
    constructor(props: SignInButtonProps) {
        super(props);
        this.state = {
            launchApp: props.launchApp
        }
        this.owner = this.props.userInfo
        
    }

    getUser = () => {
        responseGoogle;
        this.owner = testOwner;
    }

    public render() {
                return (
                        <Container style={styles.button}>
                            <GoogleLogin
                            clientId="528310070004-u0clc84o9iktpqi6tjujqe9pq9f6ns2n.apps.googleusercontent.com"
                            buttonText="Sign In With Google and Launch!"
                            onSuccess={this.props.launchApp}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                            />
                        </Container>
                );
            
    }
}