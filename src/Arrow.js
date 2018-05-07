import React from 'react';
import DownArrow from 'material-ui/svg-icons/navigation/arrow-downward';

const Arrow = props => {
  const handleClick = () => {
    props.onArrowClick(props.stateName);
  };
  return (
    <DownArrow
      onClick={handleClick}
      style={{ color: 'white', marginTop: '10px' }}
    />
  );
};

export default Arrow;
