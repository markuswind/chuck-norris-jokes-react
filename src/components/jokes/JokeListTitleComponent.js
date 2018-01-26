import React from 'react';
import PropTypes from 'prop-types';

import './JokeListTitleComponent.css';

const JokeListTitleComponent = (props) => {
  const { title } = props;
  return <h1>{title}</h1>;
};

JokeListTitleComponent.propTypes = {
  title: PropTypes.string.isRequired,
};

export default JokeListTitleComponent;
