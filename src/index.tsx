import * as React from "react";
import * as ReactDOM from "react-dom";
// local imports
import "./index.css";
import { Hello } from "./components/hello/hello";

ReactDOM.render(
    <div className="container">
        <Hello compiler="Typescript" framework="React JS" />
    </div>,
    document.getElementById("example")
);