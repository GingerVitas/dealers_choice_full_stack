import axios from 'axios';

const SET_MOVIE = 'SET_MOVIE'
const setMovie = (movie) => {
  return {
    type: SET_MOVIE,
    movie
  }
}
export const fetchMovie = (id) => {
  return async(dispatch) => {
    const movie = (await axios.get(`/api/movie/${id}`)).data;
    dispatch(setMovie(movie))
  }
}

const movieStore = (state = {}, action) => {
  if(action.type === SET_MOVIE){
    return action.movie
  }
  return state
}

export default movieStore