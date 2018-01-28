import React from 'react';

import Header from './../../components/header/Header';
import Jokes from './../jokes/Jokes';

import './App.css';

const App = () => (
  <div className="app">
    <Header />
    <Jokes />
  </div>
);

export default App;
