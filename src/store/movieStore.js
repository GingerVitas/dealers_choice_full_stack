import axios from 'axios';


const LOAD_MOVIES = 'LOAD_MOVIES'
const ADD_MOVIE = 'ADD_MOVIE';
const DELETE_MOVIE = 'DELETE_MOVIE';
const UPDATE_MOVIE = 'UPDATE_MOVIE';
const GENRE_FILTER = 'GENRE_FILTER';
const STREAMER_FILTER = 'STREAMER_FILTER';
const RATING_FILTER = 'RATING_FILTER';

//Action Creators
const _loadMovies = (movies) => {
  return {
    type: LOAD_MOVIES,
    movies
  }
};

const _addMovie = (movie) => {
  return {
    type: ADD_MOVIE,
    movie
  }
};

const _deleteMovie = (movie) => {
  return {
    type: DELETE_MOVIE,
    movie
  }
};

const _updateMovie = (movie) => {
  return {
    type: UPDATE_MOVIE,
    movie
  }
};

const _genreFilter = (genre) => {
  return {
    type: GENRE_FILTER,
    genre
  }
}
const _streamerFilter = (streamingService) => {
  return {
    type: STREAMER_FILTER,
    streamingService
  }
}
const _ratingFilter = (rating) => {
  return {
    type: RATING_FILTER,
    rating
  }
}

//thunks
export const loadMovies = () => {
  return async(dispatch) => {
    const movies = (await axios.get('/api/movies')).data;
    dispatch(_loadMovies(movies))
  }
};

export const addMovie = (movie, history) => {
  return async(dispatch) => {
    const newMovie = (await axios.post('/api/movies', movie)).data;
    dispatch(_addMovie(newMovie));
    history.push(`/movies/${newMovie.id}`)
  }
};

export const deleteMovie = (movie, history) => {
  return async(dispatch) => {
    await axios.delete(`/api/movies/${movie.id}`);
    dispatch(_deleteMovie(movie));
    history.push('/movies')
  }
}

export const  updateMovie = (movie, history) => {
  return async(dispatch) => {
    const updatedMovie = (await axios.put('/api/movies', movie)).data;
    dispatch(_updateMovie(updateMovie));
  }
}

export const genreFilter = (genre) => {
  return (dispatch) => {
    dispatch(_genreFilter(genre));
  }
}

export const streamerFilter = (streamingService) => {
  return (dispatch) => {
    dispatch(_streamerFilter(streamingService));
  }
}
export const ratingFilter = (rating) => {
  return (dispatch) => {
    dispatch(_ratingFilter(rating));
  }
}


const movieReducer = (state = [], action) => {
  if(action.type === LOAD_MOVIES){
    return action.movies
  };
  if(action.type === ADD_MOVIE){
    return [...state, action.movie]
  };
  if(action.type === DELETE_MOVIE){
    return [...state.filter(movie => movie.id !== action.movie.id)]
  };
  if(action.type === UPDATE_MOVIE){
    return [...state.map(movie => movie.id !== action.movie.id ? movie : action.movie)]
  }
  if(action.type === GENRE_FILTER){
    return [...state.filter(movie => movie.genre === action.genre)]
  }
  if(action.type === STREAMER_FILTER){
    return [...state.filter(movie => movie.streamingService === action.streamingService)]
  }
  if(action.type === RATING_FILTER){
    return [...state.filter(movie => movie.rating === action.rating)]
  }
  return state;
};

export default movieReducer