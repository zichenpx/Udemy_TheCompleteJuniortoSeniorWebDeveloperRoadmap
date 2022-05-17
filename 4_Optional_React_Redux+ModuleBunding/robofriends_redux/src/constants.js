export const CHANGE_SEARCH_FIELD = "CHANGE_SEARCH_FIELD";

//this is going to be a promise, it's going to have three states.
// STATE 1: PENDING which is the very first time that we send 
// that request, it's going to be pending, we're waiting for 
// the promised to return.
export const REQUEST_ROBOTS_PENDING = "REQUEST_ROBOTS_PENDING";
export const REQUEST_ROBOTS_SUCCESS = "REQUEST_ROBOTS_SUCCESS";
export const REQUEST_ROBOTS_FAILED = "REQUEST_ROBOTS_FAILE";
// And the next step, as we know, is to create the actions using 
// these things, so let's go back to actions.