import React from 'react';
import PropTypes from 'prop-types';

import Joke from './../../stores/jokes/models/Joke';
import ButtonComponent from './../general/button/ButtonComponent';

import './JokeListItemComponent.css';

const JokeListItemComponent = (props) => {
  const { joke, onClick, buttonTitle } = props;

  return (
    <li className="jokeListItemWrapper">
      <div className="jokeListItemContent">
        <span className="jokeListItemText">{joke.getJoke()}</span>
        <ButtonComponent
          onClick={onClick}
          title={buttonTitle}
        />
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
