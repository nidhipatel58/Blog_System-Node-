let Joi = require("joi");

let user = {
    body: Joi.object().keys({
        username: Joi.string().required().trim(),
        email: Joi.string().required().trim(),
        password: Joi.string().min(7).required().strict()
    })
}

module.exports = { user }