import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

const Nav = ({movies}) => {

  return (
    <div>
      <ul>
        <li><Link to='/movies'>All Movies</Link></li>
        <li>Genres</li>
        <li>Streaming Services</li>
        <li>Rating</li>
      </ul>
    </div>
  )
}

export default connect(state=>state)(Nav)