import React from 'react';
import {connect, useDispatch} from 'react-redux';
import {ratingFilter as filter} from '../store/movieStore';
import {Link} from 'react-router-dom';

const RatingCard = ({movies}) => {
  const ratings = movies.reduce((ratingArr, movie) => {
    if(!ratingArr.includes(movie.rating)) {
      ratingArr.push(movie.rating)
    }
    return ratingArr;
  }, [])

  const dispatch = useDispatch()
  return (
    <ul className='filterList'>
    {ratings.map(rating=>(
      <Link to={'/movies'} onClick={()=>dispatch(filter(rating))}><li key={rating}>
        {rating}
      </li></Link>
    ))}
    </ul>
  )
}

export default connect(state=>state)(RatingCard)