import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';


const MovieList = ({movies}) => {
  return (
    movies.map(movie=> (
      <div className='movieCard' key={movie.id}>
        <img className='boxImg' src={movie.boxArt} />
        <div className='releaseYear'>Released in {movie.releaseYear}</div>
        <div className='genre'>{movie.genre}</div>
        <div className='rating'>{movie.rating}</div>
        <div className='director'>Directed by {movie.director}</div>
      </div>
    ))
  )
}

export default connect(state=>state)(MovieList)