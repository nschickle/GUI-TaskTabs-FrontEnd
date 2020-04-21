import * as React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import {Pie, PieChart, Cell, Tooltip} from 'recharts';

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
        borderBottom: "dotted",
        borderRadius: 10,
        borderColor: "#b3b6bb"
    },
    button: {
        fontSize: 16,
        height: 56,
        width: 165,
        marginLeft: 50
    },
    desc: {
        fontSize: 16,
        margin: "auto",
        marginLeft: 65,
        marginTop: 5
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
        borderBottom: "dotted",
        borderRadius: 10,
        borderColor: "#b3b6bb"
    },
    button: {
        fontSize: 24,
        height: 75,
        width: 235,
        marginLeft: 50
    },
    desc: {
        fontSize: 24,
        margin: "auto",
        marginLeft: 65,
        marginTop: 5
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
        marginBottom: 25,
        borderBottom: "dotted",
        borderRadius: 10,
        borderColor: "#b3b6bb"
    },
    button: {
        fontSize: 32,
        height: 92,
        width: 235,
        marginLeft: 50
    },
    desc: {
        fontSize: 32,
        margin: "auto",
        marginLeft: 65,
        marginTop: 5
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
        borderBottom: "dotted",
        borderRadius: 10,
        borderColor: "#b3b6bb"
    },
    button: {
        fontSize: 40,
        height: 92,
        width: 320,

    },
    desc: {
        fontSize: 40,
        margin: "auto",
        marginLeft: 65,
        marginTop: 5
    }
};

interface Statistics {
    numTotal: number,
    numCompleted: number
}

interface StatData {
    name: string,
    value: number
}

interface StatTabProps {
    showHistoryTab: () => any,
    showTaskView: () => any,
    viewPage: string,
    fontSize: number,
    theme: string,
    stats: Statistics,
    task: string
}

interface StatTabState {
    showHistoryTab: () => any,
    showTaskView: () => any
}

const darkColors = [
    "#28a745",
    "#aa1b29"
];

const lightColors = [
    "#8cde88",
    "#f76d6d"
];

export class StatTab extends React.Component<StatTabProps, StatTabState> {
    complete: number;
    incomplete: number;
    total: number;
    statData: StatData[];

    constructor(props: StatTabProps){
        super(props);

        this.state = {
            showHistoryTab: props.showHistoryTab,
            showTaskView: props.showTaskView
        }

        this.complete = props.stats.numCompleted;
        this.incomplete = props.stats.numTotal - props.stats.numCompleted;
        this.total = props.stats.numTotal;

        this.statData = [
            {
                name: "Complete Tasks",
                value: this.complete
            },
            {
                name: "Incomplete Tasks",
                value: this.incomplete
            }
        ];
    }

    showHistoryTab = () => {
        this.state.showHistoryTab();
    }

    showTaskView = () => {
        this.state.showTaskView();
    }

