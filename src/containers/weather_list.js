import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {

  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273);
    const pressures = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat } = cityData.city.coord;

    return(
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat}/></td>
        <td><Chart data={temps} color={"red"} units="C"/></td>
        <td><Chart data={pressures} color={"green"} units="hPa"/></td>
        <td><Chart data={humidities} color={"orange"} units="%"/></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th style={{"width" : 200}}>City</th>
            <th style={{"width" : 200}}>Temperature</th>
            <th style={{"width" : 200}}>Pressure</th>
            <th style={{"width" : 200}}>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }){ //imports only weather from state
  return { weather };
}
//puts weather on weatherlist's props

export default connect(mapStateToProps)(WeatherList);
//exports the connected version of weatherlist
