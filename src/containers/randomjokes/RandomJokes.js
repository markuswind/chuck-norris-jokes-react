import React, { Component } from 'react';

import RandomJokesActions from './../../actions/jokes/RandomJokesActions';
import RandomJokesStore from './../../stores/jokes/RandomJokesStore';

import TitleComponent from './../../components/list/title/TitleComponent';
import JokeListComponent from './../../components/list/list/JokeListComponent';

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

  componentDidMount() {
    RandomJokesActions.getRandomJokes({
      pageSize: 10,
    });
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
      <div className="RandomJokes">
        <TitleComponent title="Random jokes" />
        <JokeListComponent jokes={randomJokes} />
      </div>
    );
  }
}

export default RandomJokes;
