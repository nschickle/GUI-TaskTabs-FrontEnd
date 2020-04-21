import * as React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';

const styles = {
    tab1: {
        marginLeft: 30
    },
    tab2: {
        marginLeft: 50
    }
}

const font16 = {
    box: {
        fontSize: 16,
        height: window.innerHeight - 300,
        paddingLeft: 10,
        paddingRight: 10,
        minWidth: 650,
        width: 950,
        margin: "auto",
        overflow: "auto",
        marginBottom: 25,
    },
    button: {
        fontSize: 16,
        height: 56,
        width: 165,
        marginLeft: 220
    }
};

const font24 = {
    box: {
        fontSize: 24,
        height: window.innerHeight - 375,
        paddingLeft: 10,
        paddingRight: 10,
        minWidth: 650,
        width: 950,
        margin: "auto",
        overflow: "auto",
        marginBottom: 25,
    },
    button: {
        fontSize: 24,
        height: 75,
        width: 235,
        marginLeft: 215
    }
};

const font32 = {
    box: {
        fontSize: 32,
        height: window.innerHeight - 380,
        paddingLeft: 10,
        paddingRight: 10,
        minWidth: 650,
        width: 950,
        margin: "auto",
        overflow: "auto",
        marginBottom: 25,
    },
    button: {
        fontSize: 32,
        height: 92,
        width: 235,
        marginLeft: 215
    }
};

const font40 = {
    box: {
        fontSize: 40,
        height: window.innerHeight - 370,
        paddingLeft: 10,
        paddingRight: 10,
        minWidth: 650,
        width: 950,
        margin: "auto",
        overflow: "auto",
        marginBottom: 20,
    },
    button: {
        fontSize: 40,
        height: 92,
        width: 320,
        marginLeft: 210
    }
};


interface HistoryTabProps {
    showStatTab: () => any,
    showTaskView: () => any,
    viewPage: string,
    fontSize: number,
    theme: string,
    history: History[]
}

interface HistoryTabState {
    showStatTab: () => any,
    showTaskView: () => any
}

interface History {
    id: string,
    taskID: string,
    responsibleUser: string,
    timestamp: Date,
    textBody: string
}

export class HistoryTab extends React.Component<HistoryTabProps, HistoryTabState> {
    historyArray: History[];

    constructor(props: HistoryTabProps){
        super(props);

        this.state = {
            showStatTab: props.showStatTab,
            showTaskView: props.showTaskView
        }

        this.historyArray = props.history;
    }

    showStatTab = () => {
        this.state.showStatTab();
    }

    showTaskView = () => {
        this.state.showTaskView();
    }

    dateToString = (date: Date) => {
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        const day = date.getDate();
        const dateString = month + "/" + day + "/" + year;

        const hour = date.getHours();
        let min = date.getMinutes();
        let time;

        if(min < 10)
        {
            time = hour + ":0" + min;
        } else {
            time = hour + ":" + min;
        }

        return dateString + " at " + time;
    }

