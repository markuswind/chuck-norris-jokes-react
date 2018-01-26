import React from 'react';
import logo from './../../assets/images/logo.svg';

import FavoriteJokes from './../favoritejokes/FavoriteJokes';
import RandomJokes from './../randomjokes/RandomJokes';

import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <FavoriteJokes />
    <RandomJokes />
  </div>
);

export default App;
