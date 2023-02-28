import React, { Component } from "react";
import "./VoteButton.css";

class ButtonVote extends Component {
  onTrigger = (event) => {
    this.props.parentCallback(event);
  };
  render() {
    return (
      <button className="btn" onClick={this.onTrigger}>
        Click to Vote
      </button>
    );
  }
}

class ButtonUnvote extends Component {
  onTrigger = (event) => {
    this.props.parentCallback(event);
  };
  render() {
    return (
      <button className="btn" onClick={this.onTrigger}>
        Click to Unvote
      </button>
    );
  }
}

export { ButtonVote, ButtonUnvote };