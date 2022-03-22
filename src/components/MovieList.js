import React from 'react';
import MovieCard from './MovieCard';
import {Route} from 'react-router-dom';

const MovieList = props => {
  return (
    <div>
      <div className='gridContainer'>
        <h2>Your personalized Movie List</h2>
        <div className='movieGrid'>
          <Route component={MovieCard} />
        </div>
      </div>

    </div>
  )
}

export default MovieList