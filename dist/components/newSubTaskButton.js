"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Container_1 = require("react-bootstrap/Container");
const Row_1 = require("react-bootstrap/Row");
const Button_1 = require("react-bootstrap/Button");
const userHeaderHttpRequest_1 = require("./userHeaderHttpRequest");
const retryableFetch_1 = require("./retryableFetch");
const styles = {
    button16: {
        width: window.innerWidth,
        height: 50,
        fontSize: 16
    },
    button24: {
        width: window.innerWidth,
        height: 75,
        fontSize: 24
    },
    button32: {
        width: window.innerWidth,
        height: 100,
        fontSize: 32
    },
    button40: {
        width: window.innerWidth,
        height: 125,
        fontSize: 40
    }
};
class NewSubTaskButton extends React.Component {
    constructor(props) {
        super(props);
        this.createNewSubTask = () => {
            // TODO
            // should be user from google oauth
            const newSubTask = { owner: this.props.userInfo.email, parentId: this.props.head, projectId: this.props.projectId, title: "New task", description: "", notes: "", assignedTo: null, status: "Active", progress: 0 };
            const request = new userHeaderHttpRequest_1.UserHeaderHttpRequest("/api/tasks", this.props.userInfo, { 'Content-Type': 'application/json' });
            retryableFetch_1.RetryableFetch.fetch_retry(request, {
                method: 'POST',
                mode: 'cors',
                body: JSON.stringify(newSubTask)
            }).then((response) => response.json())
                .then((data) => {
                // This will refresh the page with the new task as the current head.
                this.props.changeHead(data._id);
            })
                .catch((error) => {
                console.error('Error:', error);
            });
        };
    }
    render() {
        if (this.props.fontSize === 16) {
            if (this.props.theme == "light") {
                return (React.createElement(Container_1.default, { fluid: true },
                    React.createElement(Row_1.default, null,
                        React.createElement(Button_1.default, { style: styles.button16, size: "lg", variant: "outline-primary", onClick: this.createNewSubTask }, " + New Task "))));
            }
            else {
                return (React.createElement(Container_1.default, { fluid: true },
                    React.createElement(Row_1.default, null,
                        React.createElement(Button_1.default, { style: styles.button16, size: "lg", variant: "primary", onClick: this.createNewSubTask }, " + New Task "))));
            }
        }
        else if (this.props.fontSize === 24) {
            if (this.props.theme == "light") {
                return (React.createElement(Container_1.default, { fluid: true },
                    React.createElement(Row_1.default, null,
                        React.createElement(Button_1.default, { style: styles.button24, size: "lg", variant: "outline-primary", onClick: this.createNewSubTask }, " + New Task "))));
            }
            else {
                return (React.createElement(Container_1.default, { fluid: true },
                    React.createElement(Row_1.default, null,
                        React.createElement(Button_1.default, { style: styles.button24, size: "lg", variant: "primary", onClick: this.createNewSubTask }, " + New Task "))));
            }
        }
        else if (this.props.fontSize === 32) {
            if (this.props.theme == "light") {
                return (React.createElement(Container_1.default, { fluid: true },
                    React.createElement(Row_1.default, null,
                        React.createElement(Button_1.default, { style: styles.button32, size: "lg", variant: "outline-primary", onClick: this.createNewSubTask }, " + New Task "))));
            }
            else {
                return (React.createElement(Container_1.default, { fluid: true },
                    React.createElement(Row_1.default, null,
                        React.createElement(Button_1.default, { style: styles.button32, size: "lg", variant: "primary", onClick: this.createNewSubTask }, " + New Task "))));
            }
        }
        else {
            if (this.props.theme == "light") {
                return (React.createElement(Container_1.default, { fluid: true },
                    React.createElement(Row_1.default, null,
                        React.createElement(Button_1.default, { style: styles.button40, size: "lg", variant: "outline-primary", onClick: this.createNewSubTask }, " + New Task "))));
            }
            else {
                return (React.createElement(Container_1.default, { fluid: true },
                    React.createElement(Row_1.default, null,
                        React.createElement(Button_1.default, { style: styles.button40, size: "lg", variant: "primary", onClick: this.createNewSubTask }, " + New Task "))));
            }
        }
    }
}
exports.NewSubTaskButton = NewSubTaskButton;
//# sourceMappingURL=newSubTaskButton.js.map