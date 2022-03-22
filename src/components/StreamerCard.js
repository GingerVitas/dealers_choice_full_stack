import React from 'react';
import {connect} from 'react-redux';

const StreamerCard = ({movies}) => {
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
        {streamer}
      </li>
    ))}
    </ul>
  )
}

export default connect(state=>state)(StreamerCard)