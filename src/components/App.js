import React, { Component } from "react";

import '../styles/App.css';
import Test from "./Test";

class App extends Component {
    render() {
        return (
            <div>
                <h1>Kuga React Project</h1>
                <Test text="FROM APPP"/>
            </div>
        );
    }
}

export default App;