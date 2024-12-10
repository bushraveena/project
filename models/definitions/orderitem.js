const { DataTypes, Model } = require("sequelize");
const connection = require("../../dbconnection");
const { v4: uuid } = require("uuid");

class orderItem extends Model {}

orderItem.init(
  {
    orderItemId: {
      type: DataTypes.STRING(60),
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    modelName: "orderItem",
    timestamps: true,
    paranoid: true,
    sequelize: connection,
  }
);
orderItem.beforeCreate(async (orderItem) => {
  orderItem.orderItemId = uuid();
});

module.exports = orderItem;
