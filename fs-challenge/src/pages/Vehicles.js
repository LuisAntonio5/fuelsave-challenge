import React from 'react';
import VerticalNavbar from '../../src/components/VerticalNavbar';

import '../styles/Signup.css';
import '../styles/vehicles.css';

function Vehicles() {
  return (
    <div className="flex-start-main">
      <VerticalNavbar/>
      <div className="content">
        <h1>Lorem ipsum dolor sit amet</h1>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id dui porttitor, iaculis ipsum in, bibendum libero. Nullam gravida, purus sed congue egestas, justo turpis rutrum massa, vel convallis lectus orci et tortor.</h3>
        <table>
          <thead>
            <tr>
              <th className="bars">ID</th>
              <th>Distance</th>
            </tr>
          </thead>
          <tbody>
            <tr className="change-color">
              <td className="bars">1</td>
              <td>7051</td>
            </tr>
            <tr>
              <td className="bars">2</td>
              <td>4199</td>
            </tr>
            <tr className="change-color">
              <td className="bars">3</td>
              <td>2966</td>
            </tr>
            <tr>
              <td className="bars">4</td>
              <td>6876</td>
            </tr>
            <tr className="change-color">
              <td className="bars">5</td>
              <td>3640</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Vehicles;
