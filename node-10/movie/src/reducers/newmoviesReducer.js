// import {FETCHED_MOVIES, FETCHED_MOVIES_ERROR} from'../actions/movieAction';
import {NEW_MOVIES_PENDING, NEW_MOVIES_FULFILLED,NEW_MOVIES_REJECTED} from'../actions/newMovieAction';


const initialState = {
    fetching:false,
    fetched:false,
    movies:[],
    error:{}
}

export default (state = initialState, { type, payload }) => {
    // switch (type) {S

    // case FETCHED_MOVIES:
    //     return { ...state, movies:payload }
    // case FETCHED_MOVIES_ERROR:
    //         return { ...state, error:payload }
    // default:S
    //     return state
    // }
    
    
    switch (type) {

        case NEW_MOVIES_PENDING:
            return { ...state, fetching:true, fetched:false }
        case NEW_MOVIES_FULFILLED:
                return { ...state, movies:payload,fetching:false, fetched:true  }
        case NEW_MOVIES_REJECTED:
                return { ...state, error:payload, fetching:false, fetched:false  }
        default:
            return state
        }

}
