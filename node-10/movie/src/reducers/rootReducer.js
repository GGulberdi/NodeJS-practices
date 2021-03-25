import {combineReducers} from 'redux';
import moviesReducer from './moviesReducer';
import newMovieReducer from './moviesReducer'

export default combineReducers({
    moviesReducer,
    newMovieReducer
})