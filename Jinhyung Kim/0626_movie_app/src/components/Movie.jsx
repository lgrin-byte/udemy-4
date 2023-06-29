import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MovieContainer = styled.div`
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const MovieTitle = styled.h4`
  color: #333;
  font-size: 18px;
  margin-bottom: 10px;
`;

const MovieYear = styled.h4`
  color: #666;
  font-size: 16px;
  margin-bottom: 10px;
`;

const MovieSummary = styled.p`
  color: #888;
  font-size: 14px;
  margin-bottom: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

const MoviePoster = styled.img`
  width: 100px;
  height: auto;
  margin-bottom: 10px;
`;

export default function Movie({ id, year, title, summary, poster }) {
  return (
    <MovieContainer id={id}>
      <MovieTitle>{title}</MovieTitle>
      <MovieYear>{year}</MovieYear>
      <MovieSummary>{summary}</MovieSummary>
      <MoviePoster src={poster} alt={title} />
    </MovieContainer>
  );
}

Movie.propTypes = {
  id: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};