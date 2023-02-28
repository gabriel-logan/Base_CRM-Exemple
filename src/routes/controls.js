import React from 'react';

import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

export default function LoggedControl({ children }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return children;
}

LoggedControl.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

export function SettingsControll({ children }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/" />;
  }

  return children;
}

SettingsControll.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};
