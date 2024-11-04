const express = require("express");
const bodyParser = require("body-parser")
const morgan = require("morgan");
const {db,models}=require("./models/index")  
const connection = require("./dbconnection");
//imported express pakage here
const userRouter = require("./Routes/userRouter");
const authRouter = require("./Routes/authRouter");
const port = 3000;

//added port
const app = express();
//created server here
app.use(bodyParser.urlencoded({ extended: true }));
//parse application/json
app.use(bodyParser.json());
app.use(morgan("dev"));






 
// API Calling
app.use("/user", userRouter);
app.use("/auth", authRouter);


app.use((req,res,next)=>{
    return res.send({
        status:400,
        error:"request not found",
    });
    next(createError(404));
});




// Port


db.connection
.sync({alter:true,logging:true})
.then(()=>{
    app.listen(port, ()=>{
        console.log(`app listening on port ${port} `);

});
})
.catch((error)=>{
    console.log(error);
    console.log("unable to connect to database");
});