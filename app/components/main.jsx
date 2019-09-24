import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Nav from 'Nav';
import About from 'About';
import Examples from 'Examples';
import Weather from 'Weather';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <p>Main Comnponent</p>
        <Router>
          <Nav></Nav>
          <Route path="/" exact component={Weather} />
          <Route path="/weather" component={Weather} />
          <Route path="/about" component={About} />
          <Route path="/examples" component={Examples} />
        </Router>
      </div>
    )
  }
}