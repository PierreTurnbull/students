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

Meteor.methods({
  updateStudent: function ({ _id, name }) {
    Students.update({ _id }, {
      $set: {
        name,
        updatedAt: new Date().toISOString()
      }
    })
  }
})

Meteor.methods({
  deleteStudent: function ({ _id }) {
    Students.remove({ _id })
  }
})