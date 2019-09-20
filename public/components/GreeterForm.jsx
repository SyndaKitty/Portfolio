import React from 'react';

export default class GreeterForm extends React.Component {
  constructor(props) {
    super(props);
  }
  onFormSubmit(e) {
    e.preventDefault();

    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if (name.length > 0) {
      updates.name = name;
      this.refs.name.value = '';
    }
    if (message.length > 0) {
      updates.message = message;
      this.refs.message.value = '';
    }

    this.props.onSubmit(updates);
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit.bind(this)}>
        <div><input type="text" ref="name" placeholder="Enter name"/></div>
        <div><textarea ref="message" placeholder="Enter message"/></div>
        <div><button>Submit</button></div>
      </form>
    )
  }
}
