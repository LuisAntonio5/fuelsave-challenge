import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import commute from '../img/commute.svg';
import settings from '../img/settings.svg';
import logoff from '../img/logoff.svg';

import '../styles/Icon.css';

const Icon = ({ img, link, alt }) => {
  const icons = {
    commute,
    settings,
    logoff,
  };

  return (
    <div className="icon-wrapper">
      {link != null ? (
        <Link to={link}>
          <img src={icons[img]} alt={alt} />
        </Link>
      ) : (
        <img src={icons[img]} alt={alt} />
      )}
    </div>
  );
};

Icon.propTypes = {
  img: PropTypes.string.isRequired,
  link: PropTypes.string,
  alt: PropTypes.string.isRequired,
};

export default Icon;
