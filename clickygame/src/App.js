import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header/header.js';
import Prompt from './components/Prompt/prompt.js';
import Game from './components/Game/game.js';

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Header />
        <Prompt />
        <Game />
      </div>
    );
  }
}

export default App;
