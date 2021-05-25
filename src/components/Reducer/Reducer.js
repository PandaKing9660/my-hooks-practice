import {useReducer, useState, useEffect} from 'react';
import PersonPrint from './printPerson';

const reducer = (state, action) => {
  if (action.type === 'ADD_ELEMENT') {
    const newPerson = [
      ...state.people,
      {name: action.value.name, id: new Date ().getTime ().toString ()},
    ];
    return {
      ...state,
      people: newPerson,
      showPopUp: true,
      popUpMsg: 'ITEM ADDED',
    };
  } else if (action.type === 'REMOVE_ELEMENT') {
    const newList = state.people.filter (
      person => person.id !== action.value.id
    );
    return {
      ...state,
      people: newList,
      showPopUp: true,
      popUpMsg: 'ITEM REMOVED',
    };
  } else if (action.type === 'NO_ELEMENT') {
    return {
      ...state,
      showPopUp: true,
      popUpMsg: "EMPTY ITEM WON'T BE ADDED",
    };
  } else if (action.type === 'HIDE_POPUP') {
    return {
      ...state,
      showPopUp: false,
    };
  }
};

const defaultValues = {
  people: [],
  showPopUp: false,
  popUpMsg: 'Added',
};

const Reducer = () => {
  const [state, dispatch] = useReducer (reducer, defaultValues);
  const [name, setName] = useState ('');

  const handleSubmit = e => {
    e.preventDefault ();

    if (name) {
      dispatch ({type: 'ADD_ELEMENT', value: {name}});
      setName ('');
    } else {
      dispatch ({type: 'NO_ELEMENT'});
    }
  };

  const handleDelete = id => {
    dispatch ({type: 'REMOVE_ELEMENT', value: {id}});
  };

  useEffect (
    () => {
      setTimeout (() => {
        dispatch ({type: 'HIDE_POPUP'});
      }, 3000);
    },
    [state.people]
  );

  return (
    <div>
      {state.showPopUp && state.popUpMsg}
      <form style={{textAlign: 'center', marginTop: '10%'}}>
        <input
          type="text"
          value={name}
          onChange={e => setName (e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}> Add </button>
      </form>

      {state.people.map (person => {
        return (
          <PersonPrint
            person={person}
            key={person.id}
            handleDelete={handleDelete}
          />
        );
      })}

    </div>
  );
};

export default Reducer;
