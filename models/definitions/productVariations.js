// const { DataTypes, Model } = require("sequelize");
// const connection = require("../../dbconnection");
// const { v4: uuid } = require("uuid");
// const product = require("./product");

// class productVariation extends Model {}

// productVariation.init(
//   {
//     productVariationId: {
//       type: DataTypes.STRING(60),
//       primaryKey: true,
//     },

//     variationName: {
//       type: DataTypes.STRING(60),
//       allowNull: false,
//     },
//     description: {
//       type: DataTypes.STRING(60),
//       allowNull: false,
//     },
//     quantity: {
//       type: DataTypes.STRING(60),
//       allowNull: false,
//     },

//     price: {
//       type: DataTypes.DECIMAL(10, 2),
//       allowNull: false,
//     },
//     productId: {
//       type: DataTypes.STRING(),
//       allowNull: false,
//       references: {
//         modelName: product,
//         key: "productId",
//       },
//     },
//   },
//   {
//     modelName: "ProductVariation",
//     timestamps: false, // Avoid using default timestamps
//     sequelize: connection,
//   }
// );
// productVariation.beforeCreate(async (productVariation) => {
//   productVariation.productVariationId = uuid();
// });
// module.exports = productVariation;


const { DataTypes, Model } = require("sequelize");
const connection = require("../../dbConnection");
const { v4: uuid } = require("uuid"); // v4 : uuid to change package name we set manually
const products = require("./product");

class productVariation extends Model {}
productVariation.init(
  {
    productVariationId: {
      primaryKey: true,
      type: DataTypes.STRING(60), //default length of String is 255 and we can define in ()
    },
    variataionName: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    quantity: {
      type: DataTypes.STRING(),
      allowNull: false,
    },

    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    productId: {
      type: DataTypes.STRING(),
      allowNull: false,
      references: {
        model: products,
        key: "productId",
      },
    },
  },
  {
    name: "productVariation", // if you dont provide it will save class name for table name
    timestamps: true, //creadted at & updaed at
    paranoid: true, //add time of delete in deletedAt
    sequelize: connection,
  }
);

//hook
productVariation.beforeCreate(async (productVariation) => {
  productVariation.variationId = uuid();
});

// users.afterCreate((user)=>{
//     delete user.dataValues.password;
// });

module.exports = productVariation;