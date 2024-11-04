 
 const connection= require("../dbconnection");
 
 const users = require("./users");
 const models = { users };
 
 //relations
 
 const db = {};
 db.connection = connection;
 connection.models=models;
 module.exports={db,models};