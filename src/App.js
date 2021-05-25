import React from 'react';
import Home from './Home';
import BirthdayReminder from './components/birthday-reminder/BirthdayReminder';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Travel from './components/travel-guide/Travel';
import Slider from './components/Slider/Slider';
import Reducer from './components/Reducer/Reducer';
import Grocery from './components/Grocery/Grocery';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import {AppProvider} from './components/ContextPractice/Context';

function App () {
  return (
    <AppProvider>

      <Router>
        <div>
          <Home />
          <Switch>
            <Route exact path="/birthday-reminder">
              <BirthdayReminder />
            </Route>
            <Route exact path="/travel">
              <Travel />
            </Route>
            <Route exact path="/slider">
              <Slider />
            </Route>
            <Route exact path="/reducer">
              <Reducer />
            </Route>
            <Route exact path="/grocery">
              <Grocery />
            </Route>
            <Route exact path="/face-recognition">
              <FaceRecognition />
            </Route>
          </Switch>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
