import React from 'react';
import {useGlobalContext} from './components/ContextPractice/Context';
import {Link} from 'react-router-dom';
import './Home.css';
import SideBar from './SideBar';

const Navbar = () => {
  const {openSidebar} = useGlobalContext ();

  return (
    <nav className="nav" style={{backgroundColor: 'black'}}>
      <div className="nav-center">
        <div className="nav-header">

          <button className="btn toggle-btn" onClick={openSidebar}>
            Cross
          </button>
          <SideBar />
        </div>
        <ul className="nav-links">
          <li>
            <Link className="link-btn" to="/travel">
              Travel
            </Link>
          </li>
          <li>
            <Link className="link-btn" to="/birthday-reminder">
              Birthday Reminder
            </Link>
          </li>
          <li>
            <Link className="link-btn" to="/slider">
              Slider
            </Link>
          </li>
          <li>
            <Link className="link-btn" to="/game">
              Game
            </Link>
          </li>
          <li>
            <Link className="link-btn" to="/reducer">
              Reducer
            </Link>
          </li>
          <li>
            <Link className="link-btn" to="/grocery">
              Grocery
            </Link>
          </li>
          <li>
            <Link className="link-btn" to="/face-recognition">
              Face Recognition
            </Link>
          </li>
          <li>
            <Link className="link-btn" to="/robo-friends">
              RoboFriends
            </Link>
          </li>

        </ul>
        <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
