import React, { Component } from 'react'
import Nav from './components/layouts/Nav.jsx'
import AppRouter from './components/router/AppRouter.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';

class App extends Component {
  render () {
    return (
      <div>
        <Router>
          <div>
            { Meteor.userId() !== null && <Nav /> }
            <AppRouter />
          </div>
        </Router>
      </div>
    )
  }
}

export default AppContainer = withTracker(() => ({ userId: Meteor.userId()}))(App)