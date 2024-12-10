// const { models } = require("./index");
// module.exports = {
//   createUser: async (body) => {
//     try {
//       const user = await models.users.create({ ...body });

//       return {
//         response: user,
//       };
//     } catch (error) {
//       console.log("check");
//       console.log("check");
//       console.log("check");
//       console.log("check");

//       return {
//         error: error.errors[0].message,
//       };
//     }
//   },

//   getALLUser: async () => {
//     try {
//       const user = await models.users.findALL({ ...body });
//       return {
//         response: user,
//       };
//     } catch (error) {
//       return {
//         error: error.errors[0].message,
//       };
//     }
//   },
//   updateUser: async ({ username, ...body }) => {
//     try {
//       const user = await models.users.update(
//         {
//           ...body,
//         },
//         {
//           where: {
//             username: username,
//           },
//         }
//       );
//       return {
//         response: user,
//       };
//     } catch (error) {
//       return {
//         error: error.errors[0].message,
//       };
//     }
//   },
//   deleteUser: async ({ username }) => {
//     try {
//       const user = await models.users.destroy({
//         where: { username: username },
//       });
//       return {
//         response: user,
//       };
//     } catch (error) {
//       return {
//         error: error.errors[0].message,
//       };
//     }
//   },
// };

const { response } = require("express");
const { models } = require("./index");
const { Where } = require("sequelize/lib/utils");

module.exports = {
  createUser: async (body) => {
    try {
      const user = await models.users.create({ ...body });
      // OR
      // const user = models.users.create({userId:body.userId, name:body.name , username:body.username ,pasword:body.pasword});
      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error.errors[0].message,
      };
    }
  },

  getAllUser: async () => {
    try {
      const user = await models.users.findAll({
        attributes: {
          exclude: ["password", "createdAt", "updatedAt"],
        },
        paranoid: true,
      }); // ({attributes:["name","username"] OR {exclude:["password","createdAt","updateAt"]},paranoid : false})
      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error.errors[0].message,
      };
    }
  },

  getOneUser: async ({ email, username }) => {
    try {
      const user = await models.users.findOne({
        attributes: ["userId", "name", "username", "email", "password"],

        where: {
          ...(email != "false" ? { email: email } : { username: username }),
        },
      });
      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error.errors[0].message,
      };
    }
  },

  updateUser: async ({ username, ...body }) => {
    try {
      const user = await models.users.update(
        {
          ...body,
        },

        {
          where: {
            username: username,
          },
        }
      );
      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error.errors[0].message,
      };
    }
  },

  deleteUser: async ({ username }) => {
    try {
      const user = await models.users.destroy({
        where: { username: username },
      });
      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error.errors[0].message,
      };
    }
  },
};