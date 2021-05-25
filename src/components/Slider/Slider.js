import {useState, useEffect} from 'react';
import people from './data';

const Slider = () => {
  const [value, setValue] = useState (0);

  useEffect (
    () => {
      let slider = setInterval (() => {
        setValue ((value + 1) % people.length);
      }, 3000);

      return () => clearInterval (slider);
    },
    [value]
  );

  return (
    <div style={{display: 'block'}}>

      <div style={{textAlign: 'center', height: '400px'}}>
        <h1>
          {people[value].name}
        </h1>
        <p>
          {people[value].quote}
        </p>
        <h1>
          {people[value].title}
        </h1>
        <img
          src={people[value].image}
          alt={people[value].title}
          style={{height: '60%', width: '35%'}}
        />
      </div>
      <div style={{margin: '20px'}}>
        <button
          onClick={() => setValue ((value + 1) % people.length)}
          style={{margin: '10px'}}
        >
          Next
        </button>
        <button
          onClick={() => setValue ((value - 1 + people.length) % people.length)}
        >
          Previous
        </button>
      </div>
    </div>
  );
};

export default Slider;
