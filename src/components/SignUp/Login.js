import {useState, useEffect} from 'react';
import './SignIn.css';
import axios from 'axios';

const Login = ({handleSubmit}) => {
  const [popup, setPopup] = useState ({
    msg: '',
    visible: false,
  });
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');

  const handleSignInSubmit = (e, email, password) => {
    e.preventDefault ();

    axios.post ('http://localhost:3001/login', {email, password}).then (res => {
      if (res.data.found === true) {
        handleSubmit (res.data.name);
      } else {
        setPopup ({
          msg: res.data.msg,
          visible: true,
        });
      }
    });
  };

  useEffect (
    () => {
      setTimeout (() => {
        setPopup ({
          visible: false,
        });
      }, 2000);

      return () => clearTimeout ();
    },
    [popup.msg]
  );

  return (
    <div>
      {popup.visible && popup.msg}
      <div style={{display: 'flex', justifyContent: 'center'}}>

        <div>
          <form id="myForm">

            <input
              placeholder="Email"
              value={email}
              type="text"
              onChange={e => setEmail (e.target.value)}
            />
            <br />
            <input
              placeholder="Password"
              value={password}
              type="password"
              onChange={e => setPassword (e.target.value)}
            />

            <br />        <button
              type="submit"
              onClick={e => handleSignInSubmit (e, email, password)}
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
