import React from 'react';
import PropTypes from 'prop-types';

import Joke from './../../stores/jokes/models/Joke';
import JokeListItemButtonComponent from './JokeListItemButtonComponent';

import './JokeListItemComponent.css';

const JokeListItemComponent = (props) => {
  const { joke, onClick, buttonIcon } = props;
  return (
    <li>
      <span className="joke-text">{joke.joke}</span>
      <JokeListItemButtonComponent
        onClick={onClick}
        icon={buttonIcon}
      />
    </li>
  );
};

JokeListItemComponent.propTypes = {
  joke: PropTypes.instanceOf(Joke).isRequired,
  onClick: PropTypes.func.isRequired,
  buttonIcon: PropTypes.string.isRequired,
};

export default JokeListItemComponent;
