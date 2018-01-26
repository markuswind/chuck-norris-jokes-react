import React from 'react';
import PropTypes from 'prop-types';

import Joke from './../../../stores/jokes/models/Joke';
import JokeRowComponent from './../joke/JokeRowComponent';
import './JokeListComponent.css';

const JokeListComponent = (props) => {
  const { jokes } = props;
  const jokeItems = jokes.map(joke => {
    return (
      <JokeRowComponent key={joke.id} joke={joke} />
    );
  });

  return (
    <ul>{jokeItems}</ul>
  );
};

JokeListComponent.propTypes = {
  jokes: PropTypes.arrayOf(Joke),
};

JokeListComponent.defaultProps = {
  jokes: [],
};

export default JokeListComponent;
