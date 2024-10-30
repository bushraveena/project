const routes = require("express").Router();
const userController = require("../Controller/user.Controller");
const userValidator = require("../Validator/userValidator");

routes.get("/userOne", userController.userOne);

routes.post("/createUser", userValidator.createValidator, userController.userTwo);
routes.post("/loginUser", userValidator.loginValidator, userController.loginUser);

module.exports = routes;