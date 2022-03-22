import React from 'react';
import { Link, Route } from 'react-router-dom';
import {connect, useDispatch} from 'react-redux';
import Genres from './Genres';
import StreamingServices from './StreamingServices';
import Ratings from './Ratings';
import {loadMovies} from '../store/moviesStore';

const Nav = ({location: {pathname}}) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className='navContainer'>
        <ul className='nav'>
          <li onClick={()=>dispatch(loadMovies())}><Link to='/movies' style={{ textDecoration: 'none', color: 'inherit' }}>All Movies</Link></li>
          <li><Link to='/movies/genres' className={pathname === '/movies/genres' ? 'selected' : ''} style={{ textDecoration: 'none', color: 'inherit' }}>Genres</Link></li>
          <li><Link to='/movies/streamers' className={pathname === '/movies/streamers' ? 'selected' : ''} style={{ textDecoration: 'none', color: 'inherit' }}>Streaming Services</Link></li>
          <li><Link to='/movies/ratings' className={pathname === '/movies/ratings' ? 'selected' : ''} style={{ textDecoration: 'none', color: 'inherit' }}>Rating</Link></li>
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