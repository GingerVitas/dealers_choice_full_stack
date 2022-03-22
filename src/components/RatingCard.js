import React from 'react';
import {connect} from 'react-redux';

const RatingCard = ({movies}) => {
  const ratings = movies.reduce((ratingArr, movie) => {
    if(!ratingArr.includes(movie.rating)) {
      ratingArr.push(movie.rating)
    }
    return ratingArr;
  }, [])

  return (
    <ul className='filterList'>
          {ratings.map(rating=>(
      <div key={rating}>
        {rating}
      </div>
    ))}
    </ul>
  )
}

export default connect(state=>state)(RatingCard)