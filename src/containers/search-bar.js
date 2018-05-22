import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchWeather } from '../actions';

class SearchBar extends Component {
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
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    const { term } = this.state;
    return (
      <form className="input-group mb-3" onSubmit={this.onFormSubmit}>
        <input
          type="text"
          value={term}
          className="form-control"
          placeholder="Get a 5 day forecast for your city"
          onChange={this.onInputChange} />
        <div className="input-group-append">
          <button type="submit" className="btn btn-outline-secondary">Submit</button>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchWeather: city => dispatch(fetchWeather(city))
});

export default connect(null, mapDispatchToProps)(SearchBar);