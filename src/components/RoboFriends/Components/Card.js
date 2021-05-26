import React from 'react';

const Card = props => {
  return (
    <div
      className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"
      key={props.id}
      onDoubleClick={() => props.deleteCard (props.id)}
    >
      <img alt="" src={`https://robohash.org/${props.id}?200x200`} />
      <h1 className="f2">{props.name}</h1>
      <h2 className="f3">{props.email}</h2>
      <h2 className="f3">{props.username}</h2>
    </div>
  );
};

export default Card;