    public render() {
        if(this.props.theme === "light"){
            if(this.props.fontSize === 16){
                return(
                    <Container>
                        <Row style={font16.box}>
                            <PieChart width={900} height={600}>
                                <Pie data={this.statData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={250}>
                                    {this.statData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={lightColors[index]}/>
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </Row>
                        <Row>
                            <Col xs="3"/>
                            <Col xs="6" >
                                <Row><h2>{this.props.task} Progress:</h2></Row>
                                <Row style={font16.desc}>{this.complete} out of {this.total} tasks completed!</Row>
                            </Col>
                            <Col xs="3">
                                <Row noGutters>
                                    <Button onClick = {this.showTaskView} variant="outline-info" style={font16.button}> Task View </Button>
                                </Row>
                                <Row noGutters>
                                    <Button onClick = {this.showHistoryTab} variant="outline-info" style={font16.button}> History </Button>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                );
            } else if(this.props.fontSize === 24){
                return(
                    <Container>
                        <Row style={font24.box}>
                            <PieChart width={900} height={500}>
                                <Pie data={this.statData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={235}>
                                    {this.statData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={lightColors[index]}/>
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </Row>
                        <Row>
                            <Col xs="2"/>
                            <Col xs="6" >
                                <Row><h2>{this.props.task} Progress:</h2></Row>
                                <Row style={font24.desc}>{this.complete} out of {this.total} tasks completed!</Row>
                            </Col>
                            <Col xs="4">
                                <Row noGutters>
                                    <Button onClick = {this.showTaskView} variant="outline-info" style={font24.button}> Task View </Button>
                                </Row>
                                <Row noGutters>
                                    <Button onClick = {this.showHistoryTab} variant="outline-info" style={font24.button}> History </Button>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                );
            } else if(this.props.fontSize === 32){
                return(
                    <Container>
                        <Row style={font32.box}>
                            <PieChart width={900} height={500}>
                                <Pie data={this.statData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={235}>
                                    {this.statData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={lightColors[index]}/>
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </Row>
                        <Row>
                            <Col xs="1"/>
                            <Col xs="7" >
                                <Row><h1>{this.props.task} Progress:</h1></Row>
                                <Row style={font32.desc}>{this.complete} out of {this.total} tasks completed!</Row>
                            </Col>
                            <Col xs="4">
                                <Row noGutters>
                                    <Button onClick = {this.showTaskView} variant="outline-info" style={font32.button}> Task View </Button>
                                </Row>
                                <Row noGutters>
                                    <Button onClick = {this.showHistoryTab} variant="outline-info" style={font32.button}> History </Button>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                );
            } else {
                return(
                    <Container>
                        <Row style={font40.box}>
                            <PieChart width={900} height={485}>
                                <Pie data={this.statData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={230}>
                                    {this.statData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={lightColors[index]}/>
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </Row>
                        <Row>
                            <Col xs="1"/>
                            <Col xs="7">
                                <Row><h1>{this.props.task} Progress:</h1></Row>
                                <Row style={font40.desc}>{this.complete} out of {this.total} tasks completed!</Row>
                            </Col>
                            <Col xs="4">
                                <Row noGutters>
                                    <Button onClick = {this.showTaskView} variant="outline-info" style={font40.button}> Task View </Button>
                                </Row>
                                <Row noGutters>
                                    <Button onClick = {this.showHistoryTab} variant="outline-info" style={font40.button}> History </Button>
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
                        <Row style={font16.box}>
                            <PieChart width={900} height={600}>
                                <Pie data={this.statData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={250}>
                                    {this.statData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={darkColors[index]}/>
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </Row>
                        <Row>
                            <Col xs="3"/>
                            <Col xs="6" >
                                <Row><h2>{this.props.task} Progress:</h2></Row>
                                <Row style={font16.desc}>{this.complete} out of {this.total} tasks completed!</Row>
                            </Col>
                            <Col xs="3">
                                <Row noGutters>
                                    <Button onClick = {this.showTaskView} variant="info" style={font16.button}> Task View </Button>
                                </Row>
                                <Row noGutters>
                                    <Button onClick = {this.showHistoryTab} variant="info" style={font16.button}> History </Button>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                );
            } else if(this.props.fontSize === 24){
                return(
                    <Container>
                        <Row style={font24.box}>
                            <PieChart width={900} height={500}>
                                <Pie data={this.statData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={235}>
                                    {this.statData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={darkColors[index]}/>
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </Row>
                        <Row>
                            <Col xs="2"/>
                            <Col xs="6" >
                                <Row><h2>{this.props.task} Progress:</h2></Row>
                                <Row style={font24.desc}>{this.complete} out of {this.total} tasks completed!</Row>
                            </Col>
                            <Col xs="4">
                                <Row noGutters>
                                    <Button onClick = {this.showTaskView} variant="info" style={font24.button}> Task View </Button>
                                </Row>
                                <Row noGutters>
                                    <Button onClick = {this.showHistoryTab} variant="info" style={font24.button}> History </Button>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                );
            } else if(this.props.fontSize === 32){
                return(
                    <Container>
                        <Row style={font32.box}>
                            <PieChart width={900} height={500}>
                                <Pie data={this.statData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={235}>
                                    {this.statData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={darkColors[index]}/>
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </Row>
                        <Row>
                            <Col xs="1"/>
                            <Col xs="7" >
                                <Row><h1>{this.props.task} Progress:</h1></Row>
                                <Row style={font32.desc}>{this.complete} out of {this.total} tasks completed!</Row>
                            </Col>
                            <Col xs="4">
                                <Row noGutters>
                                    <Button onClick = {this.showTaskView} variant="info" style={font32.button}> Task View </Button>
                                </Row>
                                <Row noGutters>
                                    <Button onClick = {this.showHistoryTab} variant="info" style={font32.button}> History </Button>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                );
            } else {
                return(
                    <Container>
                        <Row style={font40.box}>
                            <PieChart width={900} height={485}>
                                <Pie data={this.statData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={230}>
                                    {this.statData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={darkColors[index]}/>
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </Row>
                        <Row>
                            <Col xs="1"/>
                            <Col xs="7">
                                <Row><h1>{this.props.task} Progress:</h1></Row>
                                <Row style={font40.desc}>{this.complete} out of {this.total} tasks completed!</Row>
                            </Col>
                            <Col xs="4">
                                <Row noGutters>
                                    <Button onClick = {this.showTaskView} variant="info" style={font40.button}> Task View </Button>
                                </Row>
                                <Row noGutters>
                                    <Button onClick = {this.showHistoryTab} variant="info" style={font40.button}> History </Button>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                );
            }
        }
    }
}
