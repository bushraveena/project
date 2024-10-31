const Routes = require("express").Router();
const{
    create,
    update,
    get,
    deleteuser,
}= require("../Controller/userController");
const {Create,Update,Getdelete}=require("../Validator/userValidator");
Routes.post("/create",Create,create);
Routes.get("/get-user",get);
Routes.patch("/update",Update,update);
Routes.delete("/delete",Getdelete,deleteuser);
module.exports=Routes;
