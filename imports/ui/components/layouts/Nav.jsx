import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyledNav = styled.nav`
width: 96px;
height: 100vh;
background-color: #ffffff; 
padding : 1em;
display: flex;
flex-direction: column;
`;

const StyledLink = styled(Link)`
font-family: Lato;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #52565f;
  margin : .3em 0em;

`;



const Nav = () => (
  <StyledNav>
    <StyledLink to='/students'>Student list</StyledLink>
  </StyledNav>
)

export default Nav;
