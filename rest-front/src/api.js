import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8000/api";

export default {
  getAllPosts() {
    return axios.get("/posts/");
  },

  createPost(payload) {
    return axios.post("/posts/", payload);
  },

  deletePost(payload) {
    return axios.delete("/posts/" + String(payload));
  }
};
