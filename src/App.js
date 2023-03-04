import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "94481387c46450c7e6a5dfbf656410bf";

class App extends React.Component{

  state ={
    temp: undefined,
    city: undefined,
    country: undefined,
    sunrise: undefined,
    pressure: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault()
    var city = e.target.elements.city.value
    
    if(city) {
    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&inits=metric`)
    const data = await api_url.json()
    console.log(data)

      var sunrise = data.sys.sunrise
      var date = new Date()
      date.setTime(sunrise)
      var sunrise_date = date.getHours() + ":" + 0 + date.getMinutes() + ":" + date.getSeconds();
      
      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        sunrise: sunrise_date,
        pressure: data.main.pressure,
        error: undefined
      })
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        sunrise: undefined,
        pressure: undefined,
        error: "Please, write the city!"
      })
    }
  }

  render(){
    return(
      <div className="wrapper">
            <div className="info_header">
              <Info />
            </div>
            <div>
            <Form weatherMethod={this.gettingWeather} />
            <Weather 
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          sunrise={this.state.sunrise}
          pressure={this.state.pressure}
          error={this.state.error} />
            </div>
          </div>
    )
  }
}

export default App;