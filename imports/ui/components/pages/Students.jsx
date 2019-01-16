import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import StudentsCollection from '../../../api/students';
import { Link } from 'react-router-dom';

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
        <Link to={`${this.props.match.path}/${student._id}`}>{student.name}</Link>
        <a style={
          {
            fontSize: '10px',
            textDecoration: 'underline',
            cursor: 'pointer',
            marginLeft: '10px'
          }}
          onClick={() => Meteor.call('deleteStudent', { _id: student._id})}>delete</a>
      </li>
    );
  }
}

export default StudentsContainer = withTracker(() => {
  return {
    students: StudentsCollection.find().fetch(),
  };
})(Students);
