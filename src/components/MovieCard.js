import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';


const MovieList = ({movies}) => {
  return (
    movies.map(movie=> (
      <NavLink to={`/movie/${movie.id}`} className='movieCard' key={movie.id} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img className='boxImg' src={movie.boxArt} />
        <div className='genre'>{movie.genre}</div>
        <div className='rating'>{movie.rating}</div>
        <div className='director'>Directed by {movie.director}</div>
      </NavLink>
    ))
  )
}

export default connect(state=>state)(MovieList)