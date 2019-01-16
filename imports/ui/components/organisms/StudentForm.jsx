import React, { Component } from 'react';
import Input from '../molecules/Input.jsx';
import Button from '../molecules/Button.jsx';
import PropTypes from 'prop-types';

class StudentForm extends Component {
  constructor () {
    super();
    this.state = {
      studentName: '',
      errorMsg: null
    }
  }

  submitForm = async () => {
    await this.validateForm()
    !this.state.errorMsg && this.props.handler({ studentName: this.state.studentName })
    this.setState({ studentName: '' })
  }

  handleChange (field, value) {
    this.setState({
      [field]: value
    })
  }

  validateForm = () => {
    return this.setState({
      errorMsg: !this.state.studentName
        ? 'Name is required !'
        : null
      })
  }

  render () {
    return (
      <form>
        <Input
          label='Name:'
          name='name'
          value={this.state.studentName}
          onChange={(data) => (this.handleChange('studentName', data))}
          validationError={this.state.errorMsg} />
        <Button type='submit' handler={this.submitForm}/>
      </form>
    )
  }
}

StudentForm.propTypes = {
  handler: PropTypes.func.isRequired
}

export default StudentForm;