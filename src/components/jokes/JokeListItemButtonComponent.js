import React from 'react';
import PropTypes from 'prop-types';

import './JokeListItemButtonComponent.css';

const JokeListItemButtonComponent = (props) => {
  const { onClick, icon } = props;

  return (
    <span className={icon} onClick={onClick} />
  );
};

JokeListItemButtonComponent.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.string,
};

JokeListItemButtonComponent.defaultProps = {
  onClick: undefined,
  icon: 'icon-add',
};

export default JokeListItemButtonComponent;
