import React, { Component } from "react";
import { connect } from "react-redux";
import { setSearchField, requestRobots } from "../actions"

import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
// import ErrorBoundary from "../components/ErrorBoundary";
import Header from "../components/Header";


import "./App.css";

const mapStateToProps = state => {
    return {
        // ↓This comes from reducer
        // searchField: state.searchRobots.searchField
        // because state has only one field, so↓
        searchField: state.searchRobots.searchField,
        // update the state
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        // Add another property, and this is going to be a function
        onRequestRobots: () => {
          // And this is going to be a function. And this function, remember, 
          // we don't want to necessarily just dispatch. We want to return a 
          // function from it in our case, is the requestRobots reducer.
          // return requestRobots(dispatch)
          // this is the same doing this
          return dispatch(requestRobots())
        }
    }
};

class App extends Component {
  /* no need anymore, because there's no more states, these robots 
     are now going to be returned as part of the this.props.onRequestRobots(). */
  // constructor() {
  //   super()
  //   this.state = {
  //     robots: []
  //   //   searchfield: ""
  //   }
  // }

  componentDidMount() {
    //   console.log(this.props.store);
    //   console.log(this.props.store.getState());
    // no need anymore
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then(response=> response.json())
    //   .then(users => {this.setState({ robots: users})});
    this.props.onRequestRobots();
  }

//   onSearchChange = (event) => {
//     this.setState({ searchfield: event.target.value })
//   }

  render() {
    // const { robots, searchfield } = this.state;
    // const { robots } = this.state;
    const { searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    // return !robots.length ?
    return isPending ?
      <h1>Loading</h1> :
      (
        <div className="tc">
          <Header />
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
/* connect() to something we call higher order function. 
    And a higher order function is a function that returns 
    another function. So Connect is going to run. And whatever 
    connect() does inside -> (), of this function is going to 
    return another function and because it returns another 
    function, it's going to run this part with the (App), 
    so that's how higher order components work. */