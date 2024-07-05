let Joi = require("joi");

let blog = {
    body: Joi.object().keys({
        title: Joi.string().required().trim(),
        content: Joi.string().required().trim(),
        author: Joi.string().required().strict(),
        tags:Joi.string().required().trim(),
        commemts:Joi.string().required().trim()
    })
}

module.exports = { blog }