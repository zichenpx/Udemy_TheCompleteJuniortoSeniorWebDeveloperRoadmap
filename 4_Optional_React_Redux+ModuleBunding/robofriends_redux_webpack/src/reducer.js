// import what we have in action.js as well, we gonna need these constants.
import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "./constants"

const initialStateSearch = {
    searchField: ""
}

// create reducer, pure function
export const searchRobots = (state=initialStateSearch, action={}) => {
    // console.log(action.type);
    switch(action.type) {
        case CHANGE_SEARCH_FIELD:
            return {...state, searchField: action.payload};
            // return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
}


const initialStateRobots = {
    isPending: false,
    robots:[],
    error:""
}
// We're going to create a new reducer because instead of combining all 
// these reducers, we want to make them each specific to their use case.
export const requestRobots = (state=initialStateRobots, action={}) => {
    switch(action.type) {
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, { isPending: true })
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, { robots: action.payload, isPending: false })
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false })
        default:
            return state;
    }
}