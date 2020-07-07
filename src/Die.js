import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }


  handleClick() {
    this.props.handleClick(this.props.idx)
  }
  render() {
    return (
      <button
        className={"Die"}
        style={{ backgroundColor: this.props.locked ? "grey" : "black" }}
        
        // with an arrow function 
        //onClick={() => this.props.handleClick(this.props.idx)}
        // not using arrow function (premature performance)
        onClick={this.handleClick}
      >
        {this.props.val}
      </button>
    );
  }
}

export default Die;
