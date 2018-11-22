'use strict';

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
  return mongoose.model('User', UserSchema);
};
