import React, { Component } from 'react';

import FavoriteJokesActions from './../../actions/jokes/FavoriteJokesActions';
import FavoriteJokesStore from './../../stores/jokes/FavoriteJokesStore';

import TitleComponent from './../../components/list/title/TitleComponent';

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
    console.log('favoriteJokes', this.state.favoriteJokes);
    return (
      <TitleComponent title="Favorite jokes" />
    );
  }
}

export default FavoriteJokes;
