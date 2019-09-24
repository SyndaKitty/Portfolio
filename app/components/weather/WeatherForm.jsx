import React from 'react';

export default class WeatherForm extends React.Component {
  constructor(props) {
    super(props);
  }

  onFormSubmit(e) {
    e.preventDefault();

    let locationInput = this.refs.location;
    if (locationInput.value.length > 0) {
      this.props.onSubmit(locationInput.value);
    }

    locationInput.value = '';
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)}>
        <div><input type="text" ref="location" placeholder="Enter city name"></input></div>
        <div><button>Get Weather</button></div>
      </form>
    );
  }  
}