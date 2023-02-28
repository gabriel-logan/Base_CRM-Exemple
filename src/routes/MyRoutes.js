import React from 'react';

import { Navigate } from 'react-router-dom';

import { useSelector } from 'react-redux';

import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

export default function MyRoutes({ children, ...rest }) {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    toast.info('Faça login primeiro');
    return <Navigate to="/login" state={{ prevPath: rest.path }} />;
  }

  return children;
}

MyRoutes.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};
