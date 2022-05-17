import React from "react";
// import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { createStore} from "redux";
import { createSlice, configureStore } from '@reduxjs/toolkit';
import { createLogger, applyMiddleware, combineReducers } from "redux-logger";
import thunkMiddleware from "redux-thunk";
// Redux Thunk is a middleware that waits and Sisa sees if any 
// actions return a function instead of an object.
import logger from 'redux-logger'
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./containers/App";
import reportWebVitals from "./reportWebVitals";
import registerServiceWorker from "./registerServiceWorker"
import { searchRobots, requestRobots } from "./reducer";
import "tachyons";

/* we have this a longer function, which is a middleware. We can 
    apply that to our Redux app, and the way we do that is through the 
    Redux package that comes with something called applyMiddleware. 
    And the appli middleware says, hey, we want to apply some middleware 
    to this float that we have going on. So we can simply in the store 
    function, have a second barometer that says apply middleware and give
    it whatever middleware we're interested in. In our case, it's the logger. */
// const loggerr = createLogger();

// const store = createStore(rootReducer)
// const store = createStore(searchRobots);
// const store = createStore(searchRobots, applyMiddleware(logger));
const store = configureStore({
    reducer: {
        searchRobots: searchRobots, 
        requestRobots: requestRobots
    },
    // reducer: combineReducers({searchRobots, requestRobots}),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
// ↑https://redux.js.org/introduction/why-rtk-is-redux-today
// ↑https://redux-toolkit.js.org/api/configureStore
// 115-async
// const loggerr = createLogger();
// const rootReducer = combineReducers({searchRobots, requestRobots});
// const store = 
//     // createStore(searchRobots, applyMiddleware(loggerr));
//     createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerr));

// ReactDOM.render(
//     <Provider store={store}>
//         <App/>
//     </Provider>
//     , document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
registerServiceWorker();