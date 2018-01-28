import React from 'react';

import FavoriteJokes from './FavoriteJokes';
import RandomJokes from './RandomJokes';

import './Jokes.css';

const Jokes = () => (
  <div className="jokes">
    <FavoriteJokes />
    <RandomJokes />
  </div>
);

export default Jokes;
