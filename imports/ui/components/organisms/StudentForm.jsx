import React, { Component } from 'react';
import Input from '../molecules/Input.jsx';
import Button from '../molecules/Button.jsx';
import PropTypes from 'prop-types';

class StudentForm extends Component {
  constructor () {
    super()
    this.state = {
      studentName: '',
    }
  }

  submitForm = () => {
    this.props.handler({ studentName: this.state.studentName })
    this.setState({ studentName: '' })
  }

  handleChange (field, value) {
    this.setState({
      [field]: value
    })
  }

  render () {
    return (
      <form>
        <Input
          label='Name:'
          name='name'
          value={this.state.studentName}
          onChange={(data) => (this.handleChange('studentName', data))} />
        <Button type='submit' handler={this.submitForm}/>
      </form>
    )
  }
}

StudentForm.propTypes = {
  handler: PropTypes.func.isRequired
}

export default StudentForm;