import React, { Component } from 'react';
import ContentStyled from '../atoms/Grid/content'


class NotFound extends Component {
  render() {
    return (
      <ContentStyled>
        <h1>Not found! The url is incorrect.</h1>
      </ContentStyled>
    );
  }
}

export default NotFound;