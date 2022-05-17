// use vanilla javascript
import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "./constants"

// ** make it small as possible **
/* So that is this action is going to which is called set searchField 
    is going to take (text), which is what the user inputs, and it's going 
    to return an object that has a type of "CHANGE_SEARCH_FIELD". So that's 
    the action that's being taken. And it's going to send and payload is 
    a common name that is used and redux. So just get used to that payload 
    is we're sending whatever data is needed to go onto the reducer. Which 
    is just going to be whatever the user enters. */
// "CHANGE_SEARCH_FIELD" is a constant. A constant is usually capitalized.
export const setSearchField = (text) => {
    // console.log(text); // to see if the action is coming through
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
}

// Well, we've created a higher order function, a function that returns a function, 
// a thunk because now request robots is going to return again because of our functions.
export const requestRobots = () => (dispatch) => {
    // First thing when we request robots, well, 
    // we want to dispatch the pending action.
    // So, again, we can just do the standard 
    // syntax of dispatching an object that is 
    // of type: REQUEST_ROBOTS_PENDING. And 
    // the payload, well, there's no real payload, 
    // we just have a request pending so we can 
    // just leave it the way it is right now 
    // without a payload. 
    dispatch({ type: REQUEST_ROBOTS_PENDING});
    // Next, Asynchronous
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=> response.json())
        .then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data}))
        .catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload: error}))
    // Finally, go into the reducer.js
}