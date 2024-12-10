const { DataTypes, Model } = require("sequelize");
const connection = require("../../dbconnection");
const { v4: uuid } = require("uuid");

class order extends Model {}

order.init(
  {
    orderId: {
      type: DataTypes.STRING(60),
      primaryKey: true,
    },
    shippingAddress: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },

    totalPrice: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
  },

  {
    modelName: "order",
    timestamps: true,
    paranoid: true,
    sequelize: connection,
  }
);
order.beforeCreate(async (order) => {
  order.orderId = uuid();
});

module.exports = order;
