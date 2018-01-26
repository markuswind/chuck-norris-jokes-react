import React, { Component } from 'react';

import ButtonComponent from './../../components/general/button/ButtonComponent';

import FavoriteJokesActions from './../../actions/jokes/FavoriteJokesActions';
import RandomJokesActions from './../../actions/jokes/RandomJokesActions';
import RandomJokesStore from './../../stores/jokes/RandomJokesStore';

import JokeListTitleComponent from './../../components/jokes/JokeListTitleComponent';
import JokeListComponent from './../../components/jokes/JokeListComponent';

import './RandomJokes.css';

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
    const { randomJokes } = this.state;

    return (
      <div className="RandomJokes">
        <JokeListTitleComponent title="Random jokes" />
        <ButtonComponent
          onClick={this.onRefreshButtonClicked}
          title="Refresh random jokes"
          icon="icon-refresh"
        />
        <JokeListComponent
          jokes={randomJokes}
          onClick={this.onAddToFavoriteButtonClicked}
          buttonIcon="icon-add"
        />
      </div>
    );
  }
}

export default RandomJokes;
