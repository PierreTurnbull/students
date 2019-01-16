import React, { Component } from 'react';
import Input from '../molecules/Input.jsx';
import Button from '../molecules/Button.jsx';
import PropTypes from 'prop-types';

class StudentForm extends Component {
  constructor (props) {
    super(props);
    this.state = {
      student: props.data || { name: '' },
      errorMsg: null
    }
  }

  componentWillReceiveProps (props) {
    this.setState({ student: props.data })
  }

  submitForm = async () => {
    await this.validateForm()
    !this.state.errorMsg && this.props.handler(this.state.student)
    this.setState({ student: { name: '' } })
  }

  handleChange (field, value) {
    this.setState({
      student: {
        [field]: value
      }
    })
  }

  validateForm = () => {
    return this.setState({
      errorMsg: !this.state.student.name
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
          value={this.state.student.name}
          onChange={(data) => (this.handleChange('name', data))}
          validationError={this.state.errorMsg} />
        <Button type='submit' handler={this.submitForm}/>
      </form>
    )
  }
}

StudentForm.propTypes = {
  handler: PropTypes.func.isRequired,
  data: PropTypes.object
}

export default StudentForm;