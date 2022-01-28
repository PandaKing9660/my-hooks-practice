import {useState} from 'react';
import Logo from './Logo';
import SignIn from '../SignUp/SignIn';

import Clarifai from 'clarifai';
import ImageShow from './ImageShow';

const API_KEY = '72b5bd50813a4043badbdc7151ff7702';

const app = new Clarifai.App ({
  apiKey: API_KEY,
});

const FaceRecognition = () => {
  const [isSignIn, setIsSignIn] = useState (false);
  const [imageLink, setImageLink] = useState ('');
  const [count, setCount] = useState (0);
  const [isImageVisible, setIsImageVisible] = useState (false);
  const [userName, setUserName] = useState ('');
  const [box, setBox] = useState ({});

  const showImage = response => {
    const clarifaiFace =
      response.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById ('inputImage');
    const width = Number (image.width);
    const height = Number (image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - clarifaiFace.right_col * width,
      bottomRow: height - clarifaiFace.bottom_row * height,
    };
  };

  const handleClick = () => {
    app.models
      .predict (
        Clarifai.FACE_DETECT_MODEL,
        // URL
        imageLink
      )
      .then (response => setBox (showImage (response)))
      .catch (err => console.log (err));

    setIsImageVisible (true);
    setCount (count + 1);
  };

  const handleSignInSubmit = (name) => {
    setUserName (name);
    setIsSignIn (true);
  };

  const handleSignOff = () => {
    setIsSignIn (false);
    setBox ({});
    setImageLink ('');
    setIsImageVisible (false);
    setUserName ('');
  };

  return (
    <div>
      <Logo />
      {isSignIn === false
        ? <SignIn handleSignInSubmit={handleSignInSubmit} />
        : <div>
            <div style={{display: 'flex', justifyContent: 'flex-end'}}>
              <button onClick={handleSignOff}>
                Sign Out
              </button>
            </div>
            <p>Hello {userName}</p>
            <div style={{textAlign: 'center'}}>
              <p>Your Total Score : {count}</p>
              <input
                placeholder="image link"
                value={imageLink}
                onChange={e => {
                  setIsImageVisible (false);
                  setImageLink (e.target.value);
                }}
              />
              <button onClick={handleClick}> Find</button>

            </div>
            {console.log (box)}
            {isImageVisible
              ? <ImageShow box={box} imageLink={imageLink} />
              : <div />}
          </div>}
    </div>
  );
};

export default FaceRecognition;
