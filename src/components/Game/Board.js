import React, {Component} from 'react';
import Box from './Box.js';
import './Box.css';

class Board extends Component {
  render () {
    const winner = calculateWinner (this.props.boxStates);

    return (
      <div>
        {this.props.player === 'DRAW'
          ? <h1>DRAW</h1>
          : winner === null
              ? <h1>Next Player : {this.props.player}</h1>
              : <h1>
                  Winner Found : {winner}
                </h1>}
        <div className="Board">
          <div>
            <div className="row">
              <Box
                number={this.props.boxStates[0]}
                onClick={() => this.props.togglePlayer (0)}
              />
              <Box
                number={this.props.boxStates[1]}
                onClick={() => this.props.togglePlayer (1)}
              />
              <Box
                number={this.props.boxStates[2]}
                onClick={() => this.props.togglePlayer (2)}
              />
            </div>
            <div className="row">
              <Box
                number={this.props.boxStates[3]}
                onClick={() => this.props.togglePlayer (3)}
              />
              <Box
                number={this.props.boxStates[4]}
                onClick={() => this.props.togglePlayer (4)}
              />
              <Box
                number={this.props.boxStates[5]}
                onClick={() => this.props.togglePlayer (5)}
              />
            </div>
            <div className="row">
              <Box
                number={this.props.boxStates[6]}
                onClick={() => this.props.togglePlayer (6)}
              />
              <Box
                number={this.props.boxStates[7]}
                onClick={() => this.props.togglePlayer (7)}
              />
              <Box
                number={this.props.boxStates[8]}
                onClick={() => this.props.togglePlayer (8)}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function calculateWinner (squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

export default Board;
