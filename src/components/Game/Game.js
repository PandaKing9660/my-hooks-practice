import React, {Component} from 'react';
import Board from './Board';
import ButtonToPast from './ButtonToPast';

import './Box.css';

class Game extends Component {
  constructor () {
    super ();
    this.state = {
      player: 'X',
      boxStates: Array (9).fill (null),
      history: [],
    };
  }

  togglePlayer = event => {
    if (this.state.history.length >= 8) {
      this.setState ({
        player: 'DRAW',
      });
    } else {
      let newStates = [...this.state.boxStates];
      let newHistory = [...this.state.history];

      if (newStates[event] !== null) {
        return;
      }

      newHistory.push (newStates);
      newStates[event] = this.state.player;

      this.setState ({
        player: this.state.player === 'X' ? 'O' : 'X',
        boxStates: newStates,
        history: newHistory,
      });
    }
  };

  OnClick = event => {
    let newHistory = [];
    this.state.history.map ((val, i) => {
      if (i <= event.target.value) newHistory.push (val);
      return 0;
    });

    this.setState ({
      history: newHistory,
      boxStates: newHistory[event.target.value],
      player: newHistory.length % 2 === 0 ? 'X' : 'O',
    });
  };

  render () {
    return (
      <div className="RealGame">
        <Board
          player={this.state.player}
          boxStates={this.state.boxStates}
          togglePlayer={i => this.togglePlayer (i)}
        />

        <div className="buttons">
          {this.state.history.map ((past, index) => {
            return (
              <ButtonToPast
                onClick={() => this.OnClick}
                index={index}
                key={index}
              />
            );
          })}
        </div>

      </div>
    );
  }
}

export default Game;
