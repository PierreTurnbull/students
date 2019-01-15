import React, { Component } from 'react';
import StudentForm from '../organisms/StudentForm';
import Title from '../molecules/Title.jsx';

class CreateStudent extends Component {
  createStudent (data) {
    console.log('create!', data)
  }

  render () {
    return (
      <div>
        <Title hLevel={2}>Create a new student:</Title>
        <StudentForm handler={this.createStudent} />
      </div>
    );
  }
}

export default CreateStudent;