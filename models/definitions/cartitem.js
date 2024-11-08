const { DataTypes, Model } = require("sequelize");
const connection = require("../../dbconnection");
const { v4: uuid } = require("uuid");

class CartItems extends Model {}

CartItems.init(
  {
    cart_item_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: () => uuid(),
    },
    cart_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Cart",
        key: "cart_id",
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
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    subtotal: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      defaultValue: function () {
        return this.price * this.quantity;
      },
    },
  },
  {
    modelName: "CartItems",
    timestamps: false,
    sequelize: connection,
  }
);

module.exports = CartItems;
