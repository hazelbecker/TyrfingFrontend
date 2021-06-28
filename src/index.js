import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Component} from "react/cjs/react.production.min";
import {ACharacter} from "./character";
import {Equipment} from "./equipment";
import {Room} from "./room";

let thisPlayer = new ACharacter("player", 50, 50, 5, 1, null, null, 1);
let thisEnemy = new ACharacter("uwu", 25, 25, 5, 1, null, null, 2);
let thisWeapon = new Equipment(5, 0);
let thisArmor = new Equipment(0, 2);
let room1 = new Room(1, null);
let room2 = new Room(2, thisEnemy);

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {message: ">"};
    }

    buttonA = () => {
        this.setState({
            message: ">=====",
        });
        //this.state.player.currentHP = this.state.player.currentHP - 5;
    }

    render() {
        return (
            <div>
                <button onClick={this.buttonA}>A</button>
                <h2>{this.state.message}</h2>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
