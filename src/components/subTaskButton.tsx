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

interface SubTaskNameProps {
    fontSize: number;
    marginTop: number;
};

const SubTaskName = styled.div`
    font-size: ${(props: SubTaskNameProps) => props.fontSize}px;
    position: absolute;
    z-index: 99;
    margin-left: 10px;
    margin-top: ${(props: SubTaskNameProps) => props.marginTop}px;
    min-width: 225px;
;

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
        if (this.name.length > 32) {
            this.displayedName = this.name.substring(0, 31);
            this.displayedName += "...";
        }
    }

    onButtonClick = () => {
        this.props.changeHead(this.props.taskHead);
    }

    render() {
        const variant = this.props.theme === "light" ? "outline-dark" : "outline-light";
        this.checkNameLength();

        let marginTop;
        let style;

        if (this.props.fontSize === 16) {
            marginTop = 10;
            style = font16.button;
        } else if (this.props.fontSize === 24) {
            marginTop = 15;
            style = font24.button;
        } else if (this.props.fontSize === 32) {
            marginTop = 20;
            style = font32.button;
        } else {
            marginTop = 30;
            style = font40.button;
        }

        return (
            <Container>
                <Row>
                    <Button style={style} onClick={this.onButtonClick} variant={variant}>
                        <SubTaskName className="text-left" fontSize={this.props.fontSize} marginTop={marginTop}>{this.displayedName}</SubTaskName>
                        <TaskProgressBar percentage={this.props.percentage} isTaskButton={true} theme={this.props.theme} fontSize={this.props.fontSize}></TaskProgressBar>
                    </Button>
                </Row>
            </Container>
        );
    }
};
