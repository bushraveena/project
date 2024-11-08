const { DataTypes, Model } = require("sequelize");
const connection = require("../../dbconnection");
const { v4: uuid } = require("uuid");

class Order extends Model {}

Order.init(
  {
    order_id: {
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
    order_status: {
      type: DataTypes.ENUM(
        "pending",
        "paid",
        "shipped",
        "delivered",
        "canceled"
      ),
      defaultValue: "pending",
    },
    total_amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false, 
    },

    delivery_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    tracking_number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },

  {
    modelName: "Order",
    timestamps: false,
    sequelize: connection,
  }
);

module.exports = Order;
