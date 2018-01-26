import React, { Component } from 'react';
import logo from './../../assets/images/logo.svg';

import RandomJokesActions from './../../actions/RandomJokesActions';
import RandomJokesStore from './../../stores/jokes/RandomJokesStore';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      randomJokes: RandomJokesStore.getAllItems(),
    };

    this.onRandomJokeStoreUpdated = this.onRandomJokeStoreUpdated.bind(this);
  }

  componentWillMount() {
    RandomJokesStore.addChangeListener(this.onRandomJokeStoreUpdated);
  }

  componentDidMount() {
    RandomJokesActions.getRandomJokes({
      pageSize: 10,
    });
  }

  componentWillUnmount() {
    RandomJokesStore.removeChangeListener(this.onRandomJokeStoreUpdated);
  }

  onRandomJokeStoreUpdated() {
    this.setState({
      randomJokes: RandomJokesStore.getAllItems(),
    });
  }

  render() {
    console.log('randomJokes', this.state.randomJokes);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
