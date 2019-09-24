import React from 'react';

export default class WeatherMessage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.location)
    {
      return <p>City of {this.props.location}</p>
    }
    return <p></p>
  }  
}