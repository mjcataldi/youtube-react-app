import React, { Component } from "react";
import SearchBar from "./SearchBar";
import YouTube from "../apis/youtube";
import VideoList from "./VideoList";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
  }

  onVideoSelect = video => {
    console.log("onVideoSelect App", video);
  };

  onTermSubmit = async term => {
    const response = await YouTube.get(`/search?q=${term}`);
    this.setState({ videos: response.data.items });
  };

  countVideos() {
    const videoCount = this.state.videos.length;
    console.log(this.state.videos.items);

    return videoCount === 0
      ? "Enter a search term"
      : `I have ${videoCount} videos.`;
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar
          onFormSubmit={this.onTermSubmit}
          Videos={this.state.videos.items}
        />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}
