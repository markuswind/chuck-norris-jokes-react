import React, { Component } from 'react';

import FavoriteJokesActions from './../../actions/jokes/FavoriteJokesActions';
import FavoriteJokesStore from './../../stores/jokes/FavoriteJokesStore';

import JokeListComponent from './../../components/jokes/JokeListComponent';

class FavoriteJokes extends Component {
  constructor(props) {
    super(props);

    this.onFavoriteJokeStoreUpdated = this.onFavoriteJokeStoreUpdated.bind(this);
    this.addRandomFavoriteJokeTimer = null;

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
    if (this.addRandomFavoriteJokeTimer) {
      this.clearAddRandomFavoriteTimer();
    } else {
      this.addRandomFavoriteJokeTimer = setInterval(() => this.addRandomFavoriteJoke(), 5000);
      this.setState({
        buttonTitle: 'Stop timer',
      });
    }
  }

  onDeleteFavoriteJokeButtonClicked(joke) {
    FavoriteJokesActions.deleteFavoriteJoke({ id: joke.id });
  }

  addRandomFavoriteJoke() {
    FavoriteJokesActions.addRandomFavoriteJoke();
  }

  clearAddRandomFavoriteTimer() {
    clearInterval(this.addRandomFavoriteJokeTimer);

    this.addRandomFavoriteJokeTimer = null;
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
