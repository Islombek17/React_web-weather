import React from "react";

class Form extends React.Component{
  render(){
    return(
      <form onSubmit={this.props.weatherMethod} >
        <input className="input_form" type="text" name="city" placeholder="City"/>
        <button className="button_form"> Get a Weather </button>
      </form>
    )
  }
}

export default Form