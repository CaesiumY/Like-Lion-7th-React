import React from "react";
import "./App.css";
import api from "./api";
import PostView from "./components/PostView";

import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      results: []
    };
    this.getPosts = this.getPosts.bind(this);
  }

  componentDidMount() {
    this.getPosts();
  }

  async getPosts() {
    const _results = await api.getAllPosts();
    this.setState({ results: _results.data });
    console.log(_results.data);
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
    this.setState({ title: "", body: "" });
    this.getPosts();
    console.log("completed:", result);
  };

  render() {
    return (
      <div className="App">
        <Container maxWidth="md">
          <Paper style={{ padding: "1rem", marginBottom: "1rem" }}>
            <div className="postSection">
              <h2>대나무 숲 글 작성하기</h2>
              <form action="" onSubmit={this.handleSubmit} className="postForm">
                <TextField
                  type="text"
                  name="title"
                  label="title"
                  variant="outlined"
                  value={this.state.title}
                  onChange={this.handleChange}
                />
                <TextField
                  name="body"
                  label="body"
                  multiline
                  rows="4"
                  variant="outlined"
                  margin="normal"
                  value={this.state.body}
                  onChange={this.handleChange}
                />
                <Button type="submit" variant="outlined" color="primary">
                  제출하기
                </Button>
              </form>
            </div>
          </Paper>
          <div className="viewSection">
            {this.state.results.map(post => (
              <PostView
                key={post.id}
                id={post.id}
                title={post.title}
                body={post.body}
                getPosts={this.getPosts}
              />
            ))}
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
