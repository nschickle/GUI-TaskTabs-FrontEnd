import * as React from "react";
import GoogleLogin from 'react-google-login';
import Button from 'react-bootstrap/Button';
import { useGoogleLogin } from 'react-google-login';
import { useGoogleLogout } from 'react-google-login';
import { UserInfo } from "./userInfo";
import * as jwt from 'jwt-decode'
import { UserHeaderHttpRequest } from "./userHeaderHttpRequest";
import { RetryableFetch } from "./retryableFetch";
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

  /*const { signIn, loaded } = useGoogleLogin({
    onSuccess,
    clientId,
    cookiePolicy,
    loginHint,
    hostedDomain,
    autoLoad,
    isSignedIn,
    fetchBasicProfile,
    redirectUri,
    discoveryDocs,
    onFailure,
    uxMode,
    scope,
    accessType,
    responseType,
    jsSrc,
    onRequest,
    prompt
  })

  const { signOut, loaded } = useGoogleLogout({
    jsSrc,
    onFailure,
    clientId,
    cookiePolicy,
    loginHint,
    hostedDomain,
    fetchBasicProfile,
    discoveryDocs,
    uxMode,
    redirectUri,
    scope,
    accessType,
    onLogoutSuccess
  })*/


interface NewProjectPost {
    owner: string;
    collaborators: string[];
    parentId: number;
    title: string;
    description: string;
    notes: string;
    assignedTo: number;
    status: string;
    progress: number;
}

interface SignInButtonProps {
    theme: string;
    fontSize: number;
    userInfo: UserInfo;
}

export class SignInButton extends React.Component<SignInButtonProps> {

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
                        </Container>//<Button style={styles.button} size="lg" variant="outline-primary" onClick={this.signInAndLaunch}> Sign In and Launch </Button>
                        
                        
                );
            
    }
}
