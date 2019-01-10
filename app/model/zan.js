'use strict';
const timestamps = require('mongoose-timestamp');

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const ZanSchema = new Schema({
    DraftId: { type: mongoose.Schema.Types.ObjectId }, // 关联的文章Id
    type: { type: Number }, // 1.作品点赞 | 2. 评论地拿着呢
    UserId: { type: mongoose.Schema.Types.ObjectId },
    status: { type: Boolean }, // true: 有效 | false: 无效
  });

  ZanSchema.plugin(timestamps, {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  });
  return mongoose.model('Zan', ZanSchema);
};
