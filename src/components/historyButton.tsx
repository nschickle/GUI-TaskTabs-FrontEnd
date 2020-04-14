import * as React from 'react';

import Breadcrumb from 'react-bootstrap/Breadcrumb';

interface HistoryButtonProps {
    id: number,
    name: string
    changeHead: (newHead: number) => any;
    currentHead: number;
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
        if (this.props.id == this.props.currentHead) {
            return (
                <Breadcrumb.Item active>
                    {this.props.name}
                </Breadcrumb.Item>
            );
        } else {
            return (
                <Breadcrumb.Item onClick={this.onButtonClick}>
                    {this.props.name}
                </Breadcrumb.Item>
            );
        }
    }
};
