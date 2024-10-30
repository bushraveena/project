const {DataTypes,Model}=  require("sequelize");
 
  class users extends model{

  }
  users.init({
    userid:{
        primarykey:true,
        type: DataTypes.STRING(60),

    },
    username:{
        type:DataTypes.STRING(34),
        unique:true,
        allowNull:false,
    },
    name:{
type:DataTypes.STRING(60),
allowNull:false,
    },
    password:{
        type: DataTypes.STRING(1000),
        allowNull:false,
    }

  },{})