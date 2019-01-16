import React from 'react'
import Nav from './components/layouts/Nav.jsx'
import AppRouter from './components/router/AppRouter.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => (
  <div>
    <Router>
      <div>
        <Nav />
        <AppRouter />
      </div>
    </Router>
  </div>
)

export default App
