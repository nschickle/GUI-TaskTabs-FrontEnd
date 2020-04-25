import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { MainPage } from "./components/mainPage";

ReactDOM.render(
    <MainPage  projectPageUp={false} theme="light" font="verdana" fontSize = {16} viewPage="loading"/>,
    document.getElementById("mainpage")
);
