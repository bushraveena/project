const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const { db } = require("./models/index");
//const connection = require("./dbconnection");
//imported express pakage here
const userRouter = require("./Routes/userRouter");
const authRouter = require("./Routes/authRouter");
const port = 3000;

//added port
const app = express();
app.use(morgan("dev"));
//created server here
app.use(bodyParser.urlencoded({ extended: true }));
//parse application/json
app.use(bodyParser.json());
app.use("/user", userRouter);
app.use("/auth", authRouter);

db.connection
  .sync({ alter: true })
  .then(() => {
    app.listen(port, () => {
      console.log(`app listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
    console.log("unable to connect to database");
  });
