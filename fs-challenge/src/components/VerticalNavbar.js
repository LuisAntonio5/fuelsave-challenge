import React from 'react';
import Icon from './Icon';

import '../styles/Signup.css';
import '../styles/vehicles.css';

function VerticalNavbar() {
  return (
    <div className="vertical-navbar">
      <div>
        <Icon img="commute" alt="vehicles" link={`/vehicles`}/>
        <Icon img="settings" alt="settings" link={`/settings`}/>
      </div>
      <Icon img="logoff" alt="log off" link={`/signup`}/>
    </div>
  );
}

export default VerticalNavbar;
