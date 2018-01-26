import React from 'react';
import PropTypes from 'prop-types';

import Joke from './../../../stores/jokes/models/Joke';
import JokeRowButtonComponent from './JokeRowButtonComponent';

import './JokeRowComponent.css';

const JokeRowComponent = (props) => {
  const { joke, onClick, buttonIcon } = props;
  return (
    <li>
      {joke.joke}
      <JokeRowButtonComponent
        onClick={onClick}
        icon={buttonIcon}
      />
    </li>
  );
};

JokeRowComponent.propTypes = {
  joke: PropTypes.instanceOf(Joke).isRequired,
  onClick: PropTypes.func.isRequired,
  buttonIcon: PropTypes.string.isRequired,
};

export default JokeRowComponent;
