import {useEffect} from 'react';

const Alert = ({makeAlert, msg, type, list}) => {
  useEffect (
    () => {
      let timer = setTimeout (() => makeAlert (), 2000);

      return () => clearInterval (timer);
    },
    [list, makeAlert]
  );

  return (
    <div style={{backgroundColor: type}}>
      <p>{msg}</p>
    </div>
  );
};

export default Alert;
