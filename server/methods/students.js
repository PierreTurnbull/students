import { Meteor } from 'meteor/meteor'
import Students from '../../imports/api/students'

Meteor.methods({
  createStudent: function ({ name }) {
    Students.insert({
      name,
      createdAt: new Date().toISOString()
    })
  }
})