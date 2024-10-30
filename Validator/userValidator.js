const joi = require("joi");

const createUserValidator = joi.object({
  name: joi.string().min(3).max(5).required(),
  username: joi.string().alphanum().required(),
  password: joi.string().min(3).max(5).required(),
});

const loginUserValidator = joi.object({
  username: joi.string().alphanum().required(),
  password: joi.string().min(3).max(5).required(),
});

module.exports = {
  createValidator: async (req, res, next) => {
    try {
      await createUserValidator.validateAsync(req.body);
      next();
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  },
  loginValidator: async (req, res, next) => {
    try {
      await loginUserValidator.validateAsync(req.body);
      next();
    } catch (error) {
      return res.status(400).send({ error: error.message });
    }
  },
};