import React, { Component } from "react";
import SearchBar from "./SearchBar";
import YouTube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
  }

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  onTermSubmit = async term => {
    const response = await YouTube.get(`/search?q=${term}`);
    this.setState({ videos: response.data.items });
    this.setState({ selectedVideo: this.state.videos[0] });

    console.log(this.state.videos);
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
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}
