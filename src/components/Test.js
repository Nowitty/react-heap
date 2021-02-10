import React, { Component } from "react";

import '../styles/App.css';

class Test extends Component {
    click() {
        let element = document.getElementById('test')
        element.setAttribute('color', 'red');
    }
    render() {
        const {text} = this.props;
        return (
            <>
                <div>{text}</div>
                <div onClick={ this.click() }>{text}</div>
            </>
        );
    }
}

export default Test;