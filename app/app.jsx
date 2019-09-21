import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Main from 'Main';

ReactDOM.render(
  <Router>
    <Route path="/" component={Main}>

    </Route>
  </Router>,
  document.getElementById('app')
)