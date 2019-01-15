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
        <label>{this.props.label}</label>
        <input
          type='text'
          name={this.props.name}
          onChange={this.handleChange}
          value={this.props.value}
          placeholder={this.props.placeholder}
          ref={this.state.refName} />
      </div>
    )
  }
}

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
}

export default Input