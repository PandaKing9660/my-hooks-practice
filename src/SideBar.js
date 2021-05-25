import React from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import {useGlobalContext} from './components/ContextPractice/Context';

const SideBar = () => {
  const {isSidebarOpen, closeSidebar} = useGlobalContext ();
  return (
    <div
      className={`${isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'}`}
    >
      <aside className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          Cross
        </button>
        <div className="sidebar-links">
          <ul>
            <li>
              <Link className="link-btn" to="/">
                Home
              </Link>
            </li>
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
          </ul>

        </div>
      </aside>
    </div>
  );
};

export default SideBar;
