import {useState} from 'react';
import './SignIn.css';
const SignIn = ({handleSignInSubmit}) => {
  const [name, setName] = useState ('');
  const [email, setEmail] = useState ('');
  const [password, setPassword] = useState ('');

  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <div>
        <form id="myForm">

          <input
            placeholder="Name"
            type="text"
            value={name}
            onChange={e => setName (e.target.value)}
          />
          <br />
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
            onClick={e => handleSignInSubmit (e, name, email, password)}
          >
            SignIn
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
