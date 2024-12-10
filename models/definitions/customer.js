// const { DataTypes, Model } = require("sequelize");
// const connection = require("../../dbconnection");
// const { v4: uuid } = require("uuid");

// class customer extends Model {}

// customer.init(
//   {
//     customerId: {
//       type: DataTypes.STRING(60),
//       primaryKey: true,
//     },
//   },
//   {
//     modelName: "customer",
//     timestamps: true,
//     paranoid: true,
//     sequelize: connection,
//   }
// );

// // Hook to hash password before creation
// customer.beforeCreate(async (customer) => {
//   customer.customerId = uuid();
// });

// // Hook to remove the password field after creation

// module.exports = customer;


const { DataTypes, Model } = require("sequelize");
const connection = require("../../dbConnection");

class customers extends Model {}

customers.init(
  {
    customersId: {
      primaryKey: true,
      type: DataTypes.STRING(60), //default length of String is 255 and we can define in ()
    },
    // name : {
    //     type : DataTypes.STRING(60),
    //     allowNull : false,
    //     defaultValue : ""
    // },

    // username : {
    //     type : DataTypes.STRING(34),
    //     unique : true,
    //     allowNull : false,
    // },
    // email : {
    //     type : DataTypes.STRING(34),
    //     allowNull : false,
    //     defaultValue : ""
    // },
    // password : {
    //     type : DataTypes.STRING(1000),
    //     allowNull : false,
    // }
  },
  {
    name: "customers", // if you dont provide it will save class name for table name
    timestamps: true, //creadted at & updaed at
    paranoid: true, //add time of delete in deletedAt
    sequelize: connection,
  }
);

//hook
customers.beforeCreate(async (customers) => {
  customers.customersId = uuid();
});

module.exports = customers;