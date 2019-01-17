import React from 'react'
import { Link } from 'react-router-dom'
import AccountForm from '../organisms/AccountForm.jsx'

const Nav = () => (
  <header>
    <nav>
      <ul>
        <li><Link to='/students'>Student list</Link></li>
        <li><Link to='/create'>Create a student</Link></li>
        <li><AccountForm /></li>
      </ul>
    </nav>
  </header>
)

export default Nav;
