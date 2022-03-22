import React from 'react';
import {connect} from 'react-redux';
import {streamerFilter} from '../store/moviesStore';
import {Link} from 'react-router-dom';

const StreamerCard = ({movies, filter}) => {
  const streamers = movies.reduce((streamerArr, movie) => {
    if(!streamerArr.includes(movie.streamingService)) {
      streamerArr.push(movie.streamingService)
    }
    return streamerArr;
  }, [])
  return (
    <ul className='filterList'>
      {streamers.map(streamer=>(
      <li key={streamer}>
        <Link to={'/movies'} onClick={() => filter(streamer)} style={{ textDecoration: 'none', color: 'inherit' }}>{streamer}</Link>
      </li>
    ))}
    </ul>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    filter: (streamingService) => dispatch(streamerFilter(streamingService))
  }
}

export default connect(state=>state, mapDispatchToProps)(StreamerCard)