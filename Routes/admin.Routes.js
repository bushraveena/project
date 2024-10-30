const routes = require("express").Router();
const adminController = require("../Controller/admin.Controller")


routes.get("/admin1", adminController.adminOne);
routes.post("/admin2", adminController.adminTwo);
routes.post("/admin3", adminController.adminThree);

module.exports = routes;