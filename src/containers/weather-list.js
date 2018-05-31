import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';

class WeatherList extends Component {

  renderWeather = cityData => {
    const { id, name } = cityData.city;
    const tempList = cityData.list.map(weather => weather.main.temp);
    const pressureList = cityData.list.map(weather => weather.main.pressure);
    const humidityList = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={id}>
        <td>{name}</td>
        <td>
          <Chart data={tempList} color="orange"/>
        </td>
        <td>
          <Chart data={pressureList} color="blue"/>
        </td>
        <td>
          <Chart data={humidityList} color="red"/>
        </td>
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