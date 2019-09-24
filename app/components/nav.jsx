import React from 'react';
import {NavLink} from 'react-router-dom'

export default class Nav extends React.Component {
  render() {
    return (
      <div>
        <h3>Nav Component</h3>
        <NavLink to="/">Get Weather</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/examples">Examples</NavLink>
      </div>
    );
  }
}