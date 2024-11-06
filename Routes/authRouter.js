const Routes = require("express").Router();
const {login,logout}=require("../Controller/authController");
const{createValidator}=require("../Validator/authValidator");



Routes.get("/login",createValidator ,login);
Routes.get("/logout", logout);

module.exports = Routes;