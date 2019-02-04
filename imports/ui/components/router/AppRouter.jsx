import React from 'react'
import Students from '../pages/Students.jsx'
import UpdateStudent from '../pages/UpdateStudent.jsx'
import CreateStudent from '../pages/CreateStudent.jsx'
import NotFound from '../pages/NotFound.jsx'
import { Switch, Route } from 'react-router-dom'



const AppRouter = () => (
  <Switch>
    <Route path="/students/:id" exact component={UpdateStudent} />
    <Route path="/students" exact component={Students} />
    <Route path="/create" exact component={CreateStudent} />
    <Route component={NotFound} />
  </Switch>
)

export default AppRouter