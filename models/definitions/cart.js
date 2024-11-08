const { DataTypes, Model } = require("sequelize");
const connection = require("../../dbconnection");
const { v4: uuid } = require("uuid");

class Cart extends Model {}

Cart.init(
  {
    cart_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: () => uuid(),
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Users",
        key: "user_id",
      },
    },
    product_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Products",
        key: "product_id",
      },
    },
    
    cart_status: {
      type: DataTypes.ENUM("pending", "purchased", "abandoned"),
      defaultValue: "pending",
    },
  },
  {
    modelName: "Cart",
    timestamps: false,
    sequelize: connection,
  }
);

module.exports = Cart;
