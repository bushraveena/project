const { DataTypes, Model } = require("sequelize");
const connection = require("../../dbconnection");
const { v4: uuid } = require("uuid");

class cartItem extends Model {}

cartItem.init(
  {
    cartitemId: {
      type: DataTypes.STRING(60),
      primaryKey: true,
      
    },
    name: { 
      type: DataTypes.STRING(60),
      allowNull: false,
      defaultValue:""
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique:true,
    },
    
   
    },
  
  {
    modelName: "cartItem",
    timestamps: false,
    sequelize: connection,
  }
);

module.exports = cartItem;
