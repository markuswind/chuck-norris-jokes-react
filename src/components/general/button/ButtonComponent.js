import React from 'react';
import PropTypes from 'prop-types';

import './ButtonComponent.css';

const ButtonComponent = (props) => {
  const { onClick, title } = props;

  return (
    <div className="buttonWrapper">
      <button className="generalButton" onClick={onClick}>
        <span className="button-title">{title}</span>
      </button>
    </div>
  );
};

ButtonComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default ButtonComponent;
