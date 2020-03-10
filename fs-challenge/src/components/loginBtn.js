import React from "react";
import PropTypes from 'prop-types';
import "../styles/loginBtn.css";

const Submit = props => {
  return (
    <input className="btnText" type="submit" value={props.label} />
  );
};

Submit.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Submit;
