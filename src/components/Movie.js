import React from 'react';
import {connect} from 'react-redux'

const Movie = props => {
  console.log(props)
  const {movies} = props
  const movie = movies.filter(movie => movie.id !== props.match.params.id)
  return (
    <div className='singleMovieCard' key={movie.id}>
      <img className='boxImg' src={movie.boxArt} />
      <div className='releaseYear'>Released in {movie.releaseYear}</div>
      <div className='genre'>{movie.genre}</div>
      <div className='rating'>{movie.rating}</div>
      <div className='director'>Directed by {movie.director}</div>
    </div>
  )
}

export default connect(state=>state)(Movie)