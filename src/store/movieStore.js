import axios from 'axios';

const LOAD_MOVIES = 'LOAD_MOVIES'
const ADD_MOVIE = 'ADD_MOVIE';
const DELETE_MOVIE = 'DELETE_MOVIE';
const UPDATE_MOVIE = 'UPDATE_MOVIE';

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
  return state;
};

export default movieReducer