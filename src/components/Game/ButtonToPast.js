import React from 'react';

const ButtonToPast = props => {
  return (
    <button onClick={props.onClick (props.index)} value={`${props.index}`}>
      {`Go to Step : ${props.index}`}
    </button>
  );
};

export default ButtonToPast;
