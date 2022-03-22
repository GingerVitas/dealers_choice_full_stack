import React from 'react';
import {connect} from 'react-redux';
import {genreFilter} from '../store/movieStore';
import {Link} from 'react-router-dom';

const GenreCard = ({movies, filter}) => {
  const genres = movies.reduce((genreArr, movie) => {
    if(!genreArr.includes(movie.genre)) {
      genreArr.push(movie.genre)
    }
    return genreArr;
  }, [])

  return (
    <ul className='filterList'>
    {genres.map(genre=>(
      <Link to={'/movies'} onClick={()=> filter(genre)}><li key={genre}>
        {genre}
      </li></Link>) 
      )}
    </ul>
    )
}

const mapDispatchToProps = (dispatch, {history}) => {
  return {
    filter: (genre) => dispatch(genreFilter(genre, history))
  }
}

export default connect(state=>state, mapDispatchToProps)(GenreCard)