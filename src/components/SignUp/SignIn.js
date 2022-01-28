import {useState} from 'react';
import './SignIn.css';
import Login from './Login';
import Register from './Register';

const SignIn = ({handleSignInSubmit}) => {
  const [isRegisterPage, setIsRegisterPage] = useState (false);



  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      {isRegisterPage === false
        ? <div>
            <Login handleSubmit = {handleSignInSubmit}/>

            <button onClick={() => setIsRegisterPage (true)}>
              Go to Register page
            </button>
          </div>
        : <div>
            <Register setIsRegisterPage = {setIsRegisterPage}/>

            <button onClick={() => setIsRegisterPage (false)}>
              Go to Login page
            </button>
          </div>}

    </div>
  );
};

export default SignIn;
