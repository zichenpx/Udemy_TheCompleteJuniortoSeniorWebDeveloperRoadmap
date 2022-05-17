import { createNextState } from "@reduxjs/toolkit";
import React, { PureComponent } from "react";

class CounterButton extends PureComponent {
  /* This means that only the component from now on will 
  only render when its props actually change. */
  constructor() {
    super();
    this.state = {
      count: 0
    }
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   // console.log(nextProps, nextState);
  //   if (this.state.count !== nextState.count) {
  //     return true;
  //   }
  //   return false;
  // };

  updateCount = () => {
    this.setState(state => {
      return {count: this.state.count +1};
    });
    /* So any time you're using state like this or you need 
       to derive the next state from the current state, it's 
       recommended that you use the other way of updating 
       state, which is to grab the current state. And return 
       the new state {count: this.state.count +1} based 
       on this state. */
  }

  render() {
  console.log("CounterButton");
  return (
    <button 
      color={this.props.color} 
      onClick={this.updateCount}
      >
      Count: {this.state.count}
      </button>
  )
  }

}

export default CounterButton;