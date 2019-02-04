import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor'
import StudentForm from '../organisms/StudentForm';
import Title from '../molecules/Title.jsx';
import ContentStyled from '../atoms/Grid/content'


class CreateStudent extends Component {
  createStudent = async (data) => {
    await Meteor.call('createStudent', {
      name: data.name
    })
    this.props.history.push('/students')
  }

  render () {
    return (
      <ContentStyled>
        <Title level={1}>Create a new student:</Title>
        <StudentForm handler={this.createStudent} />
      </ContentStyled>
    );
  }
}

export default CreateStudent;