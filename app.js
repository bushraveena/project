const express = require("express");
var bodyParser = require('body-parser')

const userRoutes = require("./Routes/user.Routes");
const adminRoutes = require("./Routes/admin.Routes");

const app = express()
//Body-Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// API Calling
app.use("/user", userRoutes);
app.use("/admin", adminRoutes);



// Port
const port = 3000;
app.listen(port, ()=>{
    console.log("The app is running on port "+ port);

})