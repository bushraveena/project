// const Routes = require("express").Router();
// const{
//     create,
//     update,
//     get,
//     deleteUser,
// }= require("../Controller/userController");
// const {Create,Update,GetDelete}=require("../Validator/userValidator");
// Routes.post("/create",Create,crea te);
// Routes.get("/get-user",get);
// Routes.patch("/update",Update,update);
// Routes.delete("/delete",GetDelete,deleteUser);
// module.exports=Routes;

  
const routes = require("express").Router();

const {
  create,
  update,
  getAll,
  getOne,
  deleteUser,
} = require("../controllers/userController");

const {
  Create,
  Update,
  GetDelete,
  Search,
} = require("../validations/userValidator");

routes.post("/create", Create, create);
routes.get("/get-users", getAll);
routes.get("/get-user", Search, getOne);
routes.patch("/update", Update, update);
routes.delete("/delete", GetDelete, deleteUser);
module.exports = routes;