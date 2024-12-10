const { DataTypes, Model } = require("sequelize");
const connection = require("../../dbconnection");
const { v4: uuid } = require("uuid");
const { hash } = require("bcryptjs");
class cart extends Model {}

cart.init(
  {
    cartId: {
      type: DataTypes.STRING(60),
      primaryKey: true,
    },
    itemsquantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    modelName: "Cart",
    timestamps: false,
    paranoid: true,
    sequelize: connection,
  }
);
cart.beforeCreate(async (cart) => {
  cart.cartId = uuid();
});

module.exports = cart;
