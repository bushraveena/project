// const { DataTypes, Model } = require("sequelize");
// const connection = require("../../dbconnection");
// const { v4: uuid } = require("uuid");

// class attributes extends Model {}

// attributes.init(
//   {
//     attributesId: {
//       type: DataTypes.STRING(60),
//       primaryKey: true,
//     },
//     name: {
//       type: DataTypes.STRING(60),
//       allowNull: false,
//     },
//     value: {
//       type: DataTypes.STRING(60),
//       allowNull: false,
//     },
//   },

//   {
//     modelName: "attributes",
//     timestamps: true,
//     paranoid: true,
//     sequelize: connection,
//   }
// );
// attributes.beforeCreate(async (attributes) => {
//   attributes.attributesId = uuid();
// });
// module.exports = attributes;


const { DataTypes, Model } = require("sequelize");
const connection = require("../../dbConnection");
const { v4: uuid } = require("uuid"); // v4 : uuid to change package name we set manually

class attributes extends Model {}
attributes.init(
  {
    attributesId: {
      primaryKey: true,
      type: DataTypes.STRING(60), //default length of String is 255 and we can define in ()
    },
    name: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    value: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
  },
  {
    name: "attributes", // if you dont provide it will save class name for table name
    timestamps: true, //creadted at & updaed at
    paranoid: true, //add time of delete in deletedAt
    sequelize: connection,
  }
);

//hook
attributes.beforeCreate(async (attributes) => {
  attributes.attributesId = uuid();
});

// users.afterCreate((user)=>{
//     delete user.dataValues.password;
// });

module.exports = attributes;