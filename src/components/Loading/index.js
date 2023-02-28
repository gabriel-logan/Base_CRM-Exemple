import React from 'react';
import ReactLoading from 'react-loading';
import PropTypes from 'prop-types';
import LoadingStyles from './styled';

export default function Loading({ isLoading }) {
  if (isLoading) {
    return (
      <LoadingStyles>
        <ReactLoading type="spinningBubbles" color="black" className="loanding" />
      </LoadingStyles>
    );
  }
}

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};
