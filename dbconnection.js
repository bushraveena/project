// require("dotenv").config();
// const { Sequelize } = require("sequelize");

// const connection = new Sequelize({
//     host: process.env.DBHOST,
//     username: process.env.DBUSERNAME,
//     password: process.env.DBPASSWORD,
//     database: process.env.DBNAME,
//     dialect: process.env.DBDIALECT,
//     port: process.env.DBPORT,
// });

// connection.authenticate()
//     .then(() => {
//         console.log("Connected to the database");
//     })
//     .catch((error) => {
//         console.log(error);
//         console.log("Unable to connect to the database");
//     });

// module.exports = connection;
require("dotenv").config();

const {Sequelize} = require("sequelize");
// const sequelize = new Sequelize({
const connection = new Sequelize({
    host : process.env.DBHOST,
    username : process.env.DBUSERNAME,
    password : process.env.DBPASSWORD,
    database : process.env.DBNAME,
    dialect : process.env.DBDIALECT,
    port : process.env.DBPORT
});

//authenticate
connection.authenticate().then(()=>{
    console.log("Connected dto database");
}).catch((error)=>{
    console.log(error);
    console.log("Unable to connect to database");
});

module.exports = connection;