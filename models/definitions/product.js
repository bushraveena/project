// const { DataTypes, Model } = require("sequelize");
// const connection = require("../../dbconnection");
// const { v4: uuid } = require("uuid");
// const vendor = require("./vendor");

// class product extends Model {}

// product.init(
//   {
//     productId: {
//       type: DataTypes.STRING(60),
//       primaryKey: true,
//     },
//     description: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     productName: {
//       type: DataTypes.STRING(60),
//       allowNull: false,
//     },
//     vendorId: {
//       type: DataTypes.STRING(),
//       allowNull: false,
//       references: {
//         model: vendor,
//         key: "vendorId",
//       },
//     },
//   },
//   {
//     modelName: "product",
//     timestamps: true,
//     paranoid: true,
//     sequelize: connection,
//   }
// );
// product.beforeCreate(async (product) => {
//   product.productId = uuid();
// });
// module.exports = product;

const { DataTypes, Model } = require("sequelize");
const connection = require("../../dbConnection");
const { v4: uuid } = require("uuid"); // v4 : uuid to change package name we set manually
const vendors = require("./vendor");

class product extends Model {}
product.init(
  {
    productId: {
      primaryKey: true,
      type: DataTypes.STRING(60), //default length of String is 255 and we can define in ()
    },
    productName: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
    vendorId: {
      type: DataTypes.STRING(),
      allowNull: false,
      references: {
        model: vendors,
        key: "vendorId",
      },
    },
  },
  {
    name: "product", // if you dont provide it will save class name for table name
    timestamps: true, //creadted at & updaed at
    paranoid: true, //add time of delete in deletedAt
    sequelize: connection,
  }
);

//hook
product.beforeCreate(async (product) => {
  product.productId = uuid();
});

module.exports = product;