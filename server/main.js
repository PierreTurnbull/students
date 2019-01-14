import { Meteor } from 'meteor/meteor';
import Students from '/imports/api/students';

function insertStudent(name) {
  Students.insert({ name, createdAt: new Date() });
}

Meteor.startup(() => {
  // If the Students collection is empty, add some data.
  if (Students.find().count() === 0) {
    insertStudent('Salah');
    insertStudent('Pierre');
    insertStudent('Victor');
  }
});
