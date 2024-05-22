const Joi = require('joi');

const blogPostSchema = Joi.object({
  userId: Joi.string().required(),
  title: Joi.string().required(),
  content: Joi.string().required(),
});

module.exports = blogPostSchema;
