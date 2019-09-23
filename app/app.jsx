import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Main from 'Main';
import Nav from 'Nav';
import About from 'About';

ReactDOM.render(
  <Router>
    <Nav></Nav>
    <Route exact path="/" component={Main} />
    <Route path="/about" component={About} />
  </Router>,
  document.getElementById('app')
)