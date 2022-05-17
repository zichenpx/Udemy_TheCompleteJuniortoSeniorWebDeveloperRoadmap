import { createNextState } from "@reduxjs/toolkit";
import React, { Component } from "react";

import CounterButton from "./CounterButton"

// function Header() {
//   console.log("Header");
//   return (
//       <h1 className="f1">RoboFriends</h1>
//   )
// }

class Header extends Component {
  shouldComponentUpdate(nextProps, nextState){
    console.log(nextProps, nextState);
    return false;
  };
  render(){
    console.log("Header");
    return (
      <div>
        <h1 className="f1">RoboFriends</h1>
        <CounterButton color={"red"} />
      </div>
    )
  }
}

export default Header;