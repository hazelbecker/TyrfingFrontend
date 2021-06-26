import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Component} from "react/cjs/react.production.min";
//import App from './App';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {message: ">"};
    }

    activateLasers = () => {
        this.setState({
            message: ">=====",
        });
        //this.state.player.currentHP = this.state.player.currentHP - 5;
    }

    deactivateLasers = () => {
        this.setState({
            message: ">"
        });
        //this.state.player.currentHP = this.state.player.currentHP + 5;
    } 

    render() {
        return (
            <div>
                <button onClick={this.activateLasers}>Activate Lasers </button>
                <button onClick={this.deactivateLasers}>Deactivate Lasers</button>
                <h2>{this.state.message}</h2>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
