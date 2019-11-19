import React from "react";
import "./App.css";
import api from "./api";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    let result = await api.createPost({
      title: this.state.title,
      body: this.state.body
    });
    console.log("completed:", result);
  };

  render() {
    return (
      <div className="App">
        <div className="postSection">
          <h2>대나무 숲 글 작성하기</h2>
          <form action="" onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
            />
            <textarea
              name="body"
              value={this.state.body}
              onChange={this.handleChange}
            />
            <button type="submit">제출하기</button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
