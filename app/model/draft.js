'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const DraftSchema = new Schema({
    html: { type: String },
    markdown: { type: String },
    title: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    type: { type: String }, //  markdown | 富文本

  });

  return mongoose.model('Draft', DraftSchema);
};
