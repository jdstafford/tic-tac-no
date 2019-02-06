import React, { Component } from 'react';
import Header from './components/Header';
import GameBoardContainer from './components/GameBoardContainer';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <GameBoardContainer />
            </div>
        );
    }
}

export default App;
