import * as React from 'react';

import Breadcrumb from 'react-bootstrap/Breadcrumb';

const styles = {
    font16: {
        fontSize: 12,
        backgroundColor: "#ffffff",
        padding: 5
    },
    font24: {
        fontSize: 16,
        backgroundColor: "#ffffff",
        padding: 5
    },
    font32: {
        fontSize: 20,
        backgroundColor: "#ffffff",
        padding: 5
    },
    font40: {
        fontSize: 20,
        backgroundColor: "#ffffff",
        padding: 5
    },
    font16Dark: {
        fontSize: 12,
        backgroundColor: "#b6babd",
        color: "#ffffff",
        padding: 5
    },
    font24Dark: {
        fontSize: 16,
        backgroundColor: "#b6babd",
        color: "#ffffff",
        padding: 5
    },
    font32Dark: {
        fontSize: 20,
        backgroundColor: "#b6babd",
        color: "#ffffff",
        padding: 5
    },
    font40Dark: {
        fontSize: 20,
        backgroundColor: "#b6babd",
        color: "#ffffff",
        padding: 5
    }
};

interface HistoryButtonProps {
    id: number,
    name: string
    changeHead: (newHead: number) => any,
    currentHead: number,
    theme: string;
    fontSize: number;
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
        if (this.props.theme === "light") {
            if (this.props.fontSize === 16) {
                if (this.props.id == this.props.currentHead) {
                    return (
                        <Breadcrumb.Item active style={styles.font16}>
                            {this.props.name}
                        </Breadcrumb.Item>
                    );
                } else {
                    return (
                        <Breadcrumb.Item onClick={this.onButtonClick} style={styles.font16}>
                            {this.props.name}
                        </Breadcrumb.Item>
                    );
                }
            } else if(this.props.fontSize === 24) {
                if (this.props.id == this.props.currentHead) {
                    return (
                        <Breadcrumb.Item active style={styles.font24}>
                            {this.props.name}
                        </Breadcrumb.Item>
                    );
                } else {
                    return (
                        <Breadcrumb.Item onClick={this.onButtonClick} style={styles.font24}>
                            {this.props.name}
                        </Breadcrumb.Item>
                    );
                }
            } else if(this.props.fontSize === 32) {
                if (this.props.id == this.props.currentHead) {
                    return (
                        <Breadcrumb.Item active style={styles.font32}>
                            {this.props.name}
                        </Breadcrumb.Item>
                    );
                } else {
                    return (
                        <Breadcrumb.Item onClick={this.onButtonClick} style={styles.font32}>
                            {this.props.name}
                        </Breadcrumb.Item>
                    );
                }
            } else {
                if (this.props.id == this.props.currentHead) {
                    return (
                        <Breadcrumb.Item active style={styles.font40}>
                            {this.props.name}
                        </Breadcrumb.Item>
                    );
                } else {
                    return (
                        <Breadcrumb.Item onClick={this.onButtonClick} style={styles.font40}>
                            {this.props.name}
                        </Breadcrumb.Item>
                    );
                }
            }
        } else {
            if (this.props.fontSize === 16) {
                if (this.props.id == this.props.currentHead) {
                    return (
                        <Breadcrumb.Item active style={styles.font16Dark}>
                            {this.props.name}
                        </Breadcrumb.Item>
                    );
                } else {
                    return (
                        <Breadcrumb.Item onClick={this.onButtonClick} style={styles.font16Dark}>
                            {this.props.name}
                        </Breadcrumb.Item>
                    );
                }
            } else if(this.props.fontSize === 24) {
                if (this.props.id == this.props.currentHead) {
                    return (
                        <Breadcrumb.Item active style={styles.font24Dark}>
                            {this.props.name}
                        </Breadcrumb.Item>
                    );
                } else {
                    return (
                        <Breadcrumb.Item onClick={this.onButtonClick} style={styles.font24Dark}>
                            {this.props.name}
                        </Breadcrumb.Item>
                    );
                }
            } else if(this.props.fontSize === 32) {
                if (this.props.id == this.props.currentHead) {
                    return (
                        <Breadcrumb.Item active style={styles.font32Dark}>
                            {this.props.name}
                        </Breadcrumb.Item>
                    );
                } else {
                    return (
                        <Breadcrumb.Item onClick={this.onButtonClick} style={styles.font32Dark}>
                            {this.props.name}
                        </Breadcrumb.Item>
                    );
                }
            } else {
                if (this.props.id == this.props.currentHead) {
                    return (
                        <Breadcrumb.Item active style={styles.font40Dark}>
                            {this.props.name}
                        </Breadcrumb.Item>
                    );
                } else {
                    return (
                        <Breadcrumb.Item onClick={this.onButtonClick} style={styles.font40Dark}>
                            {this.props.name}
                        </Breadcrumb.Item>
                    );
                }
            }

        }
    }
};
