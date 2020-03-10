import React from 'react';
import VerticalNavbar from '../../src/components/VerticalNavbar';

import '../styles/Signup.css';
import '../styles/vehicles.css';
import '../styles/Settings.css';

function Settings() {
  return (
    <div className="flex-start-main">
      <VerticalNavbar/>
      <div className="content">
        <h1>Lorem ipsum dolor sit amet</h1>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id dui porttitor, iaculis ipsum in, bibendum libero. Nullam gravida, purus sed congue egestas, justo turpis rutrum massa, vel convallis lectus orci et tortor.</h3>
        <label>Choose a language:</label>
        <select>
          <option value="Portuguese">Portuguese</option>
          <option value="English">English</option>
        </select>

      </div>
    </div>
  );
}

export default Settings;
