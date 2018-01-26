import React, { Component } from 'react';

import RandomJokesActions from './../../actions/jokes/RandomJokesActions';
import RandomJokesStore from './../../stores/jokes/RandomJokesStore';

import Title from './../../components/list/title/Title';

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
    console.log('randomJokes', this.state.randomJokes);
     return (
      <Title title="Random jokes" />
    );
  }
}

export default RandomJokes;
