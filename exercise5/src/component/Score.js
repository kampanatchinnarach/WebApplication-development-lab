import React, { Component } from "react";
import "./Score.css";

class Score extends Component {
  render() {
    return <div className="Score-container" >{this.props.score}</div>;
  }
}

export default Score;