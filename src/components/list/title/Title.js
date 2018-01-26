import React from 'react';
import PropTypes from 'prop-types';

import './Title.css';

const Title = (props) => {
  const { title } = props;
  return <h1 className="List-title">{title}</h1>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
