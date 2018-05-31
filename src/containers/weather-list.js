import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Sparklines, SparklinesLine } from 'react-sparklines'

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
          <Sparklines data={tempList} height={120} width={180}><SparklinesLine color="green"/></Sparklines>
        </td>
        <td>
          <Sparklines data={pressureList} height={120} width={180}><SparklinesLine color="blue"/></Sparklines>
        </td>
        <td>
          <Sparklines data={humidityList} height={120} width={180}><SparklinesLine color="red"/></Sparklines>
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