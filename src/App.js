import React, { Component } from 'react';
import GameBoardContainer from './components/GameBoardContainer';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <GameBoardContainer />
            </div>
        );
    }
}

export default App;
