import React from 'react';
import { Link } from 'react-router-dom';
import Submit from "../../src/components/loginBtn.js";

import '../styles/Signup.css';

function Signup() {
  return (
    <div className="flex-main">
      <img className="background-img" src={require('../img/background.svg')} alt="background"/>
      <div className="login-area">
        <h1> New Customer </h1>
        <input type="input" name="username" placeholder="username"/>
        <input type="input" name="password" placeholder="password"/>
        <Link to={`/vehicles`}>
          <Submit label={"SIGNUP"} />
        </Link>
      </div>
    </div>
  );
}

export default Signup;
