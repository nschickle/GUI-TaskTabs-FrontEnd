import 'bootstrap/dist/css/bootstrap.min.css';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import * as React from "react";
import * as ReactDOM from "react-dom";

import { ProjectPage } from "./components/projectPage";


ReactDOM.render(
    <ProjectPage />,
    document.getElementById("mainpage")
);