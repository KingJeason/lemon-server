'use strict';
const timestamps = require('mongoose-timestamp');

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const DraftSchema = new Schema({
    html: { type: String },
    markdown: { type: String },
    title: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    type: { type: String }, //  markdown | 富文本
    previewImage: { type: String }, // 背景图

  });

  DraftSchema.plugin(timestamps, {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  });

  return mongoose.model('Draft', DraftSchema);
};
