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
let room1 = new Room(1, null, thisWeapon);
let room2 = new Room(2, thisEnemy, thisArmor);
let battleFlag = false;

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {message: "Welcome! You see a weapon on the floor. Press A to pick it up."};
    }

    buttonA = () => {
        if(thisPlayer.roomID == 1 && room1.loot != null){
            thisPlayer.weapon = room1.loot;
            room1.loot = null;
            this.setState({
                message: "You picked it up! +" + thisWeapon.atkmod,
            });
        }else if(thisPlayer.roomID == 1){
            this.setState({
                message: "Press B to advance to the next room. (You can do this at any (non-battle) time!).",
            });
        }else if(thisPlayer.roomID == 2){
            this.setState({
                message: "You are in the second room!",
            });
        }
        //this.state.player.currentHP = this.state.player.currentHP - 5;
    }

    buttonB = () => {
        if(!battleFlag){
            thisPlayer.roomID = thisPlayer.roomID + 1;
            this.setState({
                message: "You advance to the next room. Press A.",
            });
        }
    }

    render() {
        return (
            <div>
                <button onClick={this.buttonA}>A</button>
                <button onClick={this.buttonB}>B</button>
                <h2>{this.state.message}</h2>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
