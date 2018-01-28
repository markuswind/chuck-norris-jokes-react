import React from 'react';
import PropTypes from 'prop-types';

import './JokeListTitleComponent.css';

const JokeListTitleComponent = (props) => {
  const { title } = props;

  return (
    <div className="jokeListTitleWrapper">
      <h1 className="jokeListTitle">
        {title}
      </h1>
    </div>
  );
};

JokeListTitleComponent.propTypes = {
  title: PropTypes.string.isRequired,
};

export default JokeListTitleComponent;
