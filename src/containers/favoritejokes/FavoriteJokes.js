import React, { Component } from 'react';

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

  render() {
    const { favoriteJokes } = this.state;

    return (
      <div className="FavoriteJokes">
        <TitleComponent title="Favorite jokes" />
        <JokeListComponent jokes={favoriteJokes} />
      </div>
    );
  }
}

export default FavoriteJokes;
