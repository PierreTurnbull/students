import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import StudentsCollection from '../../../api/students';
import { Link } from 'react-router-dom';
import ContentStyled from '../atoms/Grid/content'
import styled from "styled-components";
import ListItem from "../molecules/ListItem/ListItem";
import ButtonLink from "../atoms/ButtonLink/ButtonLink";

const MainTitle = styled.h1`
font-family: Lato;
font-size: 28px;
font-weight: normal;
font-style: normal;
font-stretch: normal;
line-height: normal;
letter-spacing: normal;
color: #52565f;
margin-bottom: 32px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledUl = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-gap: 16px;
  width: 100%;
`

class Students extends Component {
  render() {
    const students = this.props.students.map(
      student => this.getStudentLi(student)
    );

    return (
      <ContentStyled>
        <Header>
          <MainTitle>Liste d'élève</MainTitle>
          <ButtonLink to="/create">Ajouter</ButtonLink>
        </Header>
        {students.length ? <StyledUl>{students}</StyledUl> : <p>No student.</p>}
      </ContentStyled>
    );
  }

  getStudentLi(student) {
    return (
      <ListItem
        key={student._id}
        to={`${this.props.match.path}/${student._id}`}
        primaryText={student.name}
        closeIcon={
          <div style={{
            fontSize: '10px',
            cursor: 'pointer',
            marginLeft: '10px',
            color: 'red',
          }}
            onClick={(e) => { e.preventDefault(); Meteor.call('deleteStudent', { _id: student._id }) }}
          >
            delete
          </div>
        }

        editIcon={
          <Link style={
            {
              fontSize: '10px',
              textDecoration: 'none',
              cursor: 'pointer',
              marginLeft: '10px',
              color: '#52565f'
            }} to={`${this.props.match.path}/${student._id}`}>
            editer
            </Link>
        }


      >
      </ListItem>
    );
  }
}

export default StudentsContainer = withTracker(() => {
  return {
    students: StudentsCollection.find().fetch(),
  };
})(Students);
