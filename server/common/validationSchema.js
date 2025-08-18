import Joi from "joi";

export const signUpValidationSchema = Joi.object({
    name: Joi.string().trim(true).regex(/^[a-zA-ZА-яіІїЇёЁ0-9\W]{1,30}$/)
        .min(2).max(20).required()
        .messages({
            'string.empty': "Not be an empty",
            'string.min': 'Must be longer than 2 letters',
            'string.max': 'Max length 20 letters',
            'any.required': 'Not be an empty'
        }),
    email: Joi.string().trim(true).empty('').regex(/^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/)
        .min(4).max(40).required()
        .messages({
            'string.empty': "Not be an empty",
            'string.pattern.base': "Insert your email. For example test@gmail.com",
            'any.required': 'Not be an empty. Insert your email. For example test@gmail.com',
            'string.min': 'Must be longer than 4 letters',
            'string.max': 'Max length 40 letters',
        }),
    password: Joi.string().trim(true).regex(/^[a-zA-ZА-яіІїЇёЁ0-9_\W]{1,30}$/)
        .min(8).max(20).required()
        .messages({
            'string.empty': "Not be an empty",
            'string.pattern.base': "Insert password",
            'any.required': 'Not be an empty. Insert password',
            'string.min': 'Must be longer than 8 letters',
            'string.max': 'Max length 20 letters'
        })
});