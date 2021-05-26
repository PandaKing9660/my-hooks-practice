import React, {Component} from 'react';
import Card from './Card.js';
import SearchBar from '../Components/SearchBar';

class CardList extends Component {
  constructor (props) {
    super (props);
    this.state = {
      toShowArr: this.props.robot,
      searchedText: '',
    };
  }

  reFetchValues = () => {
    this.setState ({
      toShowArr: this.props.robot,
    });
  };

  deleteCard = idToDelete => {
    this.setState ({
      toShowArr: this.state.toShowArr.filter (user => user.id !== idToDelete),
    });
    console.log (this.state.toShowArr);
  };
  onSearchEvent = event => {
    if (event.target.value !== '') {
      this.setState ({searchedText: event.target.value});
      this.setState ({
        toShowArr: this.state.toShowArr.filter (robot => {
          return robot.name
            .toLowerCase ()
            .includes (this.state.searchedText.toLowerCase ());
        }),
      });
    } else {
      this.setState ({toShowArr: this.props.robot});
    }
  };

  render () {
    return (
      <div>
        <SearchBar searchChange={this.onSearchEvent} />;

        {this.state.toShowArr !== undefined
          ? this.state.toShowArr.map ((user, i) => {
              return (
                <Card {...user} deleteCard={this.deleteCard} key={user.id} />
              );
            })
          : <h1>Wait</h1>}

      </div>
    );
  }
}

export default CardList;
