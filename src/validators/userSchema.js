const Joi = require('joi');

const schema = Joi.object().keys({
    name: Joi.string().alphanum().min(3).max(30).required(),
    surname: Joi.string().alphanum().min(3).max(30).required(),
    party: Joi.string().alphanum().min(0).max(10).required(),
    joinDate: Joi.date()
});

module.exports = schema;