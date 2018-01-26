import React, { Component } from 'react';

import FavoriteJokesActions from './../../actions/jokes/FavoriteJokesActions';
import FavoriteJokesStore from './../../stores/jokes/FavoriteJokesStore';

import JokeListComponent from './../../components/jokes/JokeListComponent';

class FavoriteJokes extends Component {
  constructor(props) {
    super(props);

    this.onFavoriteJokeStoreUpdated = this.onFavoriteJokeStoreUpdated.bind(this);
    this.addRandomFavoriteTimer = null;

    this.state = {
      favoriteJokes: FavoriteJokesStore.getAllItems(),
      buttonTitle: 'Start timer',
    };
  }

  componentWillMount() {
    FavoriteJokesStore.addChangeListener(this.onFavoriteJokeStoreUpdated);
  }

  componentDidMount() {
    FavoriteJokesActions.addRandomFavoriteJoke();
  }

  componentWillUnmount() {
    FavoriteJokesStore.removeChangeListener(this.onFavoriteJokeStoreUpdated);
    this.clearAddRandomFavoriteTimer();
  }

  onFavoriteJokeStoreUpdated() {
    this.setState({
      favoriteJokes: FavoriteJokesStore.getAllItems(),
    });
  }

  onTimerButtonClicked() {
    if (this.addRandomFavoriteTimer) {
      this.clearAddRandomFavoriteTimer();
    } else {
      this.addRandomFavoriteTimer = setInterval(() => this.addRandomFavorite(), 5000);
      this.setState({
        buttonTitle: 'Stop timer',
      });
    }
  }

  onDeleteFavoriteJokeButtonClicked(joke) {
    FavoriteJokesActions.deleteFavoriteJoke({ id: joke.id });
  }

  addRandomFavorite() {
    FavoriteJokesActions.addRandomFavoriteJoke();
  }

  clearAddRandomFavoriteTimer() {
    clearInterval(this.addRandomFavoriteTimer);

    this.addRandomFavoriteTimer = null;
    this.setState({
      buttonTitle: 'Start timer',
    });
  }

  render() {
    const state = this.state;

    return (
      <JokeListComponent
        title="Favorite jokes"
        buttonTitle={state.buttonTitle}
        buttonIcon="icon-timer"
        rowButtonIcon="icon-remove"
        jokes={state.favoriteJokes}
        onRowClick={this.onDeleteFavoriteJokeButtonClicked}
        onButtonClick={() => { this.onTimerButtonClicked(); }}
      />
    );
  }
}

export default FavoriteJokes;
