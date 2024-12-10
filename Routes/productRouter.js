const routes = require("express").Router();

const { middleware } = require("../middleware");
const { create, getAll } = require("../controllers/productController");

routes.post("/create", create);
routes.get("/get-all", middleware, getAll);

module.exports = routes;
