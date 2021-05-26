import React, {Component} from 'react';
import CardList from './Components/CardList';
import Scroll from './Components/Scroll.js';
import {robots} from './Components/robots';

class App extends Component {
  constructor () {
    super ();

    this.state = {
      searchedText: '',
      robots: robots,
    };
  }

  // componentDidMount () {
  //   fetch ('https://jsonplaceholder.typicode.com/users')
  //     .then (Response => Response.json ())
  //     .then (user => {
  //       this.setState ({robots: user});
  //     });
  // }

  render () {
    return (
      <div className="tc">
        <h1 className="f1">Robots</h1>

        <Scroll>
          <CardList robot={robots} />
        </Scroll>

      </div>
    );
  }
}

export default App;
