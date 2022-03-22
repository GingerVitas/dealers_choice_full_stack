import React from 'react';
import GenreCard from './GenreCard';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {loadMovies} from '../store/movieStore';

const Genres = ({loadMovies}) => {

    return(
      <div className='genres'>
        <Route component={GenreCard} />
      </div>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadMovies: dispatch(loadMovies())
  }
}

export default connect(null, mapDispatchToProps)(Genres)