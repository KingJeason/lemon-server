'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    name: { type: String },
    loginname: { type: String },
    pass: { type: String },
    email: { type: String },
  });
  return mongoose.model('User', UserSchema);
};
