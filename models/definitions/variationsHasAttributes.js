// const { DataTypes, Model } = require("sequelize");
// const connection = require("../../dbconnection");
// const { v4: uuid } = require("uuid");
// const productVariation = require("./productVariations");
// const attributes = require("./attributes");

// class variationHasAttributes extends Model {}

// variationHasAttributes.init(
//   {
//     variationHasAttributesId: {
//       primarykey: true,
//       type: DataTypes.STRING(60),
//     },
//     productVariationId: {
//       type: DataTypes.STRING(),
//       references: {
//         model: productVariation,
//         key: "productVariationId",
//       },
//     },

//     attributesId: {
//       type: DataTypes.STRING(),
//       references: {
//         model: attributes,
//         key: "attributesId",
//       },
//     },
//   },
//   {
//     name: "variationHasAttributes",
//     timestamps: true,
//     paranoid: true,
//     sequelize: connection,
//   }
// );

// //hook
// variationHasAttributes.beforeCreate(async (variationHasAttributes) => {
//   variationHasAttributes.variationHasAttributesId = uuid();
// });

// module.exports = variationHasAttributes;


const { DataTypes, Model } = require("sequelize");
const connection = require("../../dbConnection");
const { v4: uuid } = require("uuid"); // v4 : uuid to change package name we set manually
const productVariation = require("./productVariations");
const attributes = require("./attributes");

class variationHasAttributes extends Model {}
variationHasAttributes.init(
  {
    variationHasAttributesId: {
      primaryKey: true,
      type: DataTypes.STRING(60), //default length of String is 255 and we can define in ()
    },
    productVariationId: {
      type: DataTypes.STRING(),
      references: {
        model: productVariation,
        key: "productVariationId",
      },
    },
    attributeId: {
      type: DataTypes.STRING(),
      references: {
        model: attributes,
        key: "attributesId",
      },
    },
  },
  {
    name: "variationHasAttributes", // if you dont provide it will save class name for table name
    timestamps: true, //creadted at & updaed at
    paranoid: true, //add time of delete in deletedAt
    sequelize: connection,
  }
);

//hook
variationHasAttributes.beforeCreate(async (variationHasAttributes) => {
  variationHasAttributes.variationHasAttributesId = uuid();
});

// users.afterCreate((user)=>{
//     delete user.dataValues.password;
// });

module.exports = variationHasAttributes;