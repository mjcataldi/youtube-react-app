import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    term: ""
  };

  onFormSubmit = event => {
    event.preventDefault();

    // TODO: make sure we call callback from parent component
    this.props.onFormSubmit(this.state.term);
  };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  render() {
    return (
      <div className="ui segment search-bar">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <input
              type="text"
              className="ui"
              placeholder="Search for a video!"
              onChange={this.onInputChange}
              value={this.state.term}
            />
          </div>
        </form>
      </div>
    );
  }
}
