import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {

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
          { 
            weather.length > 0 && weather.map( data => 
              <tr key={data.city.id}>
                <td colSpan="4">
                  { data.city.name  }
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
    );
  }
}


const mapStateToProps = ({ weather }) => ({
  weather
});

export default connect(mapStateToProps)(WeatherList);