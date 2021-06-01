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
            message: ">====="
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.activateLasers}>Activate Lasers</button>
                <h2>{this.state.message}</h2>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
