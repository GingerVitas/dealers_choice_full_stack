import React from 'react';
import GenreCard from './GenreCard';
import {Route} from 'react-router-dom';


const Genres = props => {
  return(
    <div className='genres'>
      <Route component={GenreCard} />
    </div>
  )
}


export default Genres