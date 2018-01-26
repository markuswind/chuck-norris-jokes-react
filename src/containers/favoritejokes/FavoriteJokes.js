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
  }

  onFavoriteJokeStoreUpdated() {
    this.setState({
      favoriteJokes: FavoriteJokesStore.getAllItems(),
    });
  }

  onTimerButtonClicked() {
    console.log('TODO: - implement onTimerButtonClicked');
  }

  onDeleteFavoriteJokeButtonClicked(joke) {
    FavoriteJokesActions.deleteFavoriteJoke({ id: joke.id });
  }

  render() {
    const { favoriteJokes } = this.state;

    return (
      <div className="FavoriteJokes">
        <TitleComponent title="Favorite jokes" />
        <ButtonComponent
          onClick={this.onTimerButtonClicked}
          title="Add random jokes to favorites"
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
