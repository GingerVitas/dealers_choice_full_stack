import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import movieReducer from './movieStore';

const reducer = combineReducers({
  movies: movieReducer
})

const store = createStore(reducer, applyMiddleware(thunk, logger));

export default store;