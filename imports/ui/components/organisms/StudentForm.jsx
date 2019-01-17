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
  handler: PropTypes.func.isRequired
}

export default StudentForm;