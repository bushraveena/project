const Routes = require("express").Router();
const {login,logout}=require("/MERN-23/todolist/Controller/authcontroller");
const{createvalidator}=require("../Validator/authValidator");



Routes.get("/login", createvalidator,login);
Routes.get("/logout", logout);

module.exports = Routes;