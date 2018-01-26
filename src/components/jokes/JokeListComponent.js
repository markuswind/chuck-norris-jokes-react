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
  title: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  buttonIcon: PropTypes.oneOf(['icon-timer', 'icon-refresh']).isRequired,
  rowButtonIcon: PropTypes.oneOf(['icon-add', 'icon-remove']).isRequired,
  jokes: PropTypes.array, // PropTypes.arrayOf(PropTypes.instanceof(Joke)),
  onRowClick: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

JokeListComponent.defaultProps = {
  jokes: [],
};

export default JokeListComponent;
