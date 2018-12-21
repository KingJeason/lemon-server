'use strict';
const timestamps = require('mongoose-timestamp');

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    name: { type: String },
    loginname: { type: String },
    pass: { type: String },
    email: { type: String },
    avatar: { type: String },
    isBlock: { type: Boolean, default: true },

  });

  UserSchema.plugin(timestamps, {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  });
  return mongoose.model('User', UserSchema);
};
