import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Input extends Component {
  constructor (props) {
    super(props)
    this.state = {
      refName: this.props.name
    }
  }

  handleChange = () => {
    const newValue = this.refs[this.state.refName].value
    this.props.onChange && this.props.onChange(newValue)
  }

  render () {
    return (
      <div>
        {this.props.label && <label>{this.props.label}</label>}
        <input
          type='text'
          name={this.props.name}
          onChange={this.handleChange}
          value={this.props.value}
          placeholder={this.props.placeholder}
          ref={this.state.refName} />
        {this.props.validationError && <p>Error: {this.props.validationError}</p>}
      </div>
    )
  }
}

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  validationError: PropTypes.string
}

export default Input