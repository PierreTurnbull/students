import React, { Component } from 'react';
import Input from '../molecules/Input.jsx';
import Button from '../molecules/Button.jsx';

class StudentForm extends Component {
  constructor () {
    super()
    this.state = {
      studentName: '',
    }
    this.refName = React.createRef()
  }

  submitForm = () => {
    this.setState({
      studentName: this.refName.current.value
    }, () => {
      // Persist
    })
  }

  render () {
    return (
      <form>
        <Input
          label='Name'
          placeholder='Student name'
          name='name'
          refName={this.refName} />
        <Button type='submit' handler={this.submitForm}/>
      </form>
    )
  }
}

export default StudentForm;