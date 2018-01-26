import React, { Component } from 'react';

import FavoriteJokesActions from './../../actions/jokes/FavoriteJokesActions';
import RandomJokesActions from './../../actions/jokes/RandomJokesActions';
import RandomJokesStore from './../../stores/jokes/RandomJokesStore';

import JokeListComponent from './../../components/jokes/JokeListComponent';

class RandomJokes extends Component {
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

  onRefreshButtonClicked() {
    RandomJokesActions.getRandomJokes({
      pageSize: 10,
    });
  }

  onAddToFavoriteButtonClicked(joke) {
    FavoriteJokesActions.addFavoriteJoke({ joke });
  }

  render() {
    const state = this.state;

    return (
      <JokeListComponent
        jokes={state.randomJokes}
        onRowClick={this.onAddToFavoriteButtonClicked}
        rowButtonIcon="icon-add"
        title="Random jokes"
        onButtonClick={this.onRefreshButtonClicked}
        buttonTitle="Refresh"
        buttonIcon="icon-refresh"
      />
    );
  }
}

export default RandomJokes;
