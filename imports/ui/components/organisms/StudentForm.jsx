import React, { Component } from 'react';
import Input from '../molecules/Input.jsx';
import Button from '../molecules/Button.jsx';
import StudentsCollection from '../../../api/students';

class StudentForm extends Component {
  constructor () {
    super()
    this.state = {
      studentName: '',
    }
  }

  submitForm = () => {
    StudentsCollection.insert({
      name: this.state.studentName,
      createdAt: new Date()
    })
    this.setState({
      studentName: ''
    })
  } // next step: créer un middleware dans le back pour intégrer le createdAt systématiquement au insert.

  handleChange (field, value) {
    this.setState({
      [field]: value
    })
  }

  render () {
    return (
      <form>
        <Input
          label='Name'
          placeholder='Write here'
          name='name'
          value={this.state.studentName}
          onChange={(data) => (this.handleChange('studentName', data))} />
        <Button type='submit' handler={this.submitForm}/>
      </form>
    )
  }
}

export default StudentForm;