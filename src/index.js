import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Component} from "react/cjs/react.production.min";
//import App from './App';

let thisWeapon = {
    name : 'Wand',
    atkPlus : 5
}

let thisArmor = {
    name : 'Cloak',
    defPlus : 2
}

let thisPlayer = {
    name : 'Beac',
    currentHP : 100,
    maxHP : 100,
    atk : 10,
    def : 10,
    weapon : thisWeapon,
    armor: thisArmor
}

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {message: ">", player: thisPlayer};
    }

    activateLasers = () => {
        this.setState({
            message: ">=====",
        });
        this.state.player.currentHP = this.state.player.currentHP - 5;
    }

    deactivateLasers = () => {
        this.setState({
            message: ">"
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.activateLasers}>Activate Lasers {this.state.player.currentHP}</button>
                <button onClick={this.deactivateLasers}>Deactivate Lasers</button>
                <h2>{this.state.message}</h2>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
