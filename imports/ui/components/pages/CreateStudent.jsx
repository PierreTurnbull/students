import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor'
import StudentForm from '../organisms/StudentForm';
import Title from '../molecules/Title.jsx';

class CreateStudent extends Component {
  createStudent (data) {
    Meteor.call('createStudent', {
      name: data.studentName
    })
  }

  render () {
    return (
      <div>
        <Title level={1}>Create a new student:</Title>
        <StudentForm handler={this.createStudent} />
      </div>
    );
  }
}

export default CreateStudent;