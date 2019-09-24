import React from 'react';
import WeatherForm from 'WeatherForm';
import WeatherMessage from 'WeatherMessage';

export default class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  
  onSubmit(location) {
    this.setState({
      location: location
    });
  }

  render() {
    return (
      <div>
        <p>Weather component</p>
        <WeatherForm onSubmit={this.onSubmit.bind(this)}/>
        <WeatherMessage location={this.state.location}/>
      </div>
    );
  }
};