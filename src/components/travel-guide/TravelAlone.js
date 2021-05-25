import './TravelAlone.css';
import {useState} from 'react';

const TravelAlone = ({location}) => {
  const [readMode, setReadMore] = useState (true);

  return (
    <div>
      <h1>{location.name}</h1>
      <div className="card-info">

        <img src={location.image} alt={location.name} />
        <p>
          {!readMode ? location.info : `${location.info.substring (0, 100)}`}
          {' '}
          ...
        </p>
        <br />
        <br />

        <button
          onClick={() => setReadMore (!readMode)}
          style={{height: '30px'}}
        >
          {readMode ? 'Read more' : 'Read Less'}
        </button>

        <p
          style={{
            color: 'red',
            backgroundColor: 'yellowgreen',
            height: '25px',
            textAlign: 'center',
          }}
        >
          {location.price}
        </p>
      </div>
    </div>
  );
};

export default TravelAlone;
