import React from 'react';

export default class GreeterMessage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <p>{this.props.message}</p>
      </div>
    );
  }
}
GreeterMessage.defaultProps = {
  name: "React",
  message: "This is from the GreeterMessage component"
}