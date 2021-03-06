import React from 'react';
import PropTypes from 'prop-types';

import Joke from './../../stores/jokes/models/Joke';

import ButtonComponent from './../general/button/ButtonComponent';
import JokeListTitleComponent from './JokeListTitleComponent';
import JokeListItemComponent from './JokeListItemComponent';

import './JokeListComponent.css';

const JokeListComponent = (props) => {
  const { onListItemClick } = props;

  const jokeListItemComponents = props.jokes.map(joke => (
    <JokeListItemComponent
      key={joke.getId()}
      joke={joke}
      onClick={() => { onListItemClick(joke); }}
      buttonTitle={props.listItemButtonTitle}
    />
  ));

  return (
    <div className="jokeListWrapper">
      <JokeListTitleComponent title={props.title} />
      <ButtonComponent
        onClick={() => { props.onButtonClick(); }}
        title={props.buttonTitle}
      />
      <ul className="jokeList">{jokeListItemComponents}</ul>
    </div>
  );
};

JokeListComponent.propTypes = {
  title: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  listItemButtonTitle: PropTypes.string.isRequired,
  jokes: PropTypes.arrayOf(PropTypes.instanceOf(Joke)),
  onListItemClick: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

JokeListComponent.defaultProps = {
  jokes: [],
};

export default JokeListComponent;
