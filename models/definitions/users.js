// const { DataTypes, Model } = require("sequelize");
// const connection = require("../../dbconnection");
// const { v4: uuid } = require("uuid");
// const { hash } = require("bcryptjs");
// //const { toDefaultValue } = require("sequelize/lib/utils");
// //const { Connection } = require("pg");

// class users extends Model {}

// users.init(
//   {
//     userId: {
//       primarykey: true,
//       type: DataTypes.STRING(60),
//     },
//     username: {
//       type: DataTypes.STRING(34),
//       unique: true,
//       allowNull: false,
//     },
//     name: {
//       type: DataTypes.STRING(60),
//       allowNull: false,
//     },

//     email: {
//       type: DataTypes.STRING(60),
//       allowNull: false,
//       defaultValue:""
//     },
//     password: {
//       type: DataTypes.STRING(1000),
//       allowNull: false,
//     },
//   },
//   {
//     name: "users",
//     timestamps: true,
//     paranoid: true,
//     sequelize: connection,
//   }
// );

// //hook
// users.beforeCreate(async (user) => {
//   user.userId = uuid();
//   user.password = await hash(user.password, 10);
// });
// users.afterCreate((user) => {
//   delete user.dataValues.password;
// });

// module.exports = users;

//Data base k tables ku use krna k liya Model
//Differnce b/w P.K and U.k(Unique) is that U.k can be null 
const { DataTypes,Model }=require("sequelize");
const connection =require("../../dbConnection");
const {v4 : uuid} = require("uuid"); // v4 : uuid to change package name we set manually
const {hash} = require("bcryptjs");

class users extends Model{}
//1.{} ==> database column name and thier attributes,constraints & types  &
//2.{} ==>
users.init({ 
    userId:{
        primaryKey : true,
        type : DataTypes.STRING(60), //default length of String is 255 and we can define in ()
    },
    name : {
        type : DataTypes.STRING(60),
        allowNull : false,
        defaultValue : ""
    },
    
    username : {
        type : DataTypes.STRING(34),
        unique : true,
        allowNull : false,
    },
    email : {
        type : DataTypes.STRING(34),
        allowNull : false,
        defaultValue : ""
    },
    password : {
        type : DataTypes.STRING(1000),
        allowNull : false,
    }
},
{
    name : "users", // if you dont provide it will save class name for table name 
    timestamps : true,//creadted at & updaed at
    paranoid : true ,//add time of delete in deletedAt
    sequelize : connection

});

//hook
users.beforeCreate(async(user)=>{
    user.userId = uuid();
    user.password = await hash(user.password, 10);
});

users.afterCreate((user)=>{
    delete user.dataValues.password;
});

module.exports = users;