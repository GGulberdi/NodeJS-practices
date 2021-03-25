import axios from 'axios';
import {API_BASE} from '../config/env'


export const NEW_MOVIES_PENDING = "FETCHED_MOVIES_PENDING";
export const NEW_MOVIES_FULFILLED = "FETCHED_MOVIES_FULFILLED";
export const NEW_MOVIES_REJECTED = "FETCHED_MOVIES_REJECTED";



export function onNewMovieSubmit(){
    return dispatch =>{
        dispatch({
            type:"FETCHED_MOVIES", payload:axios.get(`${API_BASE}/movies`)
            .then((result)=>result.data)
        })
    }
}