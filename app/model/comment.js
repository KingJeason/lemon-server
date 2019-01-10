'use strict';
const timestamps = require('mongoose-timestamp');

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const CommentSchema = new Schema({
    DraftId: { type: mongoose.Schema.Types.ObjectId }, // 关联的文章Id
    content: { type: 'String' },
    UserId: { type: mongoose.Schema.Types.ObjectId },
  });

  CommentSchema.plugin(timestamps, {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  });
  return mongoose.model('Comment', CommentSchema);
};
