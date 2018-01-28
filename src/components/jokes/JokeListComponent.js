import React from 'react';
import PropTypes from 'prop-types';

// import Joke from './../../stores/jokes/models/Joke';

import ButtonComponent from './../general/button/ButtonComponent';
import JokeListTitleComponent from './JokeListTitleComponent';
import JokeListItemComponent from './JokeListItemComponent';

import './JokeListComponent.css';

const JokeListComponent = (props) => {
  const { onRowClick } = props;

  const jokeItems = props.jokes.map(joke => {
    return (
      <JokeListItemComponent
        key={joke.id}
        joke={joke}
        onClick={() => { onRowClick(joke); }}
        buttonTitle={props.rowButtonTitle}
      />
    );
  });

  return (
    <div className="jokeListWrapper">
      <JokeListTitleComponent title={props.title} />
      <ButtonComponent
        onClick={() => { props.onButtonClick(); }}
        title={props.buttonTitle}
      />
      <ul className="jokeList">{jokeItems}</ul>
    </div>
  );
};

JokeListComponent.propTypes = {
  title: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  rowButtonTitle: PropTypes.string.isRequired,
  jokes: PropTypes.array, // PropTypes.arrayOf(PropTypes.instanceof(Joke)),
  onRowClick: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

JokeListComponent.defaultProps = {
  jokes: [],
};

export default JokeListComponent;
