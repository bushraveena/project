const {DataTypes,Model}=  require("sequelize");
const connection = require("../dbconnection");
const { toDefaultValue } = require("sequelize/lib/utils");
//const { Connection } = require("pg");
 
  class users extends Model{}
  
  users.init({
    userid:{
        primarykey:true,
        type: DataTypes.STRING(60),

    },
    username:{
        type:DataTypes.STRING(34),
        unique:true,
        allowNull:false,
    },
    name:{
type:DataTypes.STRING(60),
allowNull:false,
    },
    password:{
        type: DataTypes.STRING(1000),
        allowNull:false,
    },

  },
  {
    name:"users",
    timestamps:true,
    paranoid:true,
    sequelize: connection

  });
  module.exports=users;