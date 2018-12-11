import axios from "axios";

const GOOGLE_API_KEY = "AIzaSyBsgAEYLD1mo9nFFlvYbYS1v0QAYNUrlNQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: GOOGLE_API_KEY
  }
});
