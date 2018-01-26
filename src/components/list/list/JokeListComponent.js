import React from 'react';
import PropTypes from 'prop-types';

import Joke from './../../../stores/jokes/models/Joke';
import JokeRowComponent from './../joke/JokeRowComponent';
import './JokeListComponent.css';

const JokeListComponent = (props) => {
  const { jokes, onClick, buttonIcon } = props;

  const jokeItems = jokes.map(joke => {
    return (
      <JokeRowComponent
        key={joke.id}
        joke={joke}
        onClick={() => { onClick(joke); }}
        buttonIcon={buttonIcon}
      />
    );
  });

  return (
    <ul>{jokeItems}</ul>
  );
};

JokeListComponent.propTypes = {
  jokes: PropTypes.arrayOf(Joke),
  onClick: PropTypes.func.isRequired,
  buttonIcon: PropTypes.string.isRequired,
};

JokeListComponent.defaultProps = {
  jokes: [],
};

export default JokeListComponent;
