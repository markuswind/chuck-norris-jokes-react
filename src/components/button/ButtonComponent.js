import React from 'react';
import PropTypes from 'prop-types';

import './ButtonComponent.css';

const ButtonComponent = (props) => {
  const { onClick, title, icon } = props;

  return (
    <button onClick={onClick}>
      <span className={icon} />
      {title}
    </button>
  );
};

ButtonComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default ButtonComponent;
