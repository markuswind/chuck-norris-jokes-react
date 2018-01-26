import React from 'react';
import PropTypes from 'prop-types';

import Joke from './../../../stores/jokes/models/Joke';
import './JokeRowComponent.css';

const JokeRowComponent = (props) => {
  const { joke } = props;
  return <li>{joke.joke}</li>;
};

JokeRowComponent.propTypes = {
  joke: PropTypes.instanceOf(Joke).isRequired,
};

export default JokeRowComponent;
