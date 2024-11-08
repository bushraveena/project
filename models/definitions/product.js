const { DataTypes, Model } = require("sequelize");
const connection = require("../../dbconnection");
const { v4: uuid } = require("uuid");

class Product extends Model {}

Product.init(
  {
    product_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: () => uuid(),
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    category_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: "Categories",
        key: "category_id",
      },
    },
  },
  {
    modelName: "Product",
    timestamps: false,
    sequelize: connection,
  }
);

module.exports = Product;
