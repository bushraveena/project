const { DataTypes, Model } = require("sequelize");
const connection = require("../../dbconnection");
const { v4: uuid } = require("uuid");

class admin extends Model {}

admin.init(
  {
    adminId: {
      type: DataTypes.STRING(60),
      primaryKey: true,
    },
  },
  {
    modelName: "admin",
    timestamps: true,
    paranoid: true,
    sequelize: connection,
  }
);

// Hook to hash password before creation
admin.beforeCreate(async (admin) => {
  admin.adminId = uuid();
});

// Hook to remove the password field after creation

module.exports = admin;
