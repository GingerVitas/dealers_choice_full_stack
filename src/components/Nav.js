import React from 'react';
import { Link, Route } from 'react-router-dom';
import {connect, useDispatch} from 'react-redux';
import Genres from './Genres';
import StreamingServices from './StreamingServices';
import Ratings from './Ratings';
import {loadMovies} from '../store/movieStore';

const Nav = props => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className='navContainer'>
        <ul className='nav'>
          <li onClick={()=>dispatch(loadMovies())}><Link to='/movies'>All Movies</Link></li>
          <li onClick={()=>dispatch(loadMovies())}><Link to='/movies/genres'>Genres</Link></li>
          <li onClick={()=>dispatch(loadMovies())}><Link to='/movies/streamers'>Streaming Services</Link></li>
          <li onClick={()=>dispatch(loadMovies())}><Link to='/movies/ratings'>Rating</Link></li>
        </ul>
      </div>
      <div className='filterContainer'>
            <Route path='/movies/genres' component={Genres} />
            <Route path='/movies/streamers' component={StreamingServices} />
            <Route path='/movies/ratings' component={Ratings} />
      </div>
    </div>
  )
}

export default connect(state=>state)(Nav)