import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import Test from "./components/Test.js";


ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Test text="lala super props" />, document.getElementById("test"));