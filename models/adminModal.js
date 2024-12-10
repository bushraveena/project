const { DataTypes, Model } = require("sequelize");
const connection = require("../../dbConnection");
const { v4: uuid } = require("uuid"); // v4 : uuid to change package name we set manually

class admin extends Model {}
admin.init(
  {
    adminId: {
      primaryKey: true,
      type: DataTypes.STRING(60), //default length of String is 255 and we can define in ()
    },
  },
  {
    name: "admin", // if you dont provide it will save class name for table name
    timestamps: true, //creadted at & updaed at
    paranoid: true, //add time of delete in deletedAt
    sequelize: connection,
  }
);

//hook
admin.beforeCreate(async (admin) => {
  admin.adminId = uuid();
});

module.exports = admin;
