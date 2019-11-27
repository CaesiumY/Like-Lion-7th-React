import React, { Component } from "react";
import api from "../api";

export default class postView extends Component {
  handleDelete = async e => {
    await api.deletePost(e.target.value);
    this.props.getPosts();
  };

  render() {
    const { title, body, id } = this.props;

    return (
      <div>
        <p>{id}</p>
        <h3>{title}</h3>
        <p>{body}</p>
        <button value={id} onClick={this.handleDelete}>
          삭제하기
        </button>
        <hr />
      </div>
    );
  }
}
