import React, { Component } from 'react';

export default class SearchBar extends Component {
  render() {
    return (
      <form className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Enter a City Name" />
        <div className="input-group-append">
          <button type="submit" className="btn btn-outline-secondary">Submit</button>
        </div>
      </form>
    );
  }
}