import React from "react";

class Weather extends React.Component{
render(){
  return(
    <div> 
      {this.props.city && 
      <div className="info_weather">
        <p> Location: {this.props.city}, {this.props.country} </p>
        <p> Temperature: {this.props.temp} </p>
        <p> Sunrise: {this.props.sunrise} </p>
        <p> Pressure: {this.props.pressure} </p>
      </div>
      }
      <p className="error_info"> {this.props.error} </p>
    </div>
  )
}
}

export default Weather