 
 const connection= require("../dbconnection");
 
const users = require("./definitions/users");
const models = {users};

//relations

const db={};
db.sequelize = connection;
sequelize.models=models;
module.exports={db,models};
