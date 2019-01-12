const Joi = require('joi');

const schema = Joi.object().keys({
    title: Joi.string().alphanum().min(3).max(30).required(),
    category: Joi.string().alphanum().min(3).max(30).required(),
    date: Joi.date().required,
    description: Joi.string().alphanum().min(0).max(50)
});

module.exports = schema;