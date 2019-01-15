import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Button extends Component {
  handleClick = event => {
    event.preventDefault()
    this.props.handler && this.props.handler()
  }

  render = () => {
    return (
      <input
        type={this.props.type === 'submit' ? 'submit' : 'button'}
        onClick={() => (this.handleClick(event))}
        value='valider' />
    )
  }
}

Button.propTypes = {
  handler: PropTypes.func,
  type: PropTypes.string
}

export default Button