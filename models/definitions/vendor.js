const { DataTypes, Model } = require("sequelize");
const connection = require("../../dbconnection");
const { v4: uuid } = require("uuid");

class Vendor extends Model {}

Vendor.init(
  {
    vendor_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: () => uuid(),
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    contact_email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    
  },
  {
    modelName: "Vendor",
    timestamps: false,
    sequelize: connection,
  }
);

module.exports = Vendor;
