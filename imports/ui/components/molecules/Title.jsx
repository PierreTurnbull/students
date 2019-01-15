import React, { Component } from 'react';

class Title extends Component {
  render () {
    const H = `h${this.props.level || 1}`
    return (
      <H>
        { this.props.children }
      </H>
    )
  }
}

Title.propTypes = {
  level: (props, propName) => {
    const prop = props[propName]
    if (prop === null || prop === undefined) {
      return
    } else if (typeof prop !== 'number') {
      return new Error(`${propName} should be a number.`)
    } else if (prop > 6) {
      return new Error(`${propName} should be less than 7.`)
    }
  }
};

export default Title;