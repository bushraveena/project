// const express = require("express");
// const bodyParser = require("body-parser");
// const morgan = require("morgan");
// const { db } = require("./models/index");
// //const connection = require("./dbconnection");
// //imported express package here
// const userRouter = require("./Routes/userRouter");
// const authRouter = require("./Routes/authRouter");
// const port = 3000;

// //added port
// const app = express();
// app.use(morgan("dev"));
// //created server here
// app.use(bodyParser.urlencoded({ extended: true }));
// //parse application/json
// app.use(bodyParser.json());
// app.use("/user", userRouter);
// app.use("/auth", authRouter);

// db.connection
//   .sync({ alter: true })
//   .then(() => {
//     app.listen(port, () => {
//       console.log(`app listening on port ${port}`);
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//     console.log("unable to connect to database");
//   });

// app.get gets it path ("/Path",callback function)e.g("/user",(request,response)=>{}) 
///request have cookie header // response sucessfull or not ,password matches or not

//importted express package
const express = require("express");
const bodyParser=require("body-parser");
const morgan =require('morgan');
const {db} =require("./models/index")
// const connection = require("./dbConnection");

//importing routes
const userRouter= require("./routes/userRouter")
const authRouter= require("./routes/authRouter")
const vendorRouter= require("./routes/vendorRouter")
const productRouter = require("./routes/productRouter");
const cookieParser = require("cookie-parser");

//added port
const port = 3000;

//creating server 
const app = express();//it creates application

app.use(morgan("dev"));

app.use(bodyParser.urlencoded({extended:true})); // extended: true precises that the req.body object will contain values of any type instead of just strings.

// parse application/json
app.use(bodyParser.json());
app.use(cookieParser()); 

//adding routes path
app.use("/user",userRouter);    //user is base path and exact path will be get through userRouter
app.use("/auth",authRouter);
app.use("/vendor",vendorRouter);
app.use("/product",productRouter);

//in case of wrong route path
app.use((req,res,next)=>{
    res.send({
        status : 404,
        message: "wrong path",
        error:"error"
    });
    next(createError(404));
});

//alter : true enables you to add new column and it doesnt let the data to be lost
// if data is uploading just update data dont delete it 
db.connection.sync({alter : false}).then(()=>{
    //Started server
app.listen(port,()=>{
    console.log(` app listening on port ${port}`);
});
})
.catch((error)=>{
    console.log(error);
    console.log("unable to connect to daatbase");
});