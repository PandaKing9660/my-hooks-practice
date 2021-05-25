import {useState, useEffect} from 'react';
import TravelAlone from './TravelAlone';

const url = 'https://course-api.com/react-tours-project';

const Travel = () => {
  const [isLoading, setIsLoading] = useState (true);
  const [data, setData] = useState ([]);

  const fetchTours = async () => {
    setIsLoading (true);
    try {
      const response = await fetch (url);
      const tours = await response.json ();
      setIsLoading (false);
      setData (tours);
    } catch (error) {
      setIsLoading (false);
      console.log (error);
    }
  };
  useEffect (() => {
    fetchTours ();
  }, []);

  if (isLoading === true) {
    return (
      <div>
        <h1>Loading ...</h1>
      </div>
    );
  }
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Tours</h1>
      {data.map (dta => {
        return <TravelAlone key={dta.id} location={dta} />;
      })}

    </div>
  );
};

export default Travel;
