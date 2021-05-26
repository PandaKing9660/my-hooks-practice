import React from 'react';
import './Box.css';

class Box extends React.Component {
  render () {
    return (
      <div className="Box" onClick={this.props.onClick}>
        {this.props.number}
      </div>
    );
  }
}

export default Box;
