import React from 'react'
import Nav from './components/layouts/Nav.jsx'
import AppRouter from './components/router/AppRouter.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import styled from 'styled-components'

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: auto 2fr 1fr;
`;

const App = () => (
  <div>
    <Router>
      <StyledApp>
        <Nav />
        <AppRouter />
      </StyledApp>
    </Router>
  </div>
)

export default App
