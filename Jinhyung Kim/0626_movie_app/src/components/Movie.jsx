import React from 'react';
import PropTypes from 'prop-types';

export default function Movie({ id, year, title, summary, poster }) {
  return (
    <div id={id}>
      <h4>{title}</h4>
      <h4>{year}</h4>
      <h4>{summary}</h4>
      <h4>{poster}</h4>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};