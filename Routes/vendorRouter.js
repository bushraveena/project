const routes = require("express").Router();

const { create } = require("../controllers/vendorController");

routes.post("/create", create);
module.exports = routes;
