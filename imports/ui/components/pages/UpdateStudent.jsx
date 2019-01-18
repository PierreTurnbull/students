import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor'
import StudentForm from '../organisms/StudentForm';
import Title from '../molecules/Title.jsx';
import { withTracker } from 'meteor/react-meteor-data';
import StudentsCollection from '../../../api/students';

class UpdateStudent extends Component {
  updateStudent = async (data) => {
    await Meteor.call('updateStudent', {
      _id: this.props.student._id,
      name: data.name
    })
  }

  render () {
    return (
      <div>
        <Title level={1}>Update student:</Title>
        <StudentForm handler={this.updateStudent} data={this.props.student} />
      </div>
    );
  }
}

export default UpdateStudentContainer = withTracker(props => {
  const students = StudentsCollection.find({
    _id: props.match.params.id
  }).fetch()
  return {
    student: students[0],
  }
})(UpdateStudent)