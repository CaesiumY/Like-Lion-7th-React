import React, { Component } from "react";

export default class postView extends Component {
  render() {
    const { title, body, id } = this.props;

    return (
      <div>
        <p>{id}</p>
        <h3>{title}</h3>
        <p>{body}</p>
        <hr />
      </div>
    );
  }
}
