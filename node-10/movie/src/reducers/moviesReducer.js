// import {FETCHED_MOVIES, FETCHED_MOVIES_ERROR} from'../actions/movieAction';
import {FETCHED_MOVIES_PENDING, FETCHED_MOVIES_FULFILLED,FETCHED_MOVIES_REJECTED} from'../actions/movieAction';


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

        case FETCHED_MOVIES_PENDING:
            return { ...state, fetching:true, fetched:false }
        case FETCHED_MOVIES_FULFILLED:
                return { ...state, movies:payload,fetching:false, fetched:true  }
        case FETCHED_MOVIES_REJECTED:
                return { ...state, error:payload, fetching:false, fetched:false  }
        default:
            return state
        }

}
