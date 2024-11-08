const { DataTypes, Model } = require("sequelize");
const connection = require("../../dbconnection");
const { v4: uuid } = require("uuid");

class ProductVariation extends Model {}

ProductVariation.init(
  {
    product_variation_id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: () => uuid(),
    },
   
    
    variation_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   
    
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
   
    
    status: {
      type: DataTypes.ENUM("available", "out_of_stock", "discontinued"),
      defaultValue: "available",
    },
   
   
  },
  {
    modelName: "ProductVariation",
    timestamps: false, // Avoid using default timestamps
    sequelize: connection,
  }
);

module.exports = ProductVariation;
