import React from 'react';

import Header from './../../components/header/Header';
import FavoriteJokes from './../favoritejokes/FavoriteJokes';
import RandomJokes from './../randomjokes/RandomJokes';

import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <div className="App-content">
      <FavoriteJokes />
      <RandomJokes />
    </div>
  </div>
);

export default App;
