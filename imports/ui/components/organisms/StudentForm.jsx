import React, { Component } from 'react';
import Input from '../molecules/Input.jsx';
import Button from '../molecules/Button.jsx';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const StyledForm = styled.form`
box-shadow: 0 4px 10px 0 rgba(202, 202, 202, 0.5);
background-color: #ffffff;
padding : 16px; 
border-radius: 8px;
max-width : 14em;
`;

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
          <StyledForm>
            <Input
              label='Nom'
              name='name'
              value={this.state.studentName}
              onChange={(data) => (this.handleChange('studentName', data))}
              placeholder='Ton nom'
              validationError={this.state.errorMsg} />
            <Button type='submit' handler={this.submitForm}/>
        </StyledForm>
    )
  }
}

StudentForm.propTypes = {
  handler: PropTypes.func.isRequired,
  data: PropTypes.object
}

export default StudentForm;