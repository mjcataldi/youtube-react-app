import React, { Component } from "react";
import SearchBar from "./SearchBar";
import YouTube from "../apis/youtube";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  onTermSubmit = async term => {
    const videos = await YouTube.get(`/search?q=${term}`);
    console.log(videos.data.items);
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}
