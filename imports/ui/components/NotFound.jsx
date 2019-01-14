import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';

class NotFound extends Component {
  render() {
    return (
      <div>
        <h1>Not found! The url is incorrect.</h1>
      </div>
    );
  }
}

export default NotFoundContainer = withTracker(() => {})(NotFound);

