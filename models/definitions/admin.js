const { DataTypes, Model } = require("sequelize");
const connection = require("../../dbconnection");
const { v4: uuid } = require("uuid");


class Admin extends Model {}

Admin.init(
  {
    adminid: {
      type: DataTypes.STRING(60),
      primaryKey: true,
      defaultValue: () => uuid(), // Generate UUID by default
    },
  },
  {
    modelName: "Admin",
    timestamps: true,
    paranoid: true,
    sequelize: connection,
  }
);

// Hook to hash password before creation
Admin.beforeCreate(async (admin) => {
 admin.adminid=uuid();
});

// Hook to remove the password field after creation


module.exports = Admin;
