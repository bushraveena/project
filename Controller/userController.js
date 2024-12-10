// const responsehandler = require("../responsehandler");
// const {
//   createUser,
//   getALLUser,
//   updateUser,
//   deleteUser,
// } = require("../models/userModel");
// //const {hash} = require ("bcryptjs");
// // const {v4:uuid}=require("uuid");
// //const userModel = require("../models/userModel");
// module.exports = {
//   create: async (req, res) => {
//     try {
//       const response = await createUser(req.body);
//       console.log("check", response);
//       return responsehandler(res, response);
//     } catch (error) {
//       return responsehandler(res, { error: error });
//     }
//   },
//   get: async (req, res) => {
//     try {
//       const response = await getALLUser();
//       return responsehandler(res, response);
//     } catch (error) {
//       return responsehandler(res, { error: error });
//     }
//   },
//   update: async (req, res) => {
//     try {
//       const response = await updateUser(req.body);
//       return responsehandler(res, response);
//     } catch (error) {
//       return responsehandler(res, { error: error });
//     }
//   },
//   deleteUser: async (req, res) => {
//     try {
//       const response = await deleteUser(req.query);
//       return responsehandler(res, response);
//     } catch (error) {
//       return responsehandler(res, { error: error });
//     }
//   },
// };
const responseHandler = require("../responseHandler");
const errorHandler = require("../errorHandler");
const {
  createUser,
  getAllUser,
  getOneUser,
  updateUser,
  deleteUser,
} = require("../models/userModel");

module.exports = {
  create: async (req, res) => {
    try {
      const response = await createUser(req.body);
      return responseHandler(res, response);
    } catch (error) {
      return responseHandler(res, { error: error });
    }
  },

  getOne: async (req, res) => {
    try {
      const response = await getOneUser(req.query);
      return responseHandler(res, response);
    } catch (error) {
      return responseHandler(res, { error: error });
    }
  },

  getAll: async (req, res) => {
    try {
      const response = await getAllUser();
      // return responseHandler(res,req.query)
      return responseHandler(res, response);
    } catch (error) {
      return responseHandler(res, { error: error });
    }
  },

  update: async (req, res) => {
    try {
      const response = await updateUser(req.body);
      return responseHandler(res, response);
    } catch (error) {
      return responseHandler(res, { error: error });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const response = await deleteUser(req.query);

      return responseHandler(res, response);
    } catch (error) {
      return responseHandler(res, { error: error });
    }
  },
};


