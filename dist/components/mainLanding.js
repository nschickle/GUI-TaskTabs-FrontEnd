"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Container_1 = require("react-bootstrap/Container");
const Row_1 = require("react-bootstrap/Row");
const styles = {
    titleIntroduction: {
        fontSize: 96,
        margin: "auto",
        backgroundColor: "#232931",
        color: "#f8f9e8"
    },
    label: {
        fontSize: 24,
        margin: "auto",
        marginBottom: 15,
    },
    center: {
        marginTop: 10,
        margin: "auto"
    },
    gButton: {
        borderStyle: "none"
    },
    img: {
        margin: 20
    }
};
class MainLanding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            head: undefined
        };
    }
    render() {
        return (React.createElement(Container_1.default, { fluid: true, "no-gutters": true },
            React.createElement(Row_1.default, { style: styles.titleIntroduction },
                React.createElement("h1", { style: styles.center },
                    React.createElement("img", { src: require("../img/logo.png"), width: "200", height: "200", className: "d-inline-block", style: styles.img, alt: "TaskTabs Logo" }),
                    "TaskTabs")),
            React.createElement(Row_1.default, null,
                React.createElement("p", { style: styles.label }, "Welcome, here are your Projects!")),
            React.createElement(Row_1.default, { noGutters: true })));
    }
}
exports.MainLanding = MainLanding;
;
//# sourceMappingURL=mainLanding.js.map