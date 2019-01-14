import React from 'react';
import Students from './Students.jsx';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const App = () => (
  <Router>
    <Route path="/" exact component={Students} />
  </Router>
);

export default App;
