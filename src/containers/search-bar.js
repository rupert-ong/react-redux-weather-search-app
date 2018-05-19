import React, { Component } from 'react';

export default class SearchBar extends Component {
  state = {
    term: ''
  }

  onInputChange = e => {
    this.setState({
      term: e.target.value
    });
  }

  onFormSubmit = e => {
    e.preventDefault();
  }

  render() {
    const { term } = this.state;
    return (
      <form className="input-group mb-3" onSubmit={this.onFormSubmit}>
        <input
          type="text"
          value={term}
          className="form-control"
          placeholder="Enter a City Name"
          onChange={this.onInputChange} />
        <div className="input-group-append">
          <button type="submit" className="btn btn-outline-secondary">Submit</button>
        </div>
      </form>
    );
  }
}