const { DataTypes, Model } = require("sequelize");
const connection = require("../../dbconnection");
const { v4: uuid } = require("uuid");

class OrderItem extends Model {}

OrderItem.init(
  {
    order_item_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: () => uuid(),
    },
    order_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: "Order",
        key: "order_id",
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
    item_status: {
      type: DataTypes.ENUM("pending", "shipped", "delivered", "canceled"),
      defaultValue: "pending",
    },
    
    
  },
  {
    modelName: "OrderItem",
    timestamps: false,
    sequelize: connection,
  }
);

module.exports = OrderItem;
