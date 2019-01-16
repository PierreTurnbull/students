import React, { Component } from 'react'
import { withTracker } from 'meteor/react-meteor-data'
import StudentsCollection from '../../../api/students'
import Title from '../molecules/Title'

class Students extends Component {
  render() {
    return (
      <div>
        <h1>My student</h1>
        <ul>
          <li>
            <Title level={2}>Name:</Title>
            <p>{this.props.student ? this.props.student.name : ''}</p>
          </li>
        </ul>
      </div>
    )
  }
}

export default StudentsContainer = withTracker(props => {
  const students = StudentsCollection.find({
    _id: props.match.params.id
  }).fetch()
  return {
    student: students[0],
  }
})(Students)
