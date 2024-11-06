 
 const connection= require("../dbconnection");
 
 const users = require("./definitions/users");
 const models = {users};
 
 //relations
 
 const db = {};
 db.connection = connection;
 connection.models = models;
 module.exports={db, models };