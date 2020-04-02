import * as React from 'react';
import styled from 'styled-components';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import { TaskProgressBar } from './progressBar';
import { SubTask } from './subtaskType';

const styles = {
    button: {
        width: window.innerWidth,
        height: 100,
        fontSize: 32,
        padding: 0,
        margin: 0
    },
    progress: {
        height: 100
    }
};

const SubTaskName = styled.div`
    font-size: 32px;
    position: absolute;
    z-index: 99;
    left: 25px;
    margin-top: 15px;
    min-width: 225px;
`;

interface SubTaskButtonProps {
    percentage: number;
    name: string;
    taskHead: number;
    changeHead: (newHead: number) => any;
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
        if (this.name.length > 9) {
            this.displayedName = this.name.substring(0, 8);
            this.displayedName += "...";
        }
    }

    onButtonClick = () => {
        // TODO make this update task correctly
        this.props.changeHead(2);
    }

    render() {
        this.checkNameLength();
        return (
            <Container>
                <Row>
                    <Button style={styles.button} onClick={this.onButtonClick} variant="outline-dark">
                        <SubTaskName>{this.displayedName}</SubTaskName>
                        <TaskProgressBar percentage={this.props.percentage} isTaskButton={true}></TaskProgressBar>
                    </Button>
                </Row>
            </Container>
        );
    }
};
