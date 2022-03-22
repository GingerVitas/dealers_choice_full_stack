import React from 'react';
import StreamerCard from './StreamerCard';
import {Route} from 'react-router-dom';

const StreamingServices = props => {
  return(
      <div className='streamers'>
        <Route component={StreamerCard} />
      </div>
  )
}

export default StreamingServices