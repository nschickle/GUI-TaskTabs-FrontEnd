import * as React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

const style = {
    loader: {
        width: 100,
        height: 100
    },
    box: {
        margin: "auto",
        marginTop: 250,
        marginLeft: 400
    }
}

interface LoadingPageProps {
    showTaskView: () => any,
    theme: string
}

interface LoadingPageState {
    showTaskView: () => any
}

export class LoadingPage extends React.Component<LoadingPageProps, LoadingPageState>{

    constructor(props: LoadingPageProps){
        super(props);

        this.state = {
            showTaskView: props.showTaskView
        }
    }

    componentDidMount() {
		setTimeout(() => {
            this.state.showTaskView();
        }, 350);
	}

    render(){
        if(this.props.theme === "light"){
            return (
                <Container>
                    <Col xs="4"/>
                    <Col xs="4" style={style.box}>
                        <Spinner animation="border" variant="dark" style={style.loader} />
                    </Col>
                    <Col xs="4"/>
                </Container>
            );
        } else {
            return (
                <Container>
                    <Col xs="4"/>
                    <Col xs="4" style={style.box}>
                        <Spinner animation="border" variant="light" style={style.loader} />
                    </Col>
                    <Col xs="4"/>
                </Container>
            );
        }
    }
}
