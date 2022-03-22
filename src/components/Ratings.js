import React from 'react';
import RatingCard from './RatingCard';
import {Route} from 'react-router-dom';

const Ratings = props => {
  return(
      <div className='ratings'>
        <Route component={RatingCard} />
      </div>
  )
}

export default Ratings