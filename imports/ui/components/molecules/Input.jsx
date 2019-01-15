import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Input extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: ''
    }
  }

  changeHandler = e => {
    this.setState({
      value: e.target.value
    })
  }

  render () {
    return (
      <div>
        <label>{this.props.label}</label>
        <input
          type="text"
          ref={this.props.refName}
          name={this.props.name}
          onChange={this.changeHandler}
          value={this.state.value}
          placeholder={this.state.placeholder} />
      </div>
    )
  }
}

Input.propTypes = {
  refName: PropTypes.object.isRequired,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string
}

export default Input