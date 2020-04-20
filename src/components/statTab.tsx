import * as React from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

interface StatTabProps {
    showHistoryTab: any,
    showTaskView: any,
    viewPage: string,
    fontSize: number,
    theme: string
}

interface StatTabState {
    showHistoryTab: any,
    showTaskView: any
}

export class StatTab extends React.Component<StatTabProps, StatTabState> {

    constructor(props: StatTabProps){
        super(props);

        this.state = {
            showHistoryTab: props.showHistoryTab,
            showTaskView: props.showTaskView
        }

    }

    showHistoryTab = () => {
        this.state.showHistoryTab();
    }

    showTaskView = () => {
        this.state.showTaskView();
    }

    public render() {
        return(
            <Container>
                <Button onClick = {this.showTaskView}> Task View </Button>
                <Button onClick = {this.showHistoryTab}> History </Button>
            </Container>
        );
    }
}
