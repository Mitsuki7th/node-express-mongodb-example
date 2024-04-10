const joi = require('joi');
const { password } = require('../../../models/users-schema');

module.exports = {
  createUser: {
    body: {
      name: joi.string().min(1).max(100).required().label('Name'),
      email: joi.string().email().required().label('Email'),
      password: joi.string().min(6).max(32).required().label('Password'),
      // add password confirm
      passwordConfirm: joi
        .string()
        .valid(joi.ref('password'))
        .required()
        .label('Confirm Password')
        .messages({ 'any.only': 'Passwords must match' }),
    },
  },

  updateUser: {
    body: {
      name: joi.string().min(1).max(100).required().label('Name'),
      email: joi.string().email().required().label('Email'),
    },
  },

  changePassword: {
    body: {
      oldPassword: joi.string().min(6).max(32).required().label('Password'),
      newPassword: joi.string().min(6).max(32).required().label('New Password'),
      confirmNewPassword: joi
        .string()
        .valid(joi.ref('newPassword'))
        .required()
        .label('Confirm New Password')
        .messages({ 'any.only': 'Passwords must match' }),
    },
  },
};
