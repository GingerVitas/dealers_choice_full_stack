import React from 'react';
import {connect} from 'react-redux';
import {genreFilter} from '../store/movieStore';

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
      <li key={genre} onClick={()=> filter(genre)}>
        {genre}
      </li>) 
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