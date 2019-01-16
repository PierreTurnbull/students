import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import StudentsCollection from '../../../api/students';

class Students extends Component {
  render() {
    const students = this.props.students.map(
      student => this.getStudentLi(student)
    );

    return (
      <div>
        <h1>My student list :)</h1>
        {students.length ? <ul>{ students }</ul> : <p>No student.</p>}
      </div>
    );
  }

  getStudentLi(student) {
    return (
      <li key={student._id}>
        {student.name}
      </li>
    );
  }
}

export default StudentsContainer = withTracker(() => {
  return {
    students: StudentsCollection.find().fetch(),
  };
})(Students);
