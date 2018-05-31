import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {

  renderWeather = cityData => {
    const { id, name } = cityData.city;
    return (
      <tr key={id}>
        <td colSpan="4">{name}</td>
      </tr>
    );
  }

  render() {
    const { weather } = this.props;

    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          { weather.length > 0 && weather.map(this.renderWeather) }
        </tbody>
      </table>
    );
  }
}


const mapStateToProps = ({ weather }) => ({
  weather
});

export default connect(mapStateToProps)(WeatherList);