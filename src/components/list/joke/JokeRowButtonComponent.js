import React from 'react';
import PropTypes from 'prop-types';

import './JokeRowButtonComponent.css';

const JokeRowButtonComponent = (props) => {
  const { onClick, icon } = props;

  return (
    <span className={icon} onClick={onClick} />
  );
};

JokeRowButtonComponent.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.string,
};

JokeRowButtonComponent.defaultProps = {
  onClick: undefined,
  icon: 'icon-add',
};

export default JokeRowButtonComponent;
