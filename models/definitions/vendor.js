// const { DataTypes, Model } = require("sequelize");
// const connection = require("../../dbconnection");
// const { v4: uuid } = require("uuid");

// class vendor extends Model {}

// vendor.init(
//   {
//     vendorId: {
//       type: DataTypes.STRING(60),
//       primaryKey: true,
//     },
//     vendorName: {
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
//     },
//     password: {
//       type: DataTypes.STRING(1000),
//       allowNull: false,
//     },
//   },
//   {
//     modelName: "vendor",
//     timestamps: true,
//     paranoid: true,
//     sequelize: connection,
//   }
// );
// vendor.beforeCreate(async (vendor) => {
//   vendor.vendorId = uuid();
// });
// module.exports = vendor;

/Data base k tables ku use krna k liya Model
//Differnce b/w P.K and U.k(Unique) is that U.k can be null 
const { DataTypes,Model }=require("sequelize");
const connection =require("../../dbConnection");
const {v4 : uuid} = require("uuid"); // v4 : uuid to change package name we set manually
const {hash} = require("bcryptjs");

class vendor extends Model{}
//1.{} ==> database column name and thier attributes,constraints & types  &
//2.{} ==>
vendor.init({ 
    vendorId:{
        primaryKey : true,
        type : DataTypes.STRING(60), //default length of String is 255 and we can define in ()
    },
    name : {
        type : DataTypes.STRING(60),
        allowNull : false,
    },
    
    username : {
        type : DataTypes.STRING(34),
        unique : true,
        allowNull : false,
    },
    email : {
        type : DataTypes.STRING(34),
        allowNull : false,
    },
    password : {
        type : DataTypes.STRING(1000),
        allowNull : false,
    }
},
{
    name : "vendor", // if you dont provide it will save class name for table name 
    timestamps : true,//creadted at & updaed at
    paranoid : true ,//add time of delete in deletedAt
    sequelize : connection

});

//hook
vendor.beforeCreate(async(vendor)=>{
    vendor.vendorId = uuid();
    vendor.password = await hash(vendor.password, 10);
});

// vendor.afterCreate((vendor)=>{
//     delete vendor.dataValues.password;
// });

module.exports = vendor;