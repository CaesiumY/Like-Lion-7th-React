import React from "react";
import "./App.css";
import api from "./api";
import PostView from "./components/PostView";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";

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
      <div className="App" style={{ backgroundColor: "#f5f5f5" }}>
        <Container maxWidth="md">
          <Paper style={{ padding: "1rem", marginBottom: "1rem" }}>
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
