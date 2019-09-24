import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Main from 'Main';
import Nav from 'Nav';
import About from 'About';
import Examples from 'Examples';

ReactDOM.render(
  <Router>
    <Nav></Nav>
    <Route exact path="/" component={Main} />
    <Route path="/about" component={About} />
    <Route path="/examples" component={Examples} />
  </Router>,
  document.getElementById('app')
)