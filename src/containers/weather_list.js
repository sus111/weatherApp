import React, { Component } from 'react';
import  { connect } from 'react-redux';

class WeatherList extends Component {

  renderWeather(cityData){
    <tr>
      <td>
        {cityData.city.name}
      </td>
    </tr>
  }

  render(){
    return (
      <table className="talbe table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map{this.renderWeather}}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }){
  return { weather };
}
//puts weather on weatherlist's props

export default connect(mapStateToProps)(WeatherList);
//exports the connected version of weatherlist
