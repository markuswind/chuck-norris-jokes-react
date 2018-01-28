import React from 'react';
import PropTypes from 'prop-types';

import Joke from './../../stores/jokes/models/Joke';
import ButtonComponent from './../general/button/ButtonComponent';

import './JokeListItemComponent.css';

const JokeListItemComponent = (props) => {
  const { joke, onClick, buttonTitle } = props;

  return (
    <li>
      <div className="jokeWrapper">
        <div className="jokeContent">
          <span className="jokeText">{joke.joke}</span>
          <ButtonComponent
            onClick={onClick}
            title={buttonTitle}
          />
        </div>
      </div>
    </li>
  );
};

JokeListItemComponent.propTypes = {
  joke: PropTypes.instanceOf(Joke).isRequired,
  onClick: PropTypes.func.isRequired,
  buttonTitle: PropTypes.string.isRequired,
};

export default JokeListItemComponent;
