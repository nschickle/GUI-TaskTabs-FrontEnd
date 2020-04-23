import * as React from 'react';
import styled from 'styled-components';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import { TaskProgressBar } from './progressBar';

const font16 = {
    button: {
        width: window.innerWidth,
        height: 50,
        fontSize: 16,
        padding: 0,
        margin: 0
    },
    progress: {
        height: 50,
        padding: 0,
        margin: 0
    }
};

const font24 = {
    button: {
        width: window.innerWidth,
        height: 75,
        fontSize: 24,
        padding: 0,
        margin: 0
    },
    progress: {
        height: 75,
        padding: 0,
        margin: 0
    }
};

const font32 = {
    button: {
        width: window.innerWidth,
        height: 100,
        fontSize: 32,
        padding: 0,
        margin: 0
    },
    progress: {
        height: 100,
        padding: 0,
        margin: 0
    }
};

const font40 = {
    button: {
        width: window.innerWidth,
        height: 125,
        fontSize: 40,
        padding: 0,
        margin: 0
    },
    progress: {
        height: 125,
        padding: 0,
        margin: 0
    }
};

const SubTaskName16 = styled.div`
    font-size: 16px;
    position: absolute;
    z-index: 99;
    margin-top: 10px;
    min-width: 225px;
`;

const SubTaskName24 = styled.div`
    font-size: 24px;
    position: absolute;
    z-index: 99;
    margin-top: 15px;
    min-width: 225px;
`;

const SubTaskName32 = styled.div`
    font-size: 32px;
    position: absolute;
    z-index: 99;
    margin-top: 20px;
    min-width: 225px;
`;

const SubTaskName40 = styled.div`
    font-size: 40px;
    position: absolute;
    z-index: 99;
    margin-top: 30px;
    min-width: 225px;
`;

interface SubTaskButtonProps {
    name: string;
    percentage: number;
    key: number;
    changeHead: (newHead: number) => any;
    taskHead: number;
    theme: string;
    fontSize: number;
}

// This is a single SubTask button. They live in the right hand side of the project page.
// This reuses the progress bar for the background of the button.
export class SubTaskButton extends React.Component<SubTaskButtonProps>{
    name: string;
    displayedName: string;

    constructor(props: SubTaskButtonProps) {
        super(props);

        this.name = this.props.name;
        this.displayedName = this.name;
    }

    // If the title is too long, we should shorten it to fit the space we have.
    checkNameLength = () => {
        if (this.name.length > 25) {
            this.displayedName = this.name.substring(0, 24);
            this.displayedName += "...";
        }
    }

    onButtonClick = () => {
        this.props.changeHead(this.props.taskHead);
    }

    render() {
        this.checkNameLength();
        let subTaskButton;

        if(this.props.fontSize === 16){
            if(this.props.theme === "light") {
                subTaskButton = <Container>
                    <Row>
                        <Button style={font16.button} onClick={this.onButtonClick} variant="outline-dark">
                            <SubTaskName16>{this.displayedName}</SubTaskName16>
                            <TaskProgressBar percentage={this.props.percentage} isTaskButton={true} theme={this.props.theme} fontSize={this.props.fontSize}></TaskProgressBar>
                        </Button>
                    </Row>
                </Container>;
            } else {
                subTaskButton = <Container>
                    <Row>
                        <Button style={font16.button} onClick={this.onButtonClick} variant="outline-light">
                            <SubTaskName16>{this.displayedName}</SubTaskName16>
                            <TaskProgressBar percentage={this.props.percentage} isTaskButton={true} theme={this.props.theme} fontSize={this.props.fontSize}></TaskProgressBar>
                        </Button>
                    </Row>
                </Container>;
            }
        } else if(this.props.fontSize === 24){
            if(this.props.theme === "light") {
                subTaskButton = <Container>
                    <Row>
                        <Button style={font24.button} onClick={this.onButtonClick} variant="outline-dark">
                            <SubTaskName24>{this.displayedName}</SubTaskName24>
                            <TaskProgressBar percentage={this.props.percentage} isTaskButton={true} theme={this.props.theme} fontSize={this.props.fontSize}></TaskProgressBar>
                        </Button>
                    </Row>
                </Container>;
            } else {
                subTaskButton = <Container>
                    <Row>
                        <Button style={font24.button} onClick={this.onButtonClick} variant="outline-light">
                            <SubTaskName24>{this.displayedName}</SubTaskName24>
                            <TaskProgressBar percentage={this.props.percentage} isTaskButton={true} theme={this.props.theme} fontSize={this.props.fontSize}></TaskProgressBar>
                        </Button>
                    </Row>
                </Container>;
            }
        } else if(this.props.fontSize === 32){
            if(this.props.theme === "light") {
                subTaskButton = <Container>
                    <Row>
                        <Button style={font32.button} onClick={this.onButtonClick} variant="outline-dark">
                            <SubTaskName32>{this.displayedName}</SubTaskName32>
                            <TaskProgressBar percentage={this.props.percentage} isTaskButton={true} theme={this.props.theme} fontSize={this.props.fontSize}></TaskProgressBar>
                        </Button>
                    </Row>
                </Container>;
            } else {
                subTaskButton = <Container>
                    <Row>
                        <Button style={font32.button} onClick={this.onButtonClick} variant="outline-light">
                            <SubTaskName32>{this.displayedName}</SubTaskName32>
                            <TaskProgressBar percentage={this.props.percentage} isTaskButton={true} theme={this.props.theme} fontSize={this.props.fontSize}></TaskProgressBar>
                        </Button>
                    </Row>
                </Container>;
            }
        } else {
            if(this.props.theme === "light") {
                subTaskButton = <Container>
                    <Row>
                        <Button style={font40.button} onClick={this.onButtonClick} variant="outline-dark">
                            <SubTaskName40>{this.displayedName}</SubTaskName40>
                            <TaskProgressBar percentage={this.props.percentage} isTaskButton={true} theme={this.props.theme} fontSize={this.props.fontSize}></TaskProgressBar>
                        </Button>
                    </Row>
                </Container>;
            } else {
                subTaskButton = <Container>
                    <Row>
                        <Button style={font40.button} onClick={this.onButtonClick} variant="outline-light">
                            <SubTaskName40>{this.displayedName}</SubTaskName40>
                            <TaskProgressBar percentage={this.props.percentage} isTaskButton={true} theme={this.props.theme} fontSize={this.props.fontSize}></TaskProgressBar>
                        </Button>
                    </Row>
                </Container>;
            }
        }

        return (
            subTaskButton
        );
    }
};
