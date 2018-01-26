import React from 'react';
import PropTypes from 'prop-types';

import Joke from './../../stores/jokes/models/Joke';

import ButtonComponent from './../general/button/ButtonComponent';
import JokeListTitleComponent from './JokeListTitleComponent';
import JokeRowComponent from './JokeRowComponent';

import './JokeListComponent.css';

const JokeListComponent = (props) => {
  const { onRowClick } = props;

  const jokeItems = props.jokes.map(joke => {
    return (
      <JokeRowComponent
        key={joke.id}
        joke={joke}
        onClick={() => { onRowClick(joke); }}
        buttonIcon={props.rowButtonIcon}
      />
    );
  });

  return (
    <div className="JokeList">
      <JokeListTitleComponent title={props.title} />
      <ButtonComponent
        onClick={() => { props.onButtonClick(); }}
        title={props.buttonTitle}
        icon={props.buttonIcon}
      />
      <ul>{jokeItems}</ul>
    </div>
  );
};

JokeListComponent.propTypes = {
  jokes: PropTypes.arrayOf(Joke),
  onRowClick: PropTypes.func.isRequired,
  rowButtonIcon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  buttonIcon: PropTypes.string.isRequired,
};

JokeListComponent.defaultProps = {
  jokes: [],
};

export default JokeListComponent;
