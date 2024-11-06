const { DataTypes, Model } = require("sequelize");
const connection = require("../../dbconnection");
const { v4: uuid } = require("uuid");
const { hash } = require("bcryptjs");
//const { toDefaultValue } = require("sequelize/lib/utils");
//const { Connection } = require("pg");

class users extends Model {}

users.init(
  {
    userid: {
      primarykey: true,
      type: DataTypes.STRING(60),
    },
    username: {
      type: DataTypes.STRING(34),
      unique: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
  },
  {
    name: "users",
    timestamps: true,
    paranoid: true,
    sequelize: connection,
  }
);

//hook
users.beforeCreate(async (user) => {
  user.userid = uuid();
  user.password = await hash(user.password, 10);
});
users.afterCreate((user) => {
  delete user.dataValues.password;
});

module.exports = users;
