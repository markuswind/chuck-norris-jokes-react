import React, { Component } from 'react';

import ButtonComponent from './../../components/button/ButtonComponent';

import FavoriteJokesActions from './../../actions/jokes/FavoriteJokesActions';
import FavoriteJokesStore from './../../stores/jokes/FavoriteJokesStore';

import TitleComponent from './../../components/list/title/TitleComponent';
import JokeListComponent from './../../components/list/list/JokeListComponent';

import './FavoriteJokes.css';

class FavoriteJokes extends Component {
  constructor(props) {
    super(props);

    this.onFavoriteJokeStoreUpdated = this.onFavoriteJokeStoreUpdated.bind(this);
    this.addRandomFavoriteTimer = null;

    this.state = {
      favoriteJokes: FavoriteJokesStore.getAllItems(),
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
  }

  render() {
    const { favoriteJokes } = this.state;

    return (
      <div className="FavoriteJokes">
        <TitleComponent title="Favorite jokes" />
        <ButtonComponent
          onClick={() => { this.onTimerButtonClicked(); }}
          title="Start timer"
          icon="icon-timer"
        />
        <JokeListComponent
          jokes={favoriteJokes}
          onClick={this.onDeleteFavoriteJokeButtonClicked}
          buttonIcon="icon-close"
        />
      </div>
    );
  }
}

export default FavoriteJokes;
