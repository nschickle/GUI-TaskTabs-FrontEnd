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

interface IUser {
    id: number;
    name: string;
    email: string;
}

const testOwner: IUser = { id: null, name: null, email: null };


const responseGoogle = (response: any) => {
    console.log(response);
    console.log(response.profileObj.name);
    testOwner.name = response.profileObj.name;
    testOwner.email = response.profileObj.email;
  }

interface SignInButtonProps {
    userInfo: UserInfo;
}

export class SignInButton extends React.Component<SignInButtonProps> {
    owner: IUser;
    constructor(props: SignInButtonProps) {
        super(props);

        
    }
    public render() {
                return (
                        <Container style={styles.button}>
                            <GoogleLogin
                            clientId="528310070004-u0clc84o9iktpqi6tjujqe9pq9f6ns2n.apps.googleusercontent.com"
                            buttonText="Sign In With Google and Launch!"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                            isSignedIn={true}
                            />
                        </Container>
                );
            
    }
}
