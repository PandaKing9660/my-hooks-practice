import React, {useState} from 'react';
import data from './data';
import './birthdayReminder.css';
import User from './user';

const BirthdayReminder = () => {
  const [people, setPeople] = useState (data);

  const handleClick = e => {
    const newList = people.filter (person => person.id !== e);

    setPeople (newList);
  };

  return (
    <div className="card">
      <h1>{people.length} Birthdays</h1>

      {people.map (person => {
        return (
          <User
            person={person}
            key={person.id}
            onClickEvent={e => handleClick (e)}
          />
        );
      })}
      <button onClick={() => setPeople ([])}>Click ME to Clear</button>
    </div>
  );
};

export default BirthdayReminder;