    public render() {
        const listHistory = this.historyArray.map((item) => {
            if(this.props.theme === "light"){
                return (
                    <ListGroup.Item action key={item.id}>
                        <strong>{this.dateToString(item.timestamp)}</strong><br/>
                        <p style={styles.tab1}><em>{item.taskID} by {item.responsibleUser}</em></p>
                        <p style={styles.tab2}>{item.textBody}</p>
                    </ListGroup.Item>
                );
            } else {
                return (
                    <ListGroup.Item action key={item.id} variant="dark">
                        <strong>{this.dateToString(item.timestamp)}</strong><br/>
                        <p style={styles.tab1}><em>{item.taskID} by {item.responsibleUser}</em></p>
                        <p style={styles.tab2}>{item.textBody}</p>
                    </ListGroup.Item>
                );
            }

        });

        if(this.props.theme === "light"){
            if(this.props.fontSize === 16){
                return(
                    <Container>
                        <Row>
                            <ListGroup style={font16.box}>
                                {listHistory}
                            </ListGroup>
                        </Row>
                        <Row>
                            <Col xs="7"></Col>
                            <Col xs="5">
                                <Row noGutters>
                                    <Button onClick = {this.showTaskView} variant="outline-info" style={font16.button}> Task View </Button>
                                </Row>
                                <Row noGutters>
                                    <Button onClick = {this.showStatTab} variant="outline-info" style={font16.button}> Statistics </Button>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                );
            } else if(this.props.fontSize === 24){
                return(
                    <Container>
                        <Row>
                            <ListGroup style={font24.box}>
                                {listHistory}
                            </ListGroup>
                        </Row>
                        <Row>
                            <Col xs="6"></Col>
                            <Col xs="6">
                                <Row noGutters>
                                    <Button onClick = {this.showTaskView} variant="outline-info" style={font24.button}> Task View </Button>
                                </Row>
                                <Row noGutters>
                                    <Button onClick = {this.showStatTab} variant="outline-info" style={font24.button}> Statistics </Button>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                );
            } else if(this.props.fontSize === 32){
                return(
                    <Container>
                        <Row>
                            <ListGroup style={font32.box}>
                                {listHistory}
                            </ListGroup>
                        </Row>
                        <Row>
                            <Col xs="6"></Col>
                            <Col xs="6">
                                <Row noGutters>
                                    <Button onClick = {this.showTaskView} variant="outline-info" style={font32.button}> Task View </Button>
                                </Row>
                                <Row noGutters>
                                    <Button onClick = {this.showStatTab} variant="outline-info" style={font32.button}> Statistics </Button>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                );
            } else {
                return(
                    <Container>
                        <Row>
                            <ListGroup style={font40.box}>
                                {listHistory}
                            </ListGroup>
                        </Row>
                        <Row>
                            <Col xs="5"></Col>
                            <Col xs="7">
                                <Row noGutters>
                                    <Button onClick = {this.showTaskView} variant="outline-info" style={font40.button}> Task View </Button>
                                </Row>
                                <Row noGutters>
                                    <Button onClick = {this.showStatTab} variant="outline-info" style={font40.button}> Statistics </Button>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                );
            }
        } else {
            if(this.props.fontSize === 16){
                return(
                    <Container>
                        <Row>
                            <ListGroup style={font16.box}>
                                {listHistory}
                            </ListGroup>
                        </Row>
                        <Row>
                            <Col xs="7"></Col>
                            <Col xs="5">
                                <Row noGutters>
                                    <Button onClick = {this.showTaskView} variant="info" style={font16.button}> Task View </Button>
                                </Row>
                                <Row noGutters>
                                    <Button onClick = {this.showStatTab} variant="info" style={font16.button}> Statistics </Button>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                );
            } else if(this.props.fontSize === 24){
                return(
                    <Container>
                        <Row>
                            <ListGroup style={font24.box}>
                                {listHistory}
                            </ListGroup>
                        </Row>
                        <Row>
                            <Col xs="6"></Col>
                            <Col xs="6">
                                <Row noGutters>
                                    <Button onClick = {this.showTaskView} variant="info" style={font24.button}> Task View </Button>
                                </Row>
                                <Row noGutters>
                                    <Button onClick = {this.showStatTab} variant="info" style={font24.button}> Statistics </Button>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                );
            } else if(this.props.fontSize === 32){
                return(
                    <Container>
                        <Row>
                            <ListGroup style={font32.box}>
                                {listHistory}
                            </ListGroup>
                        </Row>
                        <Row>
                            <Col xs="6"></Col>
                            <Col xs="6">
                                <Row noGutters>
                                    <Button onClick = {this.showTaskView} variant="info" style={font32.button}> Task View </Button>
                                </Row>
                                <Row noGutters>
                                    <Button onClick = {this.showStatTab} variant="info" style={font32.button}> Statistics </Button>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                );
            } else {
                return(
                    <Container>
                        <Row>
                            <ListGroup style={font40.box}>
                                {listHistory}
                            </ListGroup>
                        </Row>
                        <Row>
                            <Col xs="5"></Col>
                            <Col xs="7">
                                <Row noGutters>
                                    <Button onClick = {this.showTaskView} variant="info" style={font40.button}> Task View </Button>
                                </Row>
                                <Row noGutters>
                                    <Button onClick = {this.showStatTab} variant="info" style={font40.button}> Statistics </Button>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                );
            }
        }
    }
}
