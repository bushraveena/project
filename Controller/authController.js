//   module.exports={
//    login:(req,res)=>{
//       return res.send("login request");

//    },
//    logout:(req,res)=>{
//       return res.send("logout request");
//    }
//   };

const responseHandler = require("../responseHandler");
const { getOneUser } = require("../models/userModel");
const { compare } = require("bcryptjs");
require("dotenv").config();
const { sign } = require("jsonwebtoken");

module.exports = {
  login: async (req, res) => {
    try {
      const { username, password } = req.body;

      const response = await getOneUser({ email: "false", username: username });

      //if reesponse has error or null it will response no use exists
      if (response.error || !response.response) {
        res.cookie("auth", "undefined", { maxAge: 60000 });

        return responseHandler(
          res,
          response.error ? response : { error: "no user exists" }
        );
      }

      const isValid = await compare(
        password,
        response.response.dataValues.password
      );

      if (!isValid) {
        res.cookie("auth", "undefined", { maxAge: 60000 });
        return responseHandler(res, { error: "invalid credentials" });
      }

      delete response.response.dataValues.password;

      const token = sign(response.response.dataValues, process.env.SECRET, {
        expiresIn: 50,
      });

      //auth is just name that i asigned
      res.cookie("auth", token, { maxAge: 60000 });
      return responseHandler(res, { response: token });
    } catch (error) {
      return responseHandler(res, { error: error });
    }
  },
};
