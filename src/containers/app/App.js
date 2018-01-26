import React, { Component } from 'react';
import logo from './../../assets/images/logo.svg';

import FavoriteJokesActions from './../../actions/FavoriteJokesActions';
import FavoriteJokesStore from './../../stores/jokes/FavoriteJokesStore';

import RandomJokesActions from './../../actions/RandomJokesActions';
import RandomJokesStore from './../../stores/jokes/RandomJokesStore';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favoriteJokes: FavoriteJokesStore.getAllItems(),
      randomJokes: RandomJokesStore.getAllItems(),
    };

    this.onFavoriteJokeStoreUpdated = this.onFavoriteJokeStoreUpdated.bind(this);
    this.onRandomJokeStoreUpdated = this.onRandomJokeStoreUpdated.bind(this);
  }

  componentWillMount() {
    FavoriteJokesStore.addChangeListener(this.onFavoriteJokeStoreUpdated);
    RandomJokesStore.addChangeListener(this.onRandomJokeStoreUpdated);
  }

  componentDidMount() {
    FavoriteJokesActions.addRandomFavoriteJoke();

    RandomJokesActions.getRandomJokes({
      pageSize: 10,
    });
  }

  componentWillUnmount() {
    FavoriteJokesStore.removeChangeListener(this.onFavoriteJokeStoreUpdated);
    RandomJokesStore.removeChangeListener(this.onRandomJokeStoreUpdated);
  }

  onFavoriteJokeStoreUpdated() {
    this.setState({
      favoriteJokes: FavoriteJokesStore.getAllItems(),
    });
  }

  onRandomJokeStoreUpdated() {
    this.setState({
      randomJokes: RandomJokesStore.getAllItems(),
    });
  }

  render() {
    console.log('randomJokes', this.state.randomJokes);
    console.log('favoriteJokes', this.state.favoriteJokes);

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
