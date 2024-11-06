const Routes = require("express").Router();
const{
    create,
    update,
    get,
    deleteUser,
}= require("../Controller/userController");
const {Create,Update,GetDelete}=require("../Validator/userValidator");
Routes.post("/create",Create,create);
Routes.get("/get-user",get);
Routes.patch("/update",Update,update);
Routes.delete("/delete",GetDelete,deleteUser);
module.exports=Routes;

  