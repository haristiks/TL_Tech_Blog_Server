const Joi = require('joi');

const commentSchema = Joi.object({
  postId: Joi.string().required(),
  userId: Joi.string().required(),
  content: Joi.string().required(),
});

module.exports = commentSchema;
