import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import moviesReducer from './moviesStore';
import movieReducer from './movieStore';

const reducer = combineReducers({
  movies: moviesReducer,
  movie: movieReducer
})

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;