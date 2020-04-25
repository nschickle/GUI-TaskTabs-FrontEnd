import * as React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import {Pie, PieChart, Cell, Tooltip} from 'recharts';
import { RetryableFetch } from "./retryableFetch";
import { UserInfo } from "./userInfo";
import { UserHeaderHttpRequest } from "./userHeaderHttpRequest";

const styles = {
    tab1: {
        marginLeft: 30
    },
    tab2: {
        marginLeft: 50
    }
};

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

interface ButtonVariantProps {
    variant: "link" | "light" | "outline-success" | "success" | "primary" | "secondary" | "danger" | "warning" | "info" | "dark" | "outline-primary" | "outline-secondary" | "outline-danger" | "outline-warning" | "outline-info" | "outline-dark" | "outline-light";
}

interface IStatistics {
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
    projectId: number,
    task: string
    userInfo: UserInfo
}

interface StatTabState {
    showHistoryTab: () => any;
    showTaskView: () => any;
    isLoaded: boolean;
    error: boolean;
    complete: number;
    incomplete: number;
    total: number;
}

export class StatTab extends React.Component<StatTabProps, StatTabState> {
    constructor(props: StatTabProps){
        super(props);

        this.state = {
            showHistoryTab: props.showHistoryTab,
            showTaskView: props.showTaskView,
            isLoaded: false,
            error: false,
            complete: null,
            incomplete: null,
            total: null
        }
    }

    showHistoryTab = () => {
        this.state.showHistoryTab();
    }

    showTaskView = () => {
        this.state.showTaskView();
    }

    componentDidMount = () => {
        const request = new UserHeaderHttpRequest(`/api/stats/completion/${this.props.projectId}`, this.props.userInfo);
        RetryableFetch.fetch_retry(request)
            .then(res => res.json())
            .then(
                (result: IStatistics) => {
                    this.setState({ 
                        isLoaded: true, 
                        error: false,
                        complete: result.numCompleted,
                        total: result.numTotal,
                        incomplete: result.numTotal - result.numCompleted});
                },
                (error) => {
                    this.setState({ 
                        isLoaded: true, 
                        error: true});
                }
            );
    }


    public render() {
        let Buttons: ButtonVariantProps["variant"];
        let bottomCol1: any;
        let bottomCol2: any;
        let bottomCol3: any;
        let colorArray: string[];
        let style;
        let height;
        let outerRadius;

        //TODO: Implement loading mechanism
        if (!this.state.isLoaded){
            return <>Loading...</>;
        }

        let statData: StatData[] = [
            {
                name: "Complete Tasks",
                value: this.state.complete
            },
            {
                name: "Incomplete Tasks",
                value: this.state.incomplete
            }
        ];

        if(this.props.fontSize === 16){
            style = font16;
            height = 600;
            outerRadius = 250;
            bottomCol1 = "3";
            bottomCol2 = "6";
            bottomCol3 = "3";
        } else if(this.props.fontSize === 24){
            style = font24;
            height = 500;
            outerRadius = 235;
            bottomCol1 = "2";
            bottomCol2 = "6";
            bottomCol3 = "4";
        } else if(this.props.fontSize === 32){
            style = font32;
            height = 500;
            outerRadius = 235;
            bottomCol1 = "1";
            bottomCol2 = "7";
            bottomCol3 = "4";
        } else {
            style = font40;
            height = 485;
            outerRadius = 230;
            bottomCol1 = "1";
            bottomCol2 = "7";
            bottomCol3 = "4";
        }

        if(this.props.theme === "light"){
            Buttons = "outline-info";
            colorArray = [
                "#8cde88",
                "#f76d6d"
            ];
        } else {
            Buttons = "info";
            colorArray = [
                "#28a745",
                "#aa1b29"
            ];
        }

        return(
            <Container>
                <Row style={style.box}>
                    <PieChart width={900} height={height}>
                        <Pie data={statData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={outerRadius}>
                            {statData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colorArray[index]}/>
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </Row>
                <Row>
                    <Col xs={bottomCol1}/>
                    <Col xs={bottomCol2} >
                        <Row><h2>{this.props.task} Progress:</h2></Row>
                        <Row style={style.desc}>{this.state.complete} out of {this.state.total} tasks completed!</Row>
                    </Col>
                    <Col xs={bottomCol3}>
                        <Row noGutters>
                            <Button onClick = {this.showTaskView}
                            variant = {Buttons}
                            style = {style.button}> Task View </Button>
                        </Row>
                        <Row noGutters>
                            <Button onClick = {this.showHistoryTab}
                            variant = {Buttons}
                            style = {style.button}> History </Button>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}
