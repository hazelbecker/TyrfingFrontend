import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Component} from "react/cjs/react.production.min";
//import App from './App';

let thisPlayer = {
    name: 'Beac'
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {message: ">", player: thisPlayer};
    }

    activateLasers = () => {
        this.setState({
            message: ">====="
        });
    }

    deactivateLasers = () => {
        this.setState({
            message: ">"
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.activateLasers}>Activate Lasers {this.state.player.name}</button>
                <button onClick={this.deactivateLasers}>Deactivate Lasers</button>
                <h2>{this.state.message}</h2>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
