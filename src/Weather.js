import React from "react";
import { Alert, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from "reactstrap";
import WeatherCard from "./WeatherCard";
import axios from "axios";
import { BsArrowCounterclockwise } from "react-icons/bs";
import Quotes from "./Quotes";

class Weather extends React.Component {

  constructor() {
    super()
    Date.prototype.addDays = (days) => {
      let date = new Date();
      date.setDate(date.getDate() + days)
      return date;
    }
    this.rerenderParentCallback = this.rerenderParentCallback.bind(this);
  }

  rerenderParentCallback() {
    this.forceUpdate();
  }

  card = { width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }
  appId = 'd4d30ddd6572e38d2f4a1a0da77eea30'
  state = { latitude: undefined, longitude: undefined, data: undefined, size: 0, quote: 'Something good is coming...' }

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.storeLocation);
    } else {
      alert("Geolocation is not supported by this browser.")
      this.state({
        latitude: 'n/a',
        longitude: 'n/a'
      })
    }
  }

  storeLocation = (position) => {
    this.getWeatherInfo(position.coords.latitude, position.coords.longitude)
  }

  getWeatherInfo = (lat, long) => {
    axios.get('https://api.openweathermap.org/data/2.5/onecall?' +
      'lat=' + lat + '&' +
      'lon=' + long + '&units=metric' + '&' +
      'appid=' + this.appId).then((resp) => {

        this.setState({
          data: resp.data,
          latitude: lat,
          longitude: long
        })
      }).catch(err => { console.log('error getting weather' + err) })
  }

  componentDidMount() {
    this.getLocation()
  }


  getDay = (num) => {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    return weekday[num];
  }

  rows = []

  render() {

    if (this.state.data != undefined) {

      this.rows = []
      let days = this.state.data.daily;

      for (var i = 0; i < 6; i++) {

        let dayOfWeek = this.getDay(((new Date()).getDay() + i) % 7)
        let date = new Date().addDays(i)
        let dayNum = date.getDate().toLocaleString('default', { 'month': 'long' });
        let dayFinal = dayOfWeek + ' ' + dayNum

        let dayType = days[i].weather[0].main
        let max = days[i].temp.max
        let min = days[i].temp.min

        this.rows.push((<WeatherCard key={i} day={dayFinal} dayType={dayType} max={max} min={min} />))
      }
    } else {
      for (var i = 0; i < 6; i++) {
        this.rows.push((<WeatherCard />))
      }
    }


    return (

      <div>
        <div style={{ width: '50%', display: 'flex', 'margin-left': '30%' }}>
          <Quotes rerenderParentCallback={this.rerenderParentCallback} />
        </div>

        <div style={{ display: 'flex', 'margin-left': '30%' }}>
          <div style={{ width: '50%' }}>
            <div style={this.card}>
              {this.rows.slice(0, 3)}
            </div>
            <br />
            <div style={this.card}>
              {this.rows.slice(3)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Weather;