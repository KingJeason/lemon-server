'use strict';
const timestamps = require('mongoose-timestamp');

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const DraftSchema = new Schema({
    top: { type: Boolean, default: false }, // 置顶帖
    good: { type: Boolean, default: false }, // 精华帖
    html: { type: String },
    markdown: { type: String },
    title: { type: String },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    type: { type: String }, //  markdown | 富文本
    previewImage: { type: String, default: '' }, // 背景图
    classify: { type: String, default: '阅读' }, // 分类, 总分类定义在config里
    isPublish: { type: Boolean, default: false }, // 是否发布
    publishTime: { type: Date }, // 发布的时间, 因为发布后是可以编辑的,所以不能取值于updateTime
    viewsCount: { type: Number, default: 0 }, // 浏览数
    commentsCount: { type: Number, default: 0 }, // 评论数
  });

  DraftSchema.plugin(timestamps, {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  });

  return mongoose.model('Draft', DraftSchema);
};
