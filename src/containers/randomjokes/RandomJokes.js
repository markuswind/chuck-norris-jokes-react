import React, { Component } from 'react';

import FavoriteJokesActions from './../../actions/jokes/FavoriteJokesActions';
import RandomJokesActions from './../../actions/jokes/RandomJokesActions';
import RandomJokesStore from './../../stores/jokes/RandomJokesStore';

import JokeListComponent from './../../components/jokes/JokeListComponent';

class RandomJokes extends Component {
  static onRefreshButtonClicked() {
    RandomJokesActions.getRandomJokes({
      pageSize: 10,
    });
  }

  static onAddToFavoriteButtonClicked(joke) {
    FavoriteJokesActions.addFavoriteJoke({ joke });
  }

  constructor(props) {
    super(props);

    this.onRandomJokeStoreUpdated = this.onRandomJokeStoreUpdated.bind(this);
    this.state = {
      randomJokes: RandomJokesStore.getAllItems(),
    };
  }

  componentWillMount() {
    RandomJokesStore.addChangeListener(this.onRandomJokeStoreUpdated);
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
    const { randomJokes } = this.state;

    return (
      <JokeListComponent
        title="Random jokes"
        buttonTitle="Refresh"
        rowButtonTitle="+"
        jokes={randomJokes}
        onRowClick={RandomJokes.onAddToFavoriteButtonClicked}
        onButtonClick={RandomJokes.onRefreshButtonClicked}
      />
    );
  }
}

export default RandomJokes;
