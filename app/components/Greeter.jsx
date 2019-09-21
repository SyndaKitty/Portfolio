import React from 'react';
import GreeterMessage from 'GreeterMessage';
import GreeterForm from 'GreeterForm';

export default class Greeter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      message: this.props.message
    };
  }

  handleSubmit(updates) {
    this.setState(updates);
  }

  render() {
    var name = this.state.name;
    var message = this.state.message;
    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onSubmit={this.handleSubmit.bind(this)}/>
      </div>
    );
  }
}
Greeter.defaultProps = {
  name: "React",
  message: "This is from the component"
}