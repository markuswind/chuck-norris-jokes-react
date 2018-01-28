import React, { Component } from 'react';

import FavoriteJokesActions from './../../actions/jokes/FavoriteJokesActions';
import FavoriteJokesStore from './../../stores/jokes/FavoriteJokesStore';

import JokeListComponent from './../../components/jokes/JokeListComponent';

class FavoriteJokes extends Component {
  static onDeleteFavoriteJokeButtonClicked(joke) {
    FavoriteJokesActions.deleteFavoriteJoke({ id: joke.getId() });
  }

  static addRandomFavoriteJoke() {
    FavoriteJokesActions.addRandomFavoriteJoke();
  }

  constructor(props) {
    super(props);

    this.onFavoriteJokeStoreUpdated = this.onFavoriteJokeStoreUpdated.bind(this);
    this.addRandomFavoriteJokeTimer = null;

    this.state = {
      favoriteJokes: FavoriteJokesStore.getAllItems(),
      timerButtonTitle: 'Start adding favorites',
    };
  }

  componentWillMount() {
    FavoriteJokesStore.addChangeListener(this.onFavoriteJokeStoreUpdated);
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
      this.addRandomFavoriteJokeTimer = setInterval(() => {
        FavoriteJokes.addRandomFavoriteJoke();
      }, 5000);

      this.setState({
        timerButtonTitle: 'Stop timer',
      });
    }
  }

  clearAddRandomFavoriteTimer() {
    clearInterval(this.addRandomFavoriteJokeTimer);

    this.addRandomFavoriteJokeTimer = null;
    this.setState({
      timerButtonTitle: 'Start adding favorites',
    });
  }

  render() {
    const { timerButtonTitle, favoriteJokes } = this.state;

    return (
      <JokeListComponent
        title="Favorite jokes"
        buttonTitle={timerButtonTitle}
        rowButtonTitle="-"
        jokes={favoriteJokes}
        onRowClick={FavoriteJokes.onDeleteFavoriteJokeButtonClicked}
        onButtonClick={() => { this.onTimerButtonClicked(); }}
      />
    );
  }
}

export default FavoriteJokes;
