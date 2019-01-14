import React from 'react';
import Students from './components/Students.jsx';
import NotFound from './components/NotFound.jsx';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Students} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
