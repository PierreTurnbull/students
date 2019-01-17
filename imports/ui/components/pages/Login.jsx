import React, { Component } from 'react';
import AccountForm from '../organisms/AccountForm.jsx'

class Login extends Component {
  render() {
    return (
      <div>
        <h1>Login here</h1>
        <p>Hey you! This website is private. You shall login before you can access the website.</p>
        <AccountForm />
      </div>
    );
  }
}

export default Login;