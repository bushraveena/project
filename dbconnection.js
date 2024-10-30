require("dotenv").config();

const {Sequelize}= require("sequelize");
const connection = new Sequelize({
Host:process.env.DBHOST,
username:process.env.DBUSERNAME,
password:process.env.DBPASSWORD,
database:process.env.DBNAME,
dialect:process.env.DBDIALECT,
Port:process.env.DBPORT,
});
sequelize
.authenticate()
.then(()=>{
    console.log("connected to database");
})
.catch((error)=>{
    console.log(error);
    console.log("unable to connect to database");

});

module.exports= connection;