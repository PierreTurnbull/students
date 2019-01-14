import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import StudentsData from '../../../api/students';

class Students extends Component {
  render() {
    const students = this.props.students.map(
      student => this.getStudentLi(student)
    );

    return (
      <div>
        <h1>My student list :)</h1>
        <ul>{ students }</ul>
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
    students: StudentsData.find().fetch(),
  };
})(Students);
