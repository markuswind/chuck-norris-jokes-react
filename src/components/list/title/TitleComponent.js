import React from 'react';
import PropTypes from 'prop-types';

import './TitleComponent.css';

const TitleComponent = (props) => {
  const { title } = props;
  return <h1>{title}</h1>;
};

TitleComponent.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TitleComponent;
