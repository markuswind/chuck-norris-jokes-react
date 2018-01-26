import React from 'react';

import './Title.css';

const Title = (props) => {
  const { title } = props;
  return <h1 className="List-title">{title}</h1>;
};

export default Title;
