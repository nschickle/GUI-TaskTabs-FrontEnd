import * as React from 'react';

import Button from 'react-bootstrap/Button';

const styles = {
    button: {
        height: 25,
        fontSize: 16,
        padding: 0,
        margin: 0
    }
};

interface ProjectHistory {
	id: number,
	name: string
};

interface HistoryButtonProps {
    id: number,
    name: string
    changeHead: (newHead: number) => any;
}

// This is a single SubTask button. They live in the right hand side of the project page.
// This reuses the progress bar for the background of the button.
export class HistoryButton extends React.Component<HistoryButtonProps>{
    name: string;
    displayedName: string;

    constructor(props: HistoryButtonProps) {
        super(props);

    }

    onButtonClick = () => {
        this.props.changeHead(this.props.id);
    }

    render() {
        return (
        <Button variant="info" onClick={this.onButtonClick}>
            {this.props.name}
        </Button>
        );
    }
};
