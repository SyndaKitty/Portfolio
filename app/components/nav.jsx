import React from 'react';
import {NavLink} from 'react-router-dom'

export default class Nav extends React.Component {
  render() {
    return (
      <div>
        <h3>Nav Component</h3>
        <NavLink to="/" exact activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</NavLink>
        <NavLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</NavLink>
        <NavLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</NavLink>
      </div>
    );
  }
}