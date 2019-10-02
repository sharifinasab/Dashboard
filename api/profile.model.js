const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const validate = require('mongoose-validator');

const Schema = mongoose.Schema;

const emailValidator = [
  validate({
    validator: 'isLength',
    arguments: [0, 40],
    message: 'Email must not exceed {ARGS[1]} characters.'
  }),
  validate({
    validator: 'isEmail',
    message: 'Email must be valid.'
  })
];


// Define collection and schema for Profile
let Profile = new Schema({
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  user_name: {
    type: String
  },
  company: {
    type: String
  },
  postal_code: {
    type: String
  },
  city: {
    type: String
  },
  country: {
    type: String
  },
  email: {
    type: String,
    required: [true, 'Email is required.'],
    unique: true,
    validate: emailValidator
  }
},{
    collection: 'profile'
});

module.exports = mongoose.model('Profile', Profile);