import React from 'react';
import {connect} from 'react-redux';


const MovieList = ({movies}) => {
  return (
    movies.map(movie=> (
      <div className='movieCard' key={movie.id}>
        <div className='boxArtImage'><img src={movie.boxArt} /></div>
        <div className='title'>{movie.title}</div>
        <div className='releaseYear'>{movie.releaseYear}</div>
        <div className='genre'>{movie.genre}</div>
        <div className='rating'>{movie.rating}</div>
        <div className='runTime'>{movie.runTime}</div>
        <div className='director'>{movie.director}</div>
      </div>
    ))
  )
}

export default connect(state=>state)(MovieList)