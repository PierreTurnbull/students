import React from 'react';
import Students from './components/pages/Students.jsx';
import CreateStudent from './components/pages/CreateStudent.jsx';
import NotFound from './components/pages/NotFound.jsx';
import Nav from './components/layouts/Nav.jsx';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => (
  <div>
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Students} />
          <Route path="/create" exact component={CreateStudent} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
